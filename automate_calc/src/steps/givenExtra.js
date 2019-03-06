const {
    Given,
} = require('cucumber');

require('../../support/lib/getUrlAndTitle');
require('../../support/action/pause');

Given(/^I visit the website "([^"]*)?"$/, (url) => {
    browser.waitUntil(() => browser.url(url), 30000);
});
