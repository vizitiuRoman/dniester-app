export type BrandTheme = {
    colors: { [key: string]: string };
    typography: { [key: string]: { [key: string]: string | number } };
};

const defaultTheme: BrandTheme = {
    colors: {
        primaryColor: '#0071E6',
        secondaryColor: '#81C3D7',
        primary50: '#f2f6fa',
        linkColor: '#0071E6',
        textColor: '#221D23',
        errorColor: '#E63B2E',
        successColor: '#ADC76F',
        warnColor: '#FF963C',
        surfaceColor: '#fff',
        dark: '#000',
        red10: '#A70000',
        red20: '#ED3131',
        red30: '#A70000',
        red40: '#F48383',
        red50: '#F8ADAD',
        red60: '#FFF0F0',
        green10: '#2D860A',
        green20: '#38A70C',
        green30: '#60B93D',
        green40: '#88CA6D',
        green50: '#AFDC9E',
        green60: '#EAFCE3',
        blue10: '#004E9F',
        blue20: '#0071E6',
        blue30: '#2992FF',
        blue40: '#6CB4FF',
        blue50: '#C0DDFC',
        blue60: '#F0F7FF',
        grey10: '#3C4652',
        grey20: '#7B888E',
        grey30: '#A1ADBB',
        grey40: '#D3D7DC',
        grey50: '#E5EAEF',
        grey60: '#F5F7F8',
        grey70: '#FFFFFF',
    },
    typography: {
        h1: {
            fontFamily: 'Inter-Regular',
            fontSize: 46,
            lineHeight: 58,
        },
        h2: {
            fontFamily: 'Inter-SemiBold',
            fontSize: 30,
            lineHeight: 40,
        },
        h3: {
            fontFamily: 'Inter-Bold',
            fontSize: 22,
            lineHeight: 28,
        },
        h4: {
            fontFamily: 'Inter-Medium',
            fontSize: 15,
            lineHeight: 20,
        },
        h5: {
            fontFamily: 'Inter-SemiBold',
            fontSize: 13,
            lineHeight: 18,
        },
        h6: {
            fontFamily: 'Inter-SemiBold',
            fontSize: 11,
            lineHeight: 18,
        },
        h1B: {
            fontFamily: 'Inter-Bold',
            fontSize: 46,
            lineHeight: 58,
        },
        h2B: {
            fontFamily: 'Inter-Bold',
        },
        h3B: {
            fontFamily: 'Inter-Bold',
        },
        h4B: {
            fontFamily: 'Inter-Bold',
            fontSize: 15,
            lineHeight: 20,
        },
        h5B: {
            fontFamily: 'Inter-Bold',
        },
        h6B: {
            fontFamily: 'Inter-Bold',
        },
        s1: {
            fontFamily: 'Inter-Regular',
            fontSize: 19,
            lineHeight: 25,
        },
        s2: {
            fontFamily: 'Inter-Regular',
            fontSize: 11,
            lineHeight: 20,
        },
        SF: {
            fontFamily: 'Inter-Medium',
            lineHeight: 11.93,
            fontSize: 10,
        },
        a: {
            fontFamily: 'Inter-Regular',
            fontSize: 11,
        },
        caption: {
            fontFamily: 'Inter-Regular',
            fontSize: 8,
        },
        text10: {
            fontFamily: 'Inter-Regular',
            fontSize: 16,
            lineHeight: 24,
        },
        text10R: {
            fontFamily: 'Inter-Regular',
        },
        text10M: {
            fontFamily: 'Inter-Medium',
        },
        text10BO: {
            fontFamily: 'Inter-Bold',
        },
        text10BL: {
            fontFamily: 'Inter-Black',
        },
        text20: {
            fontFamily: 'Inter-Regular',
            fontSize: 15,
            lineHeight: 24,
        },
        text20R: {
            fontFamily: 'Inter-Regular',
        },
        text20M: {
            fontFamily: 'Inter-Medium',
        },
        text20BO: {
            fontFamily: 'Inter-Bold',
        },
        text20BL: {
            fontFamily: 'Inter-Black',
        },
        text30: {
            fontFamily: 'Inter-Regular',
            fontSize: 13,
            lineHeight: 20,
        },
        text30SB: {
            fontFamily: 'Inter-SemiBold',
            fontSize: 13,
            lineHeight: 20,
        },
        text30R: {
            fontFamily: 'Inter-Regular',
        },
        text30M: {
            fontFamily: 'Inter-Medium',
            fontSize: 13,
            lineHeight: 20,
        },
        text30BO: {
            fontFamily: 'Inter-Bold',
        },
        text30BL: {
            fontFamily: 'Inter-Black',
        },
        text40: {
            fontFamily: 'Inter-Regular',
            fontSize: 11,
            lineHeight: 16,
        },
        text40SB: {
            fontFamily: 'Inter-SemiBold',
            fontSize: 11,
            lineHeight: 18,
        },
        text40R: {
            fontFamily: 'Inter-Regular',
        },
        text40M: {
            fontFamily: 'Inter-Medium',
        },
        text40BO: {
            fontFamily: 'Inter-Bold',
        },
        text40BL: {
            fontFamily: 'Inter-Black',
        },
        text50: {
            fontFamily: 'Inter-Regular',
        },
        text50R: {
            fontFamily: 'Inter-Regular',
        },
        text50M: {
            fontFamily: 'Inter-Medium',
        },
        text50BO: {
            fontFamily: 'Inter-Bold',
        },
        text50BL: {
            fontFamily: 'Inter-Black',
        },
        text60: {
            fontFamily: 'Inter-Regular',
        },
        text60R: {
            fontFamily: 'Inter-Regular',
        },
        text60M: {
            fontFamily: 'Inter-Medium',
        },
        text60BO: {
            fontFamily: 'Inter-Bold',
        },
        text60BL: {
            fontFamily: 'Inter-Black',
        },
        text70: {
            fontFamily: 'Inter-Regular',
        },
        text70R: {
            fontFamily: 'Inter-Regular',
        },
        text70M: {
            fontFamily: 'Inter-Medium',
        },
        text70BO: {
            fontFamily: 'Inter-Bold',
        },
        text70BL: {
            fontFamily: 'Inter-Black',
        },
        text80: {
            fontFamily: 'Inter-Regular',
        },
        text80R: {
            fontFamily: 'Inter-Regular',
        },
        text80M: {
            fontFamily: 'Inter-Medium',
        },
        text80BO: {
            fontFamily: 'Inter-Bold',
        },
        text80BL: {
            fontFamily: 'Inter-Black',
        },
        text90: {
            fontFamily: 'Inter-Regular',
        },
        text90R: {
            fontFamily: 'Inter-Regular',
        },
        text90M: {
            fontFamily: 'Inter-Medium',
        },
        text90BO: {
            fontFamily: 'Inter-Bold',
        },
        text90BL: {
            fontFamily: 'Inter-Black',
        },
        text100: {
            fontFamily: 'Inter-Regular',
        },
        text100R: {
            fontFamily: 'Inter-Regular',
        },
        text100M: {
            fontFamily: 'Inter-Medium',
        },
        text100BO: {
            fontFamily: 'Inter-Bold',
        },
        text100BL: {
            fontFamily: 'Inter-Black',
        },
    },
};

export default defaultTheme;
