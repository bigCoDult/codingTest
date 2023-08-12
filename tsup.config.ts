import { defineConfig } from 'tsup'

export default defineConfig({
    globalName: '_',
    entry: ['./index.js'],
    format: ['esm', 'cjs', 'iife']
})