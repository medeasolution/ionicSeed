var require = {
    baseUrl: 'app',
    paths: {
        ionic: '../lib/ionic/js/ionic.bundle.min',
        angular: '../lib/angular/angular.min',
        jquery: '../lib/jquery/dist/jquery.min',
        jsog: "../lib/jsog/lib/JSOG",
        angularTranslate: '../lib/angular-translate/angular-translate.min'
    },
    shim: {
        'ionic': {deps: ['jquery']},
        angularTranslate: {deps: ['angular']}
    },
    priority: [
        'jsog',
        'jquery',
        'ionic'
    ]
};
