import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import { addToList } from '../actions/greetingPanel.actions';

const greetingPanel = ({
    addToList,
    listName,
    t,
}) => (
    <div>
        <h1>{t('Insert list of names')}</h1>
        <br/>
        <textarea rows="5" cols="50" onChange ={(event) => addToList(event.target.value)}/>
        <br/>
        <div>
        <h2>{t('Greeting Panel')}</h2>
        <ul align="center">
            {listName.map((name, index) =>{return <div key={index}><h3>{t('Hi')}, {name}</h3></div>})}
        </ul>
    </div>
    </div>
    
);

const mapStateToProps = state => ({
    listName: state.greetingPanel.listName,
});

const mapDispatchToProps = dispatch => ({
    addToList: listNames => dispatch(addToList(listNames))
})

greetingPanel.propTypes = {
    listName: PropTypes.array,
    addToList: PropTypes.func,
    t: PropTypes.func,
}

export default translate('translations')(connect(mapStateToProps, mapDispatchToProps)(greetingPanel))