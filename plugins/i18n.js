export default ({ app }) => {
    // beforeLanguageSwitch called right before setting a new locale
    app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
        console.log('Locale beforeLanguageSwitch :', oldLocale, newLocale);
        debugger;
    };
    // onLanguageSwitched called right after a new locale has been set
    app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
        console.log('Locale onLanguageSwitched :', oldLocale, newLocale);
    };
};
