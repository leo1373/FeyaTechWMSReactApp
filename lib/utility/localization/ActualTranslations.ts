/**
 * This file contains the actual translations of strings as obtained from ajaax call and methods to access them.
 */
import {Translations} from "@/lib/type/localization/TranslationsType";

let translations: Translations = {};

/**
 * This method allows to set the translations obtained from an ajax call.
 * @param stringTranslations - object containing key-value of stringId and its translated value.
 */
export const setStringsTranslationsValue = (stringTranslations: Translations) => {

    if (stringTranslations) {

        translations = Object.assign(translations, stringTranslations)
    }
}

/**
 * This method adds adhoc translation mappings to the mapping of translations
 * @param stringId - stringId for which the translation is provided
 * @param translation - the translated string
 */
export const addSingleStringTranslation = (stringId: string, translation: string) => {

    translations[stringId] = translation;
}

/**
 * This method returns the translation for the given stringId
 * @param stringId - stringId for which the translation is required
 */
export const getActualStringTranslation = (stringId: string) => {

    return translations[stringId];
}
