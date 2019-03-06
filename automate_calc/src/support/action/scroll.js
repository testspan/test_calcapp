import getElement from '../../page_object_model/tools/getElement';

/**
 * Scroll the page to the given element
 * @param  {String}   element Element selector
 */
export default (element) => {
    const selector = getElement(element);
    browser.scroll(selector);
    browser.pause(1000);
};
