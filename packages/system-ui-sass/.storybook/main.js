module.exports = {
  stories: ['../stories/**/*.stories.@(jsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-essentials'
    },
    {
      name: '@storybook/addon-storysource'
    },
    {
      name: '@storybook/addon-viewport'
    },
    {
      name: '@whitespace/storybook-addon-html'
    }
  ]
};
