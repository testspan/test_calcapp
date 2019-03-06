import waitFor from '../../support/action/waitFor';
import checkEqualsText from '../../support/check/checkEqualsText';
import checkContainsAnyText from '../../support/check/checkContainsAnyText';

const {
    Then,
} = require('cucumber');

const {
    expect,
} = require('chai');

require('../../support/lib/getUrlAndTitle');
require('../../support/action/pause');

Then(/^I expect that website's "([^"]*)?" title is "([^"]*)?"$/, (url, title) => {
    const result = browser.getUrlAndTitle('foobar');

    assert.strictEqual(result.url, url);
    assert.strictEqual(result.title, title);
    assert.strictEqual(result.customVar, 'foobar');
});

Then(/^I expect that element "([^"]*)?" with index "([^"]*)?" is( not)* visible$/, (element, index, falseCase) => {
    let isVisible;

    if (browser.elements(element).value[index]) {
        isVisible = browser.elements(element).value[index].isVisible();
    } else {
        isVisible = false;
    }

    if (falseCase) {
        expect(isVisible)
            .to
            .not
            .equal(true, `Expected element "${element}" not to be visible`);
    } else {
        expect(isVisible)
            .to
            .equal(true, `Expected element "${element}" to be visible`);
    }
});

Then(/^I expect that element "([^"]*)?" size is( not)* "([^"]*)?"$/, (element, falseCase, size) => {
    const eLength = browser.elements(element).value.length;

    if (falseCase) {
        expect(eLength)
            .to
            .not
            .equal(parseInt(size, 10), `Expected element "${element}" not to have size "${size}"`);
    } else {
        expect(eLength)
            .to
            .equal(parseInt(size, 10), `Expected element "${element}" to have size "${size}"`);
    }
});

Then(/^I expect that element "([^"]*)?" is( not)* active/, (elem, falseCase) => {
    const command = 'getAttribute';
    const attrType = 'Attribute';
    const attrName = 'class';
    const expectedValue = 'active';

    let attributeValue = browser[command](elem, attrName);

    if (attrName.match(/(color|font-weight)/)) {
        attributeValue = attributeValue.value;
    }

    if (falseCase) {
        expect(attributeValue)
            .to
            .not
            .contains(
                expectedValue,
                `${attrType} of element "${elem}" should not contain `
                + `"${attributeValue}"`
            );
    } else {
        expect(attributeValue)
            .contains(
                expectedValue,
                `${attrType} of element "${elem}" should not contain `
                + `"${attributeValue}", but "${expectedValue}"`
            );
    }
});

Then(/^I expect that element "([^"]*)?" with index "([^"]*)?" is( not)* active/, (elem, index, falseCase) => {
    const attrType = 'Attribute';
    const attrName = 'class';
    const expectedValue = 'active';

    let attributeValue = browser.elements(elem).value[index].getAttribute(attrName);

    if (attrName.match(/(color|font-weight)/)) {
        attributeValue = attributeValue.value;
    }

    if (falseCase) {
        expect(attributeValue)
            .to
            .not
            .contains(
                expectedValue,
                `${attrType} of element "${elem}" should not contain `
                + `"${attributeValue}"`
            );
    } else {
        expect(attributeValue)
            .contains(
                expectedValue,
                `${attrType} of element "${elem}" should not contain `
                + `"${attributeValue}", but "${expectedValue}"`
            );
    }
});

Then(/^I expect a (success|warning|error) toast with title "([^"]*)" and message "([^"]*)" to be displayed$/, (type, title, message) => {
    waitFor(`.toast.toast-${type}`, '15000', false, 'be visible');

    if (browser.getText('.toast-title').length > 0) {
        checkEqualsText('element', '.toast-title', false, title);
    }

    if (browser.getText('.toast-message').length > 0) {
        checkEqualsText('element', '.toast-message', false, message);
    }

    waitFor(`.toast.toast-${type}`, '15000', true, 'be visible');
});

Then(/^I expect a (success|warning|error) toast to be displayed$/, (type) => {
    waitFor(`.toast.toast-${type}`, '15000', false, 'be visible');

    if (browser.getText('.toast-title').length > 0) {
        checkContainsAnyText('element', '.toast-title', false);
    }

    if (browser.getText('.toast-message').length > 0) {
        checkContainsAnyText('element', '.toast-message', false);
    }

    waitFor(`.toast.toast-${type}`, '15000', true, 'be visible');
});

Then(/^I expect a progress bar is visible$/, () => {
    waitFor('.process-progress', '30000', false, 'be visible');
    waitFor('.process-progress', '30000', true, 'be visible');
});
