export const ADD_TO_LIST = 'ADD_TO_LIST';

export function addToList(listNames) {
    let listName = listNames.split('\n')
    return {
        type: ADD_TO_LIST,
        listName,
    };
}