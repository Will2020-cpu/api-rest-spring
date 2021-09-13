
var app = angular.module('phonecatApp',[
    'ngRoute',
    'ngCookies',
    'bookList',
    'loginForm',
    'home'
])

app.config(function($routeProvider){
    $routeProvider.
        when("/",{
            template:'<home></home>'
        }).
        when("/login",{
            template:'<login-form></login-form>'
        })
})