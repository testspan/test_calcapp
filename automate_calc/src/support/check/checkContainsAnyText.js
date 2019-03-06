import getElement from '../../page_object_model/tools/getElement';

/**
 * Check if the given elements contains text
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   selector      Element selector
 * @param  {String}   falseCase     Whether to check if the content contains
 *                                  text or not
 */
export default (elementType, selector, falseCase) => {
    const element = getElement(selector);

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
     * The text of the element
     * @type {String}
     */
    const text = browser[command](element);

    if (typeof falseCase === 'undefined') {
        boolFalseCase = false;
    } else {
        boolFalseCase = !!falseCase;
    }

    if (boolFalseCase) {
        expect(text)
            .to
            .equal('');
    } else {
        expect(text)
            .to
            .not
            .equal('');
    }
};
