---
title: "Google analytics log events integration on react form"
cover: "a-complete-react-framer-motion-contact-form-with-google-logevent-integration"
date: "2022-10-10"
category: "google-logevent"
slug: "a-complete-react-framer-motion-contact-form-with-google-logevent-integration"

tags:
  - react-hook-form
  - framer-motion
  - google-logevent
---

For this tutorial we are going to use `react-hook-form` and Typescript. We will go through the hooks and make it reproducible and fully funcional. 


In my `next.js` project I have created a contact page, where I want my form to animate on first load. My imports are the followings


```jsx


import { useMemo, useState, BaseSyntheticEvent, useEffect } from 'react'

import { useForm } from 'react-hook-form'
import FormErrorMessage from '@/components/error-message'
import { ContactData, ContactResponse } from '@/interfaces/contact'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '@/utils/motion'
import { event as logEvent } from '@/lib/gtag'
import useResetScroll from 'hooks/useResetScroll'


```

I will show you what the components look like and the interfaces


This is FormErrorMessage (very easy, it just return the props you give it, else null):


```jsx


export default function FormErrorMessage({ message }: { message?: string }) {
  if (!message) {
    return null
  }

  return (
    <span
      role="error"
      className="text-red-500 text-sm ml-0 sm:ml-5 my-5 sm:my-0 inline-block"
    >
      {message}
    </span>
  )
}


```


This is useResetScroll hook (again very easy, it scrolls to the top of the window whenever triggered):



```jsx


import { useEffect } from 'react'

export default function useResetScroll() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}



```


The logEvent function will help us submit`to our Google analytics, detailed information about our users:


```jsx



export const GA_TRACKING_ID = your google analytics track id

export const pageview = (url: string) => {
  ;(window as any).gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ //our function
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label: string
  value: number | string
}) => {
  ;(window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}



```


Another interesting component to take a look at is the `fadeInUp, stagger` by `framer-motion` . It's just a better way to hold the information you need. You will see it in use...



```jsx



export const easing = [0.6, -0.05, 0.01, 0.99]

export const fadeInUp = {
  initial: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}


```


The final form is the following



```jsx



export default function Contact() {
  const { register, handleSubmit, errors } = useForm()
  const [status, setStatus] = useState('idle')

  useResetScroll()

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      setTimeout(() => setStatus('idle'), 3000)
    }
  }, [status]) //on every status change

  const submitMessage = async (
    data: ContactData,
    event: BaseSyntheticEvent
  ) => {
    const { name, email, message } = data
    if (!name || !email || !message.trim()) {
      logEvent({ //google information
        action: 'User submitted form without filling details',
        category: 'engagement',
        label: 'user_error',
        value: 0,
      })
      return
    }
    try {
      setStatus('sending')
      const contactResponse = await fetch(`/api/contact`, {
        method: 'POST',
        body: JSON.stringify({
          name: name.trim(),
          email,
          message: message.trim(),
        }),
      })
      const contactStatus: ContactResponse = await contactResponse.json()

      if (contactStatus.success) {
        logEvent({ //google information
          action: 'User sent a message',
          category: 'engagement',
          label: 'user_success',
          value: 100,
        })
        setStatus('success')
        event.target.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const buttonText = useMemo(() => {
    if (status === 'success') return 'Message sent!'
    else if (status === 'error') return 'Mission Failed 😶'
    else if (status === 'sending') return 'Sending message'
    return 'Send message'
  }, [status])

  return (
    <motion.div
      className="p-0 w-full"
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <Head title="Contact - Adithya NR" />
      <Container>
        <div className="md:w-2/3 w-full mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:text-5xl text-3xl font-bold mb-3"
          >
            Get in touch
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Send me a message here and I&apos;ll get back to you ASAP
          </motion.p>
          <motion.form
            variants={stagger}
            onSubmit={handleSubmit(submitMessage)}
          >
            <motion.div variants={fadeInUp} className="form-group">
              <label className="label" htmlFor="name">
                Your name
              </label>
              <input
                className="input"
                type="text"
                ref={register({ required: 'Name cannot be empty 🙁' })}
                name="name"
                id="name"
                data-testid="name"
                placeholder="Mike Wazowski"
              />
              {errors.name ? (
                <FormErrorMessage message={errors.name.message} />
              ) : null}
            </motion.div>
            <motion.div variants={fadeInUp} className="form-group">
              <label className="label" htmlFor="email">
                Your email address
              </label>
              <input
                className="input"
                type="email"
                data-testid="email"
                ref={register({
                  required: 'Please provide your email address 😓',
                  pattern: {
                    value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/u,
                    message: 'Invalid email address...',
                  },
                })}
                name="email"
                id="email"
                placeholder="mike@monstersinc.com"
              />
              {errors.email ? (
                <FormErrorMessage message={errors.email.message} />
              ) : null}
            </motion.div>
            <motion.div variants={fadeInUp} className="form-group">
              <label className="label" htmlFor="message">
                Your message
              </label>
              <textarea
                ref={register({  
                  required: 'Please leave a message 😢',
                  minLength: { value: 10, message: 'Message too short 😞' },
                })}
                className="input"
                name="message"
                data-testid="message"
                id="message"
                rows={5}
              />
              {errors.message ? (
                <FormErrorMessage message={errors.message.message} />
              ) : null}
            </motion.div>
            <motion.input
              variants={fadeInUp}
              whileHover={{ scale: 1.05, x: 0 }}
              whileTap={{ scale: 0.5, x: 0 }}
              type="submit"
              role="submit"
              value={buttonText}
              className={`submit-button hover:text-white w-full sm:w-auto ${
                status === 'success' ? 'bg-green-600 text-black' : ''
              }`}
            />
          </motion.form>
        </div>
      </Container>
      <br />
    </motion.div>
  )
}



```

The interisting part about this form is the google integration. <a href="https://support.google.com/tagmanager/answer/6106716?hl=en" target="_blank" >This article explains how to use Tag Manager to set up Universal Analytics event tags that are triggered in response to clicks on links, clicks on other types of elements, at timed intervals, and when a forms are submitted.</a>. Apperently though there is no CSRF protection it would be good to take note of it.


Hope you find this read helpful. Peace


Final result: <a href="https://adithyabhat.com/contact" target="_blank">Amazing portfolio developer</a>