const mix = require('laravel-mix');

class LaravelMixGraphQl {
    dependencies() {
        return [
            'graphql',
            'graphql-tag'
        ];
    }
    webpackRules() {
        return {
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader'
        };
    }
}

mix.extend('graphql', new LaravelMixGraphQl());

mix.js("resources/js/app.js", "public/js")
    .vue()
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
    .graphql();





