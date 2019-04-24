export const ADD_TO_LIST = 'ADD_TO_LIST';

/**
 * Add new elements to the list,
 * @param {array} listNames
 * @public
 */
export function addToList(listNames) {
    let listName = listNames.split('\n')
    return {
        type: ADD_TO_LIST,
        listName,
    };
}

/**
 * Change the language of the configuration file of i18n with a new language,
 * @param {function} i18n
 * @param {string} language
 * @public
 */
export function changeLenguage(i18n, language) {
    i18n.changeLanguage(language);
}