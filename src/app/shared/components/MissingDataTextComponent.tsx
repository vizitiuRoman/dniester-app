import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native-ui-lib';

type MissingDataTextComponentProps = {
    show: boolean;
    title?: string;
};

export default function MissingDataTextComponent({
    show,
    title,
}: MissingDataTextComponentProps): ReactElement | null {
    const { t } = useTranslation();

    if (!show) {
        return null;
    }

    return (
        <Text center marginV-16 text45R colorGrayText>
            {title ? title : t('Data Missing')}
        </Text>
    );
}
