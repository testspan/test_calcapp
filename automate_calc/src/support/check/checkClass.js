import getElement from '../../page_object_model/tools/getElement';
import getLiteral from '../../page_object_model/tools/getLiteral';

/**
 * Check if the given element has the given class
 * @param  {String}   selector                  Element selector
 * @param  {String}   falseCase                 Whether to check for the class to exist
 *                                              or not ('has', 'does not have')
 * @param  {String}   expectedClassNameLiteral  The class name to check
 */
export default (selector, falseCase, expectedClassNameLiteral) => {
    const elem = getElement(selector);
    const expectedClassName = getLiteral(expectedClassNameLiteral);

    /**
     * List of all the classes of the element
     * @type {Array}
     */
    const classesList = browser.getAttribute(elem, 'className')
        .split(' ');

    if (falseCase === 'does not have') {
        expect(classesList)
            .to
            .not
            .include(
                expectedClassName,
                `Element ${elem} should not have the class ${expectedClassName}`
            );
    } else {
        expect(classesList)
            .to
            .include(
                expectedClassName,
                `Element ${elem} should have the class ${expectedClassName}`
            );
    }
};
