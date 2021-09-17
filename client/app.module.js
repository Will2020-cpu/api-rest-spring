var app = angular.module('phonecatApp',[
    'ngRoute',
    'ngCookies',
    'bookList',
    'loginForm',
    'home',
    'adminContainer',
])

app.config(function($qProvider, $routeProvider){
    $qProvider.errorOnUnhandledRejections(false);
    $routeProvider.
        when("/",{
            template:'<home></home>'
        }).
        when("/login",{
            template:'<login-form></login-form>'
        }).
        when('/admin',{
            template:'<admin-container></admin-container>'
        })
    
})