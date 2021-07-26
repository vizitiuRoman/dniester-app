import { useState } from 'react';
import { Colors, ThemeManager, Typography } from 'react-native-ui-lib';

import { BrandTheme } from '@theme/default';

type UseTheme = {
    loadTheme: () => Promise<void>;
    loading: boolean;
};

export default function useTheme(): UseTheme {
    const [loading, setLoading] = useState<boolean>(true);

    function setTheme(config: BrandTheme): void {
        Colors.loadColors(config.colors);
        Typography.loadTypographies(config.typography);

        // TODO (Integrate in Brand Theme) - @Roma Vizitiu
        ThemeManager.setComponentTheme('Button', {
            borderRadius: 12,
        });

        setLoading(false);
    }

    async function loadTheme(): Promise<void> {
        // @ts-ignore
        const theme = (await import('@theme/default.ts')).default as BrandTheme;
        setTheme(theme);
    }

    return {
        loadTheme,
        loading,
    };
}
