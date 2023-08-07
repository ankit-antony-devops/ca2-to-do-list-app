const path = require('path');
const webpack = require('webpack');

const environment = process.env.ENVIRONMENT;

console.log('environment:::::', environment);

let ENVIRONMENT_VARIABLES = {
  'process.env.ENVIRONMENT': JSON.stringify('development'),
  'process.env.PORT': JSON.stringify('3080'),
  'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb://mongo-db:27017')
};

if (environment === 'test') {
  ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify('test'),
    'process.env.PORT': JSON.stringify('3080'),
    'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb://mongo-db:27017')
  };
} else if (environment === 'production') {
  ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify('production'),
    'process.env.PORT': JSON.stringify('80'),
    'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb://basesample-server:RB4ZqwkFshugnKI7b07CXtR3SL0SyvJ0T4IG3tIi6q16gwPBiPakkYAGTB8EiY0QEpg9WQUpjKOBACDbJUQLOw==@basesample-server.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@basesample-server@')
  };
}

module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js',
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin(ENVIRONMENT_VARIABLES),
  ],
};