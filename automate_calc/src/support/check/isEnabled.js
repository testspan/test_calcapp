import getElement from '../../page_object_model/tools/getElement';

/**
 * Check if the given element is enabled
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase  Whether to check if the given element is enabled
 *                               or not
 */
export default (selector, falseCase) => {
    const element = getElement(selector);

    /**
     * The enabled state of the given element
     * @type {Boolean}
     */
    const isEnabled = browser.isEnabled(element);

    if (falseCase) {
        expect(isEnabled)
            .to
            .not
            .equal(true, `Expected element "${element}" not to be enabled`);
    } else {
        expect(isEnabled)
            .to
            .equal(true, `Expected element "${element}" to be enabled`);
    }
};
