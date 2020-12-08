---
title: 'Decentralized Publishing Model'
cover: 'decentralized-publishing-model.jpg'
date: '2017-01-01'
category: 'tech'
slug: 'decentralized-publishing-model'

tags:
  - internet freedom
---

Content on the IPFS network is linked by its hash. A hash looks like this: `QmNuGu4moPdCu3Rrnia77k3wDS2v4jLxmyiE68N7fGEDv5` The cryptography behind these hashes ensures that any random person can provide a copy of the conent, and you can be sure it hasn't been tampered with. But the downside is that any time a piece of content (like this website) is updated, the hash must also change, and that change must be broadcast to the people who want to access the content.
IPFS has a general solution to this problem called IPNS, which can be very slow. Instead, this site uses the Bitcoin Cash Blockchain (BCH) to syndicate updates. The uncensorable nature of the BCH blockchain ensures that updates to the site can not be blocked, and links to past and present conent can not be lost.
<br>
This new, permissionless, censorship-resistant form of publishing makes use of a few tools that I created:
<br>

- ipfs-web-server is the 'back end' web server running on the Raspberry Pi pictured above. It serves the content in a conventional way, but also syndicates it over the IPFS and Tor networks.
  <br>
- gatsby-ipfs-boilerplate is the 'front end' website template used to create this site. You can fork it to create your own website. It includes all the prerequisits for syndicating your site over the IPFS network.
  <br>
- memo-push is a tool used to publish the IPFS link on the Bitcoin Cash blockchain, using the Memo.cash protocol. It's important to note that Memo.cash is just a site. The data can be accessed directly off the BCH blockchain.
  <br>
  -ipfs-stay-connected (optional) Will connect your local IPFS node to an array of other IPFS nodes, and will renew the connection every couple minutes to ensure nodes stay connected. It's very useful when uploading and syndicating data over the IPFS network.
  <br>

## Decentralized Publishing Model

Below is a model illustrating the different ways this website can be accessed over the internet.
<br>

- The website is updated on a Dev Box. Updated content is uploaded to the IPFS network and the new link is published to the BCH blockchain. The Raspberry Pi periodically checks the BCH network for updates published to a specific address. If an update is detected, the updates are downloaded from the IPFS network.
  <br>
- The Rasberry Pi then serves the content over the clearnet and Tor darkweb. It also begins pinging IPFS public gateways so that other servers begin downloading and syndicating the IPFS content.
  <br>
- Mirror servers, Random IPFS users, and distributed web apps (dapps) can independently and permissionlessly check the BCH address and syndicate the IPFS data too. This all taps into the Streisand Effect, causing content to be easier to syndicate if an authority-in-power tries to censor it.
  <br>

## How You Can Help

You can help distribute this site and any other content on IPFS by running your own node and pinning the content. This allows your node to download and share the content with anyone else in the network.
<br>

- Install IPFS on your own computer.
  <br>
- Get the latest IPFS hash of this blog from this memo.cash feed.
  <br>
- Run ipfs pin add -r hash to download and share the content. Replace 'hash' with the hash at the top of the memo.cash feed.
  <br>

- Check out the boilerplate here https://github.com/christroutner/gatsby-ipfs-boilerplate

## You are now doing your part to fight censorship on the internet!
