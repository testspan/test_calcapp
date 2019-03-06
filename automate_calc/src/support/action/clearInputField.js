import getElement from '../../page_object_model/tools/getElement';

/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   selector Element selector
 */
export default (selector) => {
    const element = getElement(selector);
    browser.clearElement(element);
    browser.pause(1000);
};
