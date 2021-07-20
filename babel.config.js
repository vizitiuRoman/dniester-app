module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                ],
                alias: {
                    '@environments': './src/environments',
                    '@store': './src/app/store',
                    '@core': './src/app/core',
                    '@hoc': './src/app/core/hoc',
                    '@hooks': './src/app/core/hooks',
                    '@http': './src/app/core/http',
                    '@contexts': './src/app/core/contexts',
                    '@navigations': './src/app/pages/navigation',
                    '@screens': './src/app/pages/screens',
                    '@shared': './src/app/shared',
                    '@components': './src/app/shared/components',
                    '@shared-types': './src/app/shared/types',
                    '@theme': './src/app/shared/theme',
                    '@constants': './src/app/shared/constants',
                    '@grpc': './src/app/grpc',
                },
            },
        ],
    ],
};
