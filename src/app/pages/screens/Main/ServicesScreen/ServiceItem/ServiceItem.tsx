import React, { ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, Text } from 'react-native-ui-lib';

import { COLORS, SIZES } from '@constants/theme';
import { ServiceModel } from '@shared/models/service.model';

type ServiceItemProps = {
    item: ServiceModel;
    onPress: () => void;
};

export default function ServiceItem({
    item,
    onPress,
}: ServiceItemProps): ReactElement {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.label}>{item.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'red',
        margin: 8,
        padding: 12,
    },
    innerContainer: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    label: {
        color: COLORS.gray,
        fontSize: SIZES.body2 - 5,
        fontWeight: '500',
        marginVertical: 9,
        letterSpacing: 0.5,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        width: 65,
        borderRadius: 15,
        marginVertical: 5,
        marginHorizontal: 10,
    },
});
