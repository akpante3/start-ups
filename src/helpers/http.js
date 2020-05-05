const axios = require('axios');

export const getOrganizations = new Promise((resolve) => resolve(axios.get('http://localhost:8008/organizations.json')))

