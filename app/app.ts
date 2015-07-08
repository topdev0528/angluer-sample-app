/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, routerDirectives, routerInjectables} from 'angular2/router';
import {httpInjectables} from 'angular2/http';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {NamesList} from './services/NameList';
import {Users, UsersService} from './components/users/users';

@Component({
  selector: 'app',
  viewInjector: [UsersService, NamesList]
})
@RouteConfig([
  { path: '/', redirectTo: '/home' },
  { path: '/home', component: Home, as: 'home' },
  { path: '/about', component: About, as: 'about' },
  { path: '/users/...', component: Users, as: 'users' }
])
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  styles: ['app { display: block }'],
  directives: [routerDirectives]
})
class App {}


bootstrap(App, [routerInjectables, httpInjectables]);
