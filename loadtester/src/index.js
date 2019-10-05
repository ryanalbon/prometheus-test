#!/usr/bin/env node

const loadtest = require('loadtest');

const config = {
  url: process.env.URL || 'http://api:8080/api/v1/gadgets',
  maxRequests: process.env.MAX_REQUESTS || 10000,
  concurrency: process.env.CONCURRENCY || 10,
};

loadtest.loadTest(config);
