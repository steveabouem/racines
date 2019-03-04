import React from 'react';
export const LanguageContext = React.createContext({
    language: '',
    toggleLanguage: () => {},
}); 

export const languages = {
    french: 'Francais',
    english: 'English',
    german: 'Deutsch'
}