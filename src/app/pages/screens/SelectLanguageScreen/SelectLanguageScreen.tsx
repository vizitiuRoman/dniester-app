import React, { ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, ListItem, Image, Colors } from 'react-native-ui-lib';
import AsyncStorage from '@react-native-community/async-storage';

import { languages, LanguageTypes } from '@shared/i18n/i18n';
import { LANGUAGE } from '@constants/storage-keys';

type LanguagesWithSelection = {
    language: LanguageTypes;
    selected: boolean;
};

export default function SelectLanguageScreen(): ReactElement {
    const [state, setState] = useState<LanguagesWithSelection[]>([]);

    const { i18n } = useTranslation();

    const LANGUAGES: { [key: string]: string } = {
        RO: 'Română',
        RU: 'Русский',
        EN: 'English',
    };

    useEffect(() => {
        setState(
            languages.map((language) => ({
                language,
                selected: i18n.language === language,
            }))
        );

        return () => setState([]);
    }, []);

    function handleChangeLanguage(Value: LanguageTypes): void {
        i18n.changeLanguage(Value);
        AsyncStorage.setItem(LANGUAGE, Value);
    }

    function selectLanguage(language: LanguageTypes): void {
        handleChangeLanguage(language);
        setState(
            state.map((item) => {
                if (item.language === language) {
                    return {
                        language,
                        selected: true,
                    };
                }
                return { language: item.language, selected: false };
            })
        );
    }

    return (
        <View flex useSafeArea bg-surfaceColor>
            {state.map(({ language, selected }, index) => (
                <ListItem
                    key={index}
                    onPress={() => selectLanguage(language)}
                    marginH-16
                    paddingV-8
                    containerStyle={{
                        borderColor: '#eee',
                        borderBottomWidth: 1,
                    }}
                    // @ts-ignore
                    activeOpacity={0.3}
                >
                    <ListItem.Part left column></ListItem.Part>
                    <ListItem.Part middle column>
                        <ListItem.Part>
                            <Text h4 grey10 numberOfLines={1}>
                                {LANGUAGES[language]}
                            </Text>
                        </ListItem.Part>
                    </ListItem.Part>
                    <ListItem.Part right column>
                        {selected && (
                            <Image
                                source={require('assets/icons/checkmark.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: 16,
                                    width: 16,
                                }}
                                tintColor={Colors.primaryColor}
                            />
                        )}
                    </ListItem.Part>
                </ListItem>
            ))}
        </View>
    );
}
