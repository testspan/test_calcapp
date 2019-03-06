import getLiteral from '../../page_object_model/tools/getLiteral';

/**
 * Set the text of the current prompt
 * @param  {String}   modalTextLiteral The text to set to the prompt
 */
export default (modalTextLiteral) => {
    const modalText = getLiteral(modalTextLiteral);

    try {
        browser.alertText(modalText);
        browser.pause(1000);
    } catch (e) {
        assert(e, 'A prompt was not open when it should have been open');
    }
};
