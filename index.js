const express = require('express');
const app = express();
const ldap = require('ldapjs');
router = require('./router');

app.listen(3000, function () {
    console.log("server started")
});
