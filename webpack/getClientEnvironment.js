const getClientEnvironment = (config, publicUrl) => ({

  // Useful for determining whether we’re running in production mode.
  // Most importantly, it switches React into the correct mode.
  NODE_ENV: process.env.NODE_ENV || config.environment,

  // Useful for resolving the correct path to static assets in `public`.
  // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
  // This should only be used as an escape hatch. Normally you would put
  // images into the `src` and `import` them in code to get their paths.
  PUBLIC_URL: publicUrl,

  TITLE: config.vkTinker.vkGroup.title,
  APPLICATION_ID: config.vkTinker.vkApi.applicationId,
});

module.exports = getClientEnvironment;
