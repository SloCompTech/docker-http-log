const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('*', (req, res) => {
  console.log({
    req: {
      baseUrl: req.baseUrl,
      body: req.body,
      cookieParser: req.cookies,
      hostname: req.hostname,
      ip: req.ip,
      ips: req.ips,
      method: req.method,
      originalUrl: req.originalUrl,
      params: req.params,
      path: req.path,
      protocol: req.protocol,
      query: req.query,
      secure: req.secure,
      signedCookies: req.signedCookies,
      stale: req.stale,
      subdomains: req.subdomains,
      xhr: req.xhr,
    },
    res: {
      headersSent: res.headersSent,
      locals: res.locals,
    },
  });
  return res.end();
});

module.exports = app;
