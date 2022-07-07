const { removePlugin, PLUGINS } = require('@vuepress/markdown')

module.exports = {
  title: 'Thorny\'s blog',
  themeConfig: {
    nav: [
      { text: 'Posts', link: '/posts/' },
      { text: 'Tags', link: '/tags/' },
      { text: 'About me', link: 'https://thorny.me' },
    ],
  },
  plugins: [
    [
      () => ({
        chainMarkdown(config) {
          removePlugin(config, PLUGINS.EMOJI)
        },
      }),
    ],
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/posts/',
            itemPermalink: '/post/:slug',
            layout: 'Posts',
            itemLayout: 'Post',
            pagination: {
              layout: 'Posts',
            },
          },
        ],
        frontmatters: [
          {
            id: 'tag',
            keys: ['tag', 'tags'],
            path: '/tags/',
            layout: 'Tags',
            scopeLayout: 'Posts',
            pagination: {
              layout: 'Posts',
            },
          },
        ],
      },
    ],
  ],
}
