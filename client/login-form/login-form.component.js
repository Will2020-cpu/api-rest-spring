angular.
    module('loginForm', ['ngRoute'])
    .component('loginForm', {
        templateUrl: 'login-form/login-form.template.html',
        controller: ['$http', '$scope', '$cookies', '$location',
            function LoginFormController($http, $scope, $cookies, $location) {
                $scope.isVisible = false;

                $scope.submit = function (user) {
                    $http({
                        method: 'GET',
                        url: `http://localhost:8080/api/login?username=${user.username}&password=${user.password}`,
                    }).then(function (response) {
                        if (response.status === 200) {
                            $cookies.put('JWT_TOKEN', JSON.stringify(response.data), {
                                samesite: 'strict'
                            });
                            $location.path('/admin');
                        }                        
                    },function(error){
                        $scope.isVisible = true;
                    })
                }
            }
        ]
    })