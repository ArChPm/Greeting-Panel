import React from 'react';

const ChangeLanguage = ({i18n, changeLanguage}) => (
    <select onChange={(e) => changeLanguage(i18n, e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="bg">Bulgaro</option>
    </select>
)

export default ChangeLanguage