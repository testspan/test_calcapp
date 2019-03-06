import getElement from '../../page_object_model/tools/getElement';

/**
 * Check the given property of the given element
 * @param  {String}   isCSS         Whether to check for a CSS property or an
 *                                  attribute
 * @param  {String}   attrName      The name of the attribute to check
 * @param  {String}   selector      Element selector
 * @param  {String}   falseCase     Whether to check if the value of the
 *                                  attribute contains or not
 * @param  {String}   expectedValue The value to check against
 */
export default (isCSS, attrName, selector, falseCase, expectedValue) => {
    const elem = getElement(selector);

    /**
     * The command to use for fetching the expected value
     * @type {String}
     */
    const command = isCSS ? 'getCssProperty' : 'getAttribute';

    /**
     * Te label to identify the attribute by
     * @type {String}
     */
    const attrType = (isCSS ? 'CSS attribute' : 'Attribute');

    /**
     * The actual attribute value
     * @type {Mixed}
     */
    let attributeValue = browser[command](elem, attrName);

    /**
     * when getting something with a color or font-weight WebdriverIO returns a
     * object but we want to assert against a string
     */
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
};
