// Path: ./config/env/production/server.js`
export default ({ env }) => ({
  proxy: true,
  url: env("https://la-bouture-admin-db70be1ae035.herokuapp.com/"), // Sets the public URL of the application.
  app: {
    keys: env.array("APP_KEYS"),
  },
});
