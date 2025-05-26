// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // Your custom configs here
  ignores: ['.pnpm-store/**', '**/migrations/*'],
  rules: {
    'ts/no-redeclare': 'off',
  },
})
