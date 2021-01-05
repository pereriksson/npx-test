#!/usr/bin/env node

const axios = require('axios');

const client = axios.create();

client.get("https://www.google.com")
.then(res => {
    console.log("ok");
})
.catch(error => {
    console.log('error');
});
