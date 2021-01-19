---
title: 'How to change the URI (URL) of your remote Git repository'
cover: ''
date: '2021-01-14'
category: 'tech'
slug: 'how-to-change-the-url-of-remote-git-repository'

tags:
  - git
---

You probaly cloned the repository didn't you, if so the repository comes with the owner url but you can always change it with your own repository url by typing the following commands

```py

git remote -v
# View existing remotes
# origin  https://github.com/user/repo.git (push)

git remote set-url origin https://github.com/user/repo2.git
# Change the 'origin' remote's URL

git remote -v
# Verify new remote URL
# origin  https://github.com/user/repo2.git (fetch)
# origin  https://github.com/user/repo2.git (push)

```
