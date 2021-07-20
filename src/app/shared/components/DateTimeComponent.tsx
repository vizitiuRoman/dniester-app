import React, { ReactElement } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { getYYYYMMDD } from '@shared/utils/date';

export type FromToDatePicker = { FromDate: string; ToDate: string };

type DateTimeComponentProps = {
    showFromDate: boolean;
    showToDate: boolean;
    setShowFromDate: (data: boolean) => void;
    setShowToDate: (data: boolean) => void;
    setDate: (data: FromToDatePicker) => void;
    FromDate: string;
    ToDate: string;
};

export default function DateTimeComponent({
    showFromDate,
    FromDate,
    ToDate,
    setShowFromDate,
    setDate,
    showToDate,
    setShowToDate,
}: DateTimeComponentProps): ReactElement {
    return (
        <>
            <DateTimePickerModal
                mode="date"
                isVisible={showFromDate}
                date={new Date(FromDate)}
                onCancel={() => setShowFromDate(false)}
                onConfirm={(date: Date) => {
                    setShowFromDate(false);
                    setDate({
                        ToDate,
                        FromDate: getYYYYMMDD(date || new Date()),
                    });
                }}
            />
            <DateTimePickerModal
                mode="date"
                isVisible={showToDate}
                date={new Date(ToDate)}
                onCancel={() => setShowToDate(false)}
                onConfirm={(date: Date) => {
                    setShowToDate(false);
                    setDate({
                        FromDate,
                        ToDate: getYYYYMMDD(date || new Date()),
                    });
                }}
            />
        </>
    );
}
