import React, { ReactElement, useEffect } from 'react';
import { View, Text } from 'react-native-ui-lib';

import { StackScreenProps } from '@react-navigation/stack';
import { ServicesStackParamList } from '@shared/types/types';

export default function ServiceScreen({
    route,
}: StackScreenProps<ServicesStackParamList, 'Service'>): ReactElement {
    useEffect(() => {}, []);

    return (
        <View flex center>
            <Text>Branches {route.params.service?.branches?.length}</Text>
        </View>
    );
}
