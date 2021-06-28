const config = {
  siteTitle: `Vincenzo's codes`, // Site title.
  siteTitleShort: 'A Web Developer Portfolio', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'A Web Developer Portfolio', // Alternative site title for SEO.
  siteLogo: './favicon/engine.png', // Logo used for SEO and manifest.
  siteUrl: 'https://vincenzo.codes', // Domain of your website without pathPrefix.
  pathPrefix: '/', // gatsby buildPrefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "What I've been up to in the world of web development, this is my portfolio as a junior developer, it is meant to keep me motivated along the journey. In my spare time I always try to improve my front end skills and keep updated with the upcoming technologies but not only, I have a secret hacking passion", // Website description used for RSS feeds/meta description tagy

  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssTitle: 'Codes RSS Feed', // Title of the RSS feed
  siteFBAppID: '1190093721349138', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-167509497-2', // GA tracking ID.

  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 5, // Amount of posts displayed per listing page.
  userName: 'Vincenzo Marcovecchio', // Username to display in the author segment.
  userEmail: 'dev_vincenzo@protonmail.com', // Email used for RSS feed's author segment
  userTwitter: 'https://twitter.com/_vinny_92', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'North Pole, Earth', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/VincenzoMarcovecchio/portfolio-v2',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/_vinny_92',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:dev_vincenzo@protonmail.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2020 codes', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`

module.exports = config
