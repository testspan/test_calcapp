import getElement from '../../page_object_model/tools/getElement';

/**
 * Check the dimensions of the given element
 * @param  {String}   selector     Element selector
 * @param  {String}   falseCase    Whether to check if the dimensions match or
 *                                 not
 * @param  {String}   expectedSize Expected size
 * @param  {String}   dimension    Dimension to check (broad or tall)
 */
export default (selector, falseCase, expectedSize, dimension) => {
    const elem = getElement(selector);

    /**
     * The size of the given element
     * @type {Object}
     */
    const elementSize = browser.getElementSize(elem);

    /**
     * Parsed size to check for
     * @type {Int}
     */
    const intExpectedSize = parseInt(expectedSize, 10);

    /**
     * The size property to check against
     * @type {Int}
     */
    let originalSize = elementSize.height;

    /**
     * The label of the checked property
     * @type {String}
     */
    let label = 'height';

    if (dimension === 'broad') {
        originalSize = elementSize.width;
        label = 'width';
    }

    if (falseCase) {
        expect(originalSize)
            .to
            .not
            .equal(
                intExpectedSize,
                `Element "${elem}" should not have a ${label} of `
                + `${intExpectedSize}px`
            );
    } else {
        expect(originalSize)
            .to
            .equal(
                intExpectedSize,
                `Element "${elem}" should have a ${label} of `
                + `${intExpectedSize}px, but is ${originalSize}px`
            );
    }
};
