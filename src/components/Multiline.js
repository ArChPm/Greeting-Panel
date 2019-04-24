import React from 'react';

const Multiline = ({t, addToList}) => (
    <div>
        <br/>
        <h1>{t('Insert list of names')}</h1>
        <textarea rows="5" cols="50" onChange= {(event) => addToList(event.target.value)}/>
        <br/>
    </div>
);

export default Multiline;