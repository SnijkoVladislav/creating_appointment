import angular from 'angular';
import Home from './home/home';
import Diary from './diary/diary';

let componentModule = angular.module('app.components', [
  Home,
  Diary
])

.name;

export default componentModule;
