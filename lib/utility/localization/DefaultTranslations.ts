import {Translations} from "@/lib/type/localization/TranslationsType";

/**
 * Maintains a mapping between stringId and its default translations
 */
const DefaultTranslations: Translations = {

    "wms-login-button-text": "Login",
}

/**
 * Method to return the default translation for a stringId
 * @param stringId - stringId for which the default translation is required
 * @return string - default translation for the given stringId
 */
export const getDefaultStringTranslation = (stringId: string) => {

    return DefaultTranslations[stringId];
}
