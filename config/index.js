/* eslint-disable prettier/prettier */
module.exports = {
  //-- SITE SETTINGS -----
  author: "Sara Antole",
  siteTitle: "Sara Antole | Website",
  siteShortTitle: "SA", // Used as logo text in header, footer, and splash screen
  siteDescription: "Sara Antole, Fullstack Blockchain Developer",
  siteUrl: "https://saraantole.netlify.app/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      tertiary: "#ECECEC",
      text: "#1F1F1F",
      subtext: "#555555",
      background: "#F8F8F8",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#CCCC",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Manrope, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS ----
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
  //rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 6,

  //-- SOCIAL MEDIA SETTINGS -----
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/sara-antole/",
    },
    //{
    // name: "Medium",
    // url: "https://medium.com/@sara.antole",
    //},
    {
      name: "Github",
      url: "https://github.com/saraantole",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/the_unknown_developer/",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "About",
        url: "/about",
      },
      {
        name: "Projects",
        url: "/projects",
      },
      //{
      //name: "Blog",
      //url: "/blog",
      //}
    ],
    button: {
      name: "Contact",
      url: "/contact",
    },
  },
}
