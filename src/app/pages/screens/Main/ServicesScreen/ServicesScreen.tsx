import React, { ReactElement, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { COLORS } from '@constants/theme';
import { ServiceModel } from '@shared/models/service.model';
import { ServicesStackParamList } from '@shared/types/types';
import ServiceItem from '@screens/Main/ServicesScreen/ServiceItem/ServiceItem';
import useServiceService from '@core/services/useServiceService';

export default function ServicesScreen({
    navigation,
}: StackScreenProps<ServicesStackParamList, 'Services'>): ReactElement {
    const [services, setServices] = useState<ServiceModel[]>([]);

    const { getServices } = useServiceService();

    useEffect(() => {
        async function getData(): Promise<void> {
            try {
                const data = await getServices();
                setServices(data);
            } catch (e) {}
        }
        getData();
    }, []);

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <View style={styles.categoryContainer}>
                <FlatList
                    scrollEnabled={false}
                    numColumns={3}
                    data={services}
                    renderItem={({ item }) => (
                        <ServiceItem
                            key={item.id}
                            item={item}
                            onPress={() =>
                                navigation.navigate('Service', {
                                    service: item,
                                })
                            }
                        />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    categoryContainer: {
        flex: 1,
        alignItems: 'center',
    },
});
