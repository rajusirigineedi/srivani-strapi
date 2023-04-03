'use strict';

/**
 * director-word service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::director-word.director-word');
