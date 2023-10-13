import {
    defineConfig,
    presetTypography,
    presetIcons,
    presetAttributify,
    presetUno,
    presetWebFonts,
    transformerCompileClass,
    transformerDirectives,
    transformerVariantGroup
} from "unocss";

export default defineConfig({
    transformers: [
        transformerDirectives(),
        transformerCompileClass(),
        transformerVariantGroup()
    ],
    presets: [
        presetUno(),
        presetAttributify(),
        presetTypography(),
        presetIcons({
            warn: true
        }),
        presetWebFonts({
            fonts: {
                sans: 'DM Sans',
                serif: 'DM Serif Display',
                mono: 'DM Mono',
            },
        })
    ]
})