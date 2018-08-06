process.env.NODE_ENV = 'development';

const fs = require('fs-extra');
const paths = require('react-scripts/config/paths');
const webpack = require('webpack');
const config = require('react-scripts/config/webpack.config.dev.js');

config.entry = config.entry.filter(
  entry => !entry.includes('webpackHotDevClient')
);

config.output.path = paths.appBuild;
paths.publicUrl = paths.appBuild + '/';

webpack(config).watch({}, (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    // Copy public folder
    fs.copySync(paths.appPublic, paths.appBuild, {
      dereference: true,
      filter: file => file !== paths.appHtml
    });
  }
  console.log(stats.toString({
    chunks: false,
    colors: true
  }));
});
