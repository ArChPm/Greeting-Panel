import React from 'react';

const ListName = ({t, listName}) => (
    <div>
        <h2>{t('Greeting Panel')}</h2>
        <ul>
            {listName.map((name, index) => {return <div key={index}><label><strong>{t('Hi')}</strong>, {name}</label></div>})}
        </ul>
    </div>
);

export default ListName