// The main app definition
// --> where you should load other module depdendencies
define([
    'ionic',
    'angularTranslate',
    'jsog',
    'translates/EsTranslate'],
    function () {
        'use strict';
        return angular.module('app', ['ionic', 'pascalprecht.translate', 'EsTranslate']);
    }
);
