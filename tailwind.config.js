const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php'
    ],

    theme: {
        extend: {
            spacing: {
                80: '20rem',
                108: '27rem'
            },
            borderWidth: {
                14: '14px'
            },
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                bg: {
                    primary: 'var(--bg-bg-primary)',
                    secondary: 'var(--bg-bg-secondary)',
                    tertiary: 'var(--bg-bg-tertiary)',

                    form: 'var(--bg-bg-form)',
                    buttonSecondary: 'var(--bg-bg-buttonSecondary)',
                    buttonSecondaryHover: 'var(--bg-bg-buttonSecondaryHover)',
                    tag: 'var(--bg-tag)',

                    success: 'var(--bg-success)',
                    info: 'var(--bg-info)',
                    warning: 'var(--bg-warning)',
                    error: 'var(--bg-error)'
                },

                copy: {
                    primary: 'var(--text-copy-primary)',
                    secondary: 'var(--text-copy-secondary)',
                    grey: 'var(--text-copy-grey)',
                    greyHover: 'var(--text-copy-greyHover)',
                    link: 'var(--text-copy-link)',
                    hover: 'var(--text-copy-hover)',
                    buttonSecondary: 'var(--text-copy-buttonSecondary)',
                    success: 'var(--copy-success)',
                    info: 'var(--copy-info)',
                    warning: 'var(--copy-warning)',
                    error: 'var(--copy-error)',
                    tag: 'var(--text-copy-tag)'
                },

                border: {
                    primary: 'var(--border-border-primary)',
                    secondary: 'var(--border-border-secondary)',
                    focus: 'var(--border-border-focus)',
                    success: 'var(--border-success)',
                    info: 'var(--border-info)',
                    warning: 'var(--border-warning)',
                    error: 'var(--border-error)',
                    tag: 'var(--border-tag)'
                },

                close: {
                    success: 'var(--close-success)',
                    info: 'var(--close-info)',
                    warning: 'var(--close-warning)',
                    error: 'var(--close-error)'
                },
                status: {
                    draft: 'var(--status-draft)',
                    pending: 'var(--status-pending)',
                    published: 'var(--status-published)'
                },
                brandColor: '#3044e8',
                'brandColor-dark': '#2331a7'
            }
        }
    },

    /* global require */
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography')
    ]
}
