// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zilhani Academy",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://notes.zilhaniacademy.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ZilhaniAcademy", // Usually your GitHub org/user name.
  projectName: "notes", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: "Zilhani Academy Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "notesSidebar",
            position: "left",
            label: "IGCSE Notes",
          },
          {
            href: "https://zilhaniacademy.com/apply",
            label: "Enroll",
            position: "left",
          },
          {
            href: "https://zilhaniacademy.com/contact",
            label: "Contact Us",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "IGCSE Notes",
            items: [
              {
                label: "Mathematics",
                to: "/notes/igcse/mathematics/",
              },
              {
                label: "Physics",
                to: "/notes/igcse/physics/",
              },
              {
                label: "Business Studies",
                to: "/notes/igcse/business/",
              },
              {
                label: "Economics",
                to: "/notes/igcse/economics/",
              },
            ],
          },
          {
            title: "Important Links",
            items: [
              {
                label: "About Zilhani Academy",
                to: "https://zilhaniacademy.com/about",
              },
              {
                label: "Subjects",
                to: "/subjects",
              },
              {
                label: "Contact Us",
                to: "https://zilhaniacademy.com/contact",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://zilhaniacademy.com/blog",
              },
              {
                label: "Curious About Homeschooling?",
                to: "https://zilhaniacademy.com/why-more-families-are-choosing-homeschooling-the-benefits-you-need-to-know/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zilhani Academy.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
