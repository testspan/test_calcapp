import checkIfElementExists from '../check/checkIfElementExists';
import getElement from '../../page_object_model/tools/getElement';
import getLiteral from '../../page_object_model/tools/getLiteral';

/**
 * Set the value of the given input field to a new value or add a value to the
 * current element value
 * @param  {String}   method        The method to use (add or set)
 * @param  {String}   valueLiteral  The value to set the element to
 * @param  {String}   selector      Element selector
 */
export default (method, valueLiteral, selector) => {
    const value = getLiteral(valueLiteral);
    const element = getElement(selector);

    /**
     * The command to perform on the browser object (addValue or setValue)
     * @type {String}
     */
    const command = (method === 'add') ? 'addValue' : 'setValue';

    let checkValue = value;

    checkIfElementExists(element, false, 1);

    if (!value) {
        checkValue = '';
    }

    browser[command](element, checkValue);
    browser.pause(1000);
};
