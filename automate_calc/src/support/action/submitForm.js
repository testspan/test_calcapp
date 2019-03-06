import getElement from '../../page_object_model/tools/getElement';

/**
 * Submit the given form
 * @param  {String}   selector Form element selector
 */
export default (selector) => {
    const form = getElement(selector);
    browser.submitForm(form);
    browser.pause(1000);
};
