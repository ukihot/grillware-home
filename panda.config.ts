import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

const globalCss = defineGlobalStyles({
    'html, body': {
        color: 'gray.900',
        lineHeight: '1.5',
        bg: 'gray',
    },
})

export default defineConfig({
    jsxFramework: 'qwik',

    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ['./src/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {},
    },

    // The output directory for your css system
    outdir: 'src/styled-system',
    globalCss,
})
