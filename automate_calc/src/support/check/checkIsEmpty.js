import checkContainsAnyText from './checkContainsAnyText';
import getElement from '../../page_object_model/tools/getElement';

export default (elementType, selector, falseCase) => {
    const element = getElement(selector);

    let newFalseCase = true;

    if (typeof falseCase === 'function') {
        newFalseCase = false;
    } else if (falseCase === ' not') {
        newFalseCase = false;
    }

    checkContainsAnyText(elementType, element, newFalseCase);
};
