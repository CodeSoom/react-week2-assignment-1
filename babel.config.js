module.exports = {
  presets:
    [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
            chrome: '79',
          },
        },
      ],
      '@babel/preset-react',
    ],
};
