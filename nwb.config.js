module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false,
  },
  babel: {
    cherryPick: 'lodash',
    runtime: 'helpers',
    removePropTypes: {
      mode: 'remove',
      removeImport: true,
    },
  },
};
