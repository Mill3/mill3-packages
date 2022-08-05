module.exports = {
  stories: ['../stories/**/*.stories.@(jsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-viewport'
    },
    {
      name: '@storybook/addon-storysource'
    },
    {
      name: '@whitespace/storybook-addon-html'
    }
  ],
};
