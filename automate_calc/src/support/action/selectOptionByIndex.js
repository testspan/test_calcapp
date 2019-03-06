import getElement from '../../page_object_model/tools/getElement';

/**
 * Select a option from a select element by it's index
 * @param  {String}   index      The index of the option
 * @param  {String}   obsolete   The ordinal indicator of the index (unused)
 * @param  {String}   selector   Element selector
 */
export default (index, obsolete, selector) => {
    const selectElem = getElement(selector);

    /**
     * The index of the option to select
     * @type {Int}
     */
    const optionIndex = parseInt(index, 10);

    browser.selectByIndex(selectElem, optionIndex);
    browser.pause(1000);
};
