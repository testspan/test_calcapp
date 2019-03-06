import getElement from '../../page_object_model/tools/getElement';

/**
 * Check the selected state of the given element
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase  Whether to check if the element is elected or
 *                               not
 */
export default (selector, falseCase) => {
    const element = getElement(selector);

    /**
     * The selected state
     * @type {Boolean}
     */
    const isSelected = browser.isSelected(element);

    if (falseCase) {
        expect(isSelected)
            .to
            .not
            .equal(true, `"${element}" should not be selected`);
    } else {
        expect(isSelected)
            .to
            .equal(true, `"${element}" should be selected`);
    }
};
