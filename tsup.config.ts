import { defineConfig } from 'tsup'

export default defineConfig({
    globalName: '_',
    entry: ['./index.ts'],
    format: ['esm', 'cjs', 'iife']
})