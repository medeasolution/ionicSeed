define(['ionic'], function (ionic) {
    angular.module('EsTranslate', ['pascalprecht.translate'], ['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('es', {
            clickMe: 'Pulsame'
        });
    }]);
});
