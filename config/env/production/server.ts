export default ({ env }) => ({
  proxy: true,
  url: env("https://cms-labouture-production.up.railway.app/"), // Sets the public URL of the application.
  app: {
    keys: env.array("APP_KEYS"),
  },
});
