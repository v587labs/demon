// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'

export default defineConfig({
    shortcuts: [
        ['btn', ''],
        ['b-common', 'b-2px b-solid b-#060606'],
        ['flex-common', 'flex items-center justify-between'],
        ['flex-center', 'flex items-center justify-center'],
        [
            'position-center',
            'absolute left-1/2 top-1/2 text-white -translate-x-1/2 -translate-y-1/2'
        ]
    ],
    theme: {
        breakpoints: {
            xs: '768px',
            sm: '768px',
            md: '992px',
            lg: '1200px',
            xl: '1920px'
        }
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography()
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()]
})