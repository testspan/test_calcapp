import getElement from '../../page_object_model/tools/getElement';

/**
 * Check if the given element has the focus
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Whether to check if the given element has focus
 *                              or not
 */
export default (element, falseCase) => {
    const selector = getElement(element);

    /**
     * Value of the hasFocus function for the given element
     * @type {Boolean}
     */
    const hasFocus = browser.hasFocus(selector);

    if (falseCase) {
        expect(hasFocus)
            .to
            .not
            .equal(true, 'Expected element to not be focused, but it is');
    } else {
        expect(hasFocus)
            .to
            .equal(true, 'Expected element to be focused, but it is not');
    }
};
