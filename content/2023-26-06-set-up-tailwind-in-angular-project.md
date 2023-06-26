---
title: "How to set up a tailwind project with Angular"
cover: ""
date: "2023-26-06"
category: "angular"
slug: "how-to-set-up-a-tailwind-project-with-Angular"

tags:
  - tailwind
  - angular
---




<h2>Step 1: Create a new Angular project</h2>
Open your terminal or command prompt and run the following command to create a new Angular project



```ng new my-tailwind-project```
This will create a new Angular project named "my-tailwind-project" in a folder with the same name. Navigate into the project folder using the command:



```cd my-tailwind-project```
Step 2: Install Tailwind CSS dependencies
In your project directory, install the necessary dependencies by running the following command:



```npm install tailwindcss postcss autoprefixer```
Step 3: Generate Tailwind CSS configuration files
Next, generate the Tailwind CSS configuration files using the following command:



```npx tailwindcss init```
This will create a tailwind.config.js file in your project directory.



Step 4: Configure PostCSS
Create a new file named postcss.config.js in the project directory and add the following content:

```javascript


module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};



```



Step 5: Update the Angular styles configuration
Open the angular.json file in your project root. Locate the projects > your-project-name > architect > build > options section and update the "styles" array to include the following entries:



```javascript


"styles": [
  "src/styles.css",
  "./node_modules/tailwindcss/base.css",
  "./node_modules/tailwindcss/components.css",
  "./node_modules/tailwindcss/utilities.css"
],


```


This ensures that the Tailwind CSS stylesheets are included in your project.

Step 6: Create a basic component
You can now create a basic Angular component to test Tailwind CSS styles. In the project root directory, run the following command:




```ng generate component test```
This will create a new component named "test".


Step 7: Add Tailwind CSS classes to the component
Open the test.component.html file in the src/app/test folder and add some sample HTML with Tailwind CSS classes:




<div class="bg-blue-500 p-4">
  <h1 class="text-white">Hello, Tailwind CSS!</h1>
</div>




Step 8: Start the development server
Start the Angular development server using the following command:


```ng serve```



This will compile the Angular project and start a local development server. Open your browser and navigate to http://localhost:4200 to see your Angular application with Tailwind CSS styles applied.

That's it! You have successfully set up a Tailwind CSS project in the latest version of Angular. You can now use Tailwind CSS classes in your Angular components to style your application.