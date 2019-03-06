import getElement from '../../page_object_model/tools/getElement';

/**
 * Wait for the given element to become visible
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether or not to expect a visible or hidden
 *                              state
 */
export default (selector, falseCase) => {
    const elem = getElement(selector);
    /**
     * Maximum number of milliseconds to wait for
     * @type {Int}
     */
    const ms = 10000;

    browser.waitForVisible(elem, ms, !!falseCase);
    browser.pause(1000);
};
