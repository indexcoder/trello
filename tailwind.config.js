module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                card: '0 1px 0 rgba(9, 30, 66, 0.25)'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
