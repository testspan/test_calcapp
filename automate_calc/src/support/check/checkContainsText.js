import getElement from '../../page_object_model/tools/getElement';
import getLiteral from '../../page_object_model/tools/getLiteral';

/**
 * Check if the given elements contains text
 * @param  {String}   elementType           Element type (element or button)
 * @param  {String}   selector              Element selector
 * @param  {String}   falseCase             Whether to check if the content contains
 *                                          the given text or not
 * @param  {String}   expectedTextLiteral   The text to check against
 */
export default (elementType, selector, falseCase, expectedTextLiteral) => {
    const element = getElement(selector);
    const expectedText = getLiteral(expectedTextLiteral);

    /**
     * The command to perform on the browser object
     * @type {String}
     */
    let command = 'getValue';

    if (
        elementType === 'button'
        || browser.getAttribute(element, 'value') === null
    ) {
        command = 'getText';
    }

    /**
     * False case
     * @type {Boolean}
     */
    let boolFalseCase;

    /**
     * The expected text
     * @type {String}
     */
    let stringExpectedText = expectedText;

    /**
     * The text of the element
     * @type {String}
     */
    const text = browser[command](element);

    if (typeof expectedText === 'undefined') {
        stringExpectedText = falseCase;
        boolFalseCase = false;
    } else {
        boolFalseCase = (falseCase === ' not');
    }

    if (boolFalseCase) {
        expect(text)
            .to
            .not
            .contain(stringExpectedText);
    } else {
        expect(text)
            .to
            .contain(stringExpectedText);
    }
};
