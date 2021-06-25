module.exports = {
  ci: {
    collect: {
      headful: false,
      url: 'https://konkonta.com',
    },
    upload: {
      target: 'lhci',
      token: '9e7fb8dc-bb93-44a5-84a8-8e53547c7586',
      serverBaseUrl: 'http://localhost:5000',
    },
  },
  assert: {
    assertions: {
      'categories:performance': ['warn', { minScore: 0.9 }],
      'categories:accessibility': ['warn', { minScore: 1 }],
    },
  },
};
