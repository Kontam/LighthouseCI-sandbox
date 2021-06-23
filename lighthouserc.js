module.exports = {
  ci: {
    collect: {
      headful: false,
      url: 'https://konkonta.com',
    },
  },
  assert: {
    assertions: {
      'categories:performance': ['warn', { minScore: 0.9 }],
      'categories:accessibility': ['warn', { minScore: 1 }],
    },
  },
};
