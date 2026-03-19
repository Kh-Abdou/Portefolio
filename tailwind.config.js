/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#080810',
                surface: '#0F0F1A',
                border: '#1E1E2E',
                accent: {
                    DEFAULT: '#6366F1',
                    light: '#A5B4FC',
                },
                'text-primary': '#E2E8F0',
                'text-muted': '#94A3B8',
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'serif'],
                sans: ['Inter', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            }
        },
    },
    plugins: [],
}
