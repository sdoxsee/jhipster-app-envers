'use strict';

angular.module('jhipsterApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('foo', {
                parent: 'entity',
                url: '/foo',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'jhipsterApp.foo.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/foo/foos.html',
                        controller: 'FooController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('foo');
                        return $translate.refresh();
                    }]
                }
            })
            .state('fooDetail', {
                parent: 'entity',
                url: '/foo/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'jhipsterApp.foo.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/foo/foo-detail.html',
                        controller: 'FooDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('foo');
                        return $translate.refresh();
                    }]
                }
            });
    });
