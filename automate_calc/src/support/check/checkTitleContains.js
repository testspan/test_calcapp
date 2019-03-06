import getLiteral from '../../page_object_model/tools/getLiteral';

/**
 * Check the title of the current browser window contains expected text/title
 * @param  {Type}     falseCase             Whether to check if the title contains the
 *                                          expected value or not
 * @param  {Type}     expectedTitleLiteral  The expected title
 */
export default (falseCase, expectedTitleLiteral) => {
    const expectedTitle = getLiteral(expectedTitleLiteral);

    /**
     * The actual title of the current browser window
     * @type {String}
     */
    const title = browser.getTitle();

    if (falseCase) {
        expect(title)
            .to
            .not
            .contain(
                expectedTitle,
                `Expected title not to contain "${expectedTitle}"`
            );
    } else {
        expect(title)
            .to
            .contain(
                expectedTitle,
                `Expected title to contain "${expectedTitle}" 
                        but found "${title}"`
            );
    }
};
