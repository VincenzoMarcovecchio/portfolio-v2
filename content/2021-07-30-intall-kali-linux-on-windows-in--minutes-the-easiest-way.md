---
title: "Run Kali linux as an App"
cover: "install-kali-linux-on-windows-in-5-minutes-the-easiest-way.jpg"
date: "2021-07-20"
category: "kali"
slug: "install-kali-linux-on-windows-in-5-minutes-the-easiest-way"

tags:
  - kali
---

I came across this solution after trying to install the kali linux .iso file on VMware, not able to extract .iso with 7zip I than wanted to go this way that, to this day, it still works, but also it can be a good practice as you have to install modules one by one as you need.

The process is this 

🔦🔦🔦COMMANDS:🔦🔦🔦

1. INSTALL WSL 2

RUN POWERSHELL as administrator

⚙️ Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux

RESTART

⚙️ dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

⚙️ dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

RESTART

Download Linux Kernel: https://aka.ms/wsl2kernel

Download Kali Linux from Windows apps

SET DEFAULT TO WSL 2
⚙️ wsl --set-default-version 2

CHECK VERSION 
⚙️ wsl --list --verbose

2. INSTALL GUI

⚙️ sudo apt update && sudo apt upgrade -y

⚙️ sudo apt install kali-desktop-xfce -y

XRDP

⚙️ sudo apt install xrdp -y

⚙️ sudo service xrdp start


I don' t really see it as the best privacy oriented solution but it might be a fast one. And also rember hacking is illegal you are responsible for what you do, so stick to hackthebox and common ctf challenges. Bye