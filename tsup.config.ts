import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['./index.js'],
    format: ['esm', 'cjs', 'iife']
})