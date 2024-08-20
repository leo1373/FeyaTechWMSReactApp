import {getActualStringTranslation} from "@/lib/utility/localization/ActualTranslations";
import {getDefaultStringTranslation} from "@/lib/utility/localization/DefaultTranslations";

/**
 * Class to handle localization related functionality.
 */
class LocalizedString {

    static getValue(stringId: string) {

        return getActualStringTranslation(stringId) || getDefaultStringTranslation(stringId)
    }
}

export default LocalizedString;
