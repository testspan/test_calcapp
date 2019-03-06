import getElement from '../../page_object_model/tools/getElement';
import getLiteral from '../../page_object_model/tools/getLiteral';

/**
 * Check if the given elements text is the same as the given text
 * @param  {String}   elementType           Element type (element or button)
 * @param  {String}   selector              Element selector
 * @param  {String}   falseCase             Whether to check if the content equals the
 *                                          given text or not
 * @param  {String}   expectedTextLiteral   The text to validate against
 */
export default (elementType, selector, falseCase, expectedTextLiteral) => {
    const element = getElement(selector);
    const expectedText = getLiteral(expectedTextLiteral);

    /**
     * The command to execute on the browser object
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
     * The expected text to validate against
     * @type {String}
     */
    let parsedExpectedText = expectedText;

    /**
     * Whether to check if the content equals the given text or not
     * @type {Boolean}
     */
    let boolFalseCase = !!falseCase;

    // Check for empty element
    if (typeof parsedExpectedText === 'function') {
        parsedExpectedText = '';

        boolFalseCase = !boolFalseCase;
    }

    if (parsedExpectedText === undefined && falseCase === undefined) {
        parsedExpectedText = '';
        boolFalseCase = true;
    }

    const text = browser[command](element);

    if (boolFalseCase) {
        parsedExpectedText.should.not.equal(text);
    } else {
        parsedExpectedText.should.equal(text);
    }
};
