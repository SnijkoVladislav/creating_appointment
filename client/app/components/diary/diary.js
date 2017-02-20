import angular from 'angular';
import uiRouter from 'angular-ui-router';
import diaryComponent from './diary.component';

let diaryModule = angular.module('diary', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('diary', {
      url: '/diary',
      component: 'diary'
    });
})

.component('diary', diaryComponent)

.name;

export default diaryModule;
