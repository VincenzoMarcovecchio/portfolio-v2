---
title: "How to Install the heroku cli "
cover: ""
date: "2021-05-30"
category: "heroku"
slug: "how-to-install-the-heroku-cli"

tags:
  - cli
---


The Heroku Command Line Interface (CLI) makes it easy to create and manage your Heroku apps directly from the terminal. It’s an essential part of using Heroku.


- <h2>MAC:</h2>
`brew tap heroku/brew && brew install heroku`

- <h2>WINDOWS:</h2>
<a href="https://cli-assets.heroku.com/heroku-x64.exe" target="_blank" rel="noopener noreferrer canonical">64-bit intaller</a>


<a href="https://cli-assets.heroku.com/heroku-x86.exe" target="_blank" rel="noopener noreferrer canonical">32-bit installer</a>

- <h2>FOR THE REST OF US NORMAL PEOPLE:</h2>

This installation method is instead required for users on ARM and BSD. You must have node and npm installed already.

- `npm install -g heroku`

Verifying your installation
To verify your CLI installation, use the heroku --version command:

```jsx
heroku --version
heroku/7.0.0 (darwin-x64) node-v8.0.0

```

<h2>Getting started</h2>

After you install the CLI, run the heroku login command. You’ll be prompted to enter any key to go to your web browser to complete login. The CLI will then log you in automatically.

```jsx
heroku login
heroku: Press any key to open up the browser to login or q to exit
 ›   Warning: If browser does not open, visit
 ›   https://cli-auth.heroku.com/auth/browser/***
heroku: Waiting for login...
Logging in... done
Logged in as me@example.com

```

For more information check out https://devcenter.heroku.com/articles/heroku-cli#download-and-install