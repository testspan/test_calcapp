import getElement from '../../page_object_model/tools/getElement';

/**
 * Drag a element to a given destination
 * @param  {String}   src      The selector for the source element
 * @param  {String}   dest     The selector for the destination element
 */
export default (src, dest) => {
    const source = getElement(src);
    const destination = getElement(dest);
    browser.dragAndDrop(source, destination);
    browser.pause(1000);
};
