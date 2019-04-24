import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import { addToList, changeLanguage } from '../actions/greetingPanel.actions';
import Multiline from '../components/Multiline';
import ListName  from '../components/ListName';
import ChangeLanguage from '../components/ChangeLanguage';

const greetingPanel = ({
    addToList,
    listName,
    t,
    i18n,
}) => (
    <div>
        <Multiline addToList={addToList} t={t}/>
        <ListName t={t} listName={listName}/>
        <ChangeLanguage i18n={i18n} changeLanguage={changeLanguage}/>
    </div>
    
);

const mapStateToProps = state => ({
    listName: state.greetingPanel.listName,
});

const mapDispatchToProps = dispatch => ({
    addToList: listNames => dispatch(addToList(listNames)),
    changeLanguage: (i18n, language) => dispatch(i18n, language)
})

greetingPanel.propTypes = {
    listName: PropTypes.array,
    addToList: PropTypes.func,
    t: PropTypes.func,
    i18n: PropTypes.object,
}

export default translate('translations')(connect(mapStateToProps, mapDispatchToProps)(greetingPanel))