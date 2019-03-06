import getElement from '../../page_object_model/tools/getElement';

/**
 * Check if the given element is (not) visible
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase  Check for a visible or a hidden element
 */
export default (selector, falseCase) => {
    const element = getElement(selector);

    /**
     * Visible state of the give element
     * @type {String}
     */
    const isVisible = browser.isVisible(element);

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
};
