'use strict';

/**
 * hero-picture service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-picture.hero-picture');
