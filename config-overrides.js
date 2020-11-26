const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@store': 'src/store',
    '@component': 'src/component',
    '@platform': 'src/platform',
    '@aside': 'src/component/Aside',
    '@main': 'src/component/Main'
  })(config)

  return config
}