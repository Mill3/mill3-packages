module.exports = {
  stories: ['../stories/**/*.stories.@(jsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-docs'
    },
    {
      name: '@storybook/addon-storysource'
    },
    {
      name: '@storybook/addon-viewport'
    }

  ]
};
