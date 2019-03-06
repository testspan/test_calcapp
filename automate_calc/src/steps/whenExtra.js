import checkIfElementExists from '../../support/check/checkIfElementExists';
import clickElement from '../../support/action/clickElement';

const {
    When,
} = require('cucumber');

require('../../support/lib/getUrlAndTitle');
require('../../support/action/pause');

When(/^I wait for the url to load$/, () => {
    browser.waitUntil(() => browser.url(), 30000);
    browser.pause(1000);
});

When(/^I scroll down with "([^"]*)" offset$/, (off) => {
    let y = 0;

    while (y <= off) {
        browser.scroll(0, y);
        y += 250;
        browser.pause(500);
    }

    browser.pause(1000);
});

When(/^I scroll to the top$/, () => {
    browser.scroll(0, 0);
    browser.pause(1000);
});

When(/^I focus on the frame "([^"]*)?"$/, (id) => {
    browser.waitForExist(id);

    /* eslint-disable no-undef */
    const myFrame = $(id).value;
    /* eslint-enable no-undef */

    browser.frame(myFrame);
    browser.pause(1000);
});

When(/^I switch to the frame "([^"]*)?"$/, (id) => {
    /* eslint-disable no-undef */
    const myFrame = $(id).value;
    /* eslint-enable no-undef */

    browser.frame(myFrame);
    browser.pause(1000);
});

When(/^I click browser back$/, () => {
    browser.back();
    browser.pause(1000);
});

When(/^I click on the element "([^"]*)?" with index "([^"]*)?"$/, (elem, index) => {
    checkIfElementExists(elem);
    browser.elements(elem).value[index].click();
    browser.pause(1000);
});

When(/^I click on the element "([^"]*)?" "([^"]*)?" times$/, (elem, count) => {
    for (let i = 0; i < count; i += 1) {
        clickElement('click', 'element', elem);
    }
});

When(/^I press "([^"]*)" "([^"]*)" times$/, (key, count) => {
    for (let i = 0; i < count; i += 1) {
        browser.keys(key);
    }
});

When(/^I refresh the current page$/, () => {
    browser.refresh();
    browser.pause(1000);
});
