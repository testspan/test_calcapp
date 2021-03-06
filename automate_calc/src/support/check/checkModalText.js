import getLiteral from '../../page_object_model/tools/getLiteral';

/**
 * Check the text of a modal
 * @param  {String}   modalType             The type of modal that is expected
 *                                          (alertbox, confirmbox or prompt)
 * @param  {String}   falseState            Whether to check if the text matches or not
 * @param  {String}   expectedTextLiteral   The text to check against
 */
export default (modalType, falseState, expectedTextLiteral) => {
    const expectedText = getLiteral(expectedTextLiteral);

    try {
        /**
         * The text of the current modal
         * @type {String}
         */
        const text = browser.alertText();

        if (falseState) {
            expect(text)
                .to
                .not
                .equal(
                    expectedText,
                    `Expected the text of ${modalType} not to equal `
                    + `"${expectedText}"`
                );
        } else {
            expect(text)
                .to
                .equal(
                    expectedText,
                    `Expected the text of ${modalType} to equal `
                    + `"${expectedText}", instead found "${text}"`
                );
        }
    } catch (e) {
        assert(
            e,
            `A ${modalType} was not opened when it should have been opened`
        );
    }
};
