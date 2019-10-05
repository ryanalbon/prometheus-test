const express = require('express');

const app = express();

app.get('/status', (req, res) => res.status(200).end());

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomResponseCode() {
  const x = Math.floor(Math.random() * 100);

  if (x < 90) {
    return 200;
  }

  if (x < 98) {
    return 400;
  }

  return 500;
}

app.get('/api/v1/gadgets', async (req, res) => {
  await sleep(Math.floor(Math.random() * 5000));
  res.status(getRandomResponseCode()).end();
});

module.exports = app;
