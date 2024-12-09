const strapi = require('@strapi/strapi');

strapi().start().then(() => {
  console.log('Strapi server is running');
}).catch(err => {
  console.error('Failed to start Strapi server', err);
});
