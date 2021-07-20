import React, { ReactElement, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Alert,
    GestureResponderEvent,
    ImageSourcePropType,
} from 'react-native';
import {
    View,
    Text,
    Avatar,
    Colors,
    AvatarHelper,
    ListItem,
    Image,
} from 'react-native-ui-lib';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

import { AuthContext } from '@contexts/AuthContext';
import { SettingsParamList } from '@shared/types/types';

type Item = {
    name: string;
    icon: ImageSourcePropType;
    rightArrow: boolean;
    iconColor: string;
    onPress: (event: GestureResponderEvent) => void;
};

export default function SettingsScreen({
    navigation,
}: StackScreenProps<SettingsParamList, 'SelectLanguage'>): ReactElement {
    const { user, logout } = useContext(AuthContext);
    const { t } = useTranslation();

    const items: { [key: string]: Item[] } = {
        Preferences: [
            {
                name: t('Language'),
                icon: require('assets/icons/language.png'),
                iconColor: Colors.primaryColor,
                rightArrow: true,
                onPress: () => navigation.navigate('SelectLanguage'),
            },
        ],
        Account: [
            {
                name: t('Logout'),
                icon: require('assets/icons/logout.png'),
                iconColor: Colors.red10,
                rightArrow: false,
                onPress: () => {
                    Alert.alert(
                        t('Logout'),
                        t('Are you sure?'),
                        [
                            {
                                text: t('Cancel'),
                                onPress: () => {},
                                style: 'cancel',
                            },
                            { text: t('OK'), onPress: logout },
                        ],
                        { cancelable: false }
                    );
                },
            },
        ],
    };

    function renderItem(
        { iconColor, onPress, icon, name, rightArrow }: Item,
        idx: number
    ): ReactElement {
        return (
            <ListItem
                onPress={onPress}
                key={idx}
                containerStyle={{
                    borderColor: '#eee',
                    borderBottomWidth: 1,
                }}
            >
                <ListItem.Part left column>
                    <View
                        style={{
                            backgroundColor: iconColor,
                        }}
                        br100
                        padding-8
                        marginR-12
                    >
                        <Image
                            source={icon}
                            style={{
                                resizeMode: 'contain',
                                height: 22,
                                width: 22,
                            }}
                            tintColor={Colors.white}
                        />
                    </View>
                </ListItem.Part>
                <ListItem.Part middle column>
                    <ListItem.Part>
                        <Text h5 grey10 numberOfLines={1}>
                            {name}
                        </Text>
                    </ListItem.Part>
                </ListItem.Part>
                {rightArrow && (
                    <ListItem.Part right column>
                        <Image
                            source={require('assets/icons/chevronRight.png')}
                            style={{
                                resizeMode: 'contain',
                                height: 16,
                            }}
                        />
                    </ListItem.Part>
                )}
            </ListItem>
        );
    }

    return (
        <View flex useSafeArea bg-surfaceColor>
            <ScrollView>
                <View centerH padding-16>
                    <Avatar
                        animate
                        backgroundColor={Colors.primary50}
                        label={AvatarHelper.getInitials(user.name)}
                        labelColor={Colors.primaryColor}
                        size={56}
                        // source={user.Image}
                    />
                    <Text h5 marginT-8>
                        {user.name}
                    </Text>
                </View>
                <View padding-16>
                    {Object.keys(items).map((key, index) => (
                        <View key={index} marginB-16>
                            <Text h6 grey20 uppercase>
                                {t(key)}
                            </Text>
                            {items[key].map((item, idx) =>
                                renderItem(item, idx)
                            )}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
