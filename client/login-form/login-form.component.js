angular.
    module('loginForm',['ngRoute'])
        .component('loginForm',{
            templateUrl:'login-form/login-form.template.html',
            controller:['$http','$scope','$cookies',
                function LoginFormController($http,$scope,$cookies){
                    
                    $scope.master = {}

                    $scope.show = function(user){
                        $http({
                            method:'GET',
                            url: `http://localhost:8080/api/login?username=${user.username}&password=${user.password}`,
                            xsrfCookieName:'XSRF-TOKEN'
                        }).then(function(response){
                            $cookies.put('JWT_TOKEN',JSON.stringify(response.data),{
                                samesite:'strict'
                            });
                        })
                    }
                }
            ]
        })