angular.
    module('home')
    .component('home',{
        templateUrl: 'home/home.template.html',
        controller:['$http',
            function homeController($http){
                var data = this;

                $http.get('http://localhost:8080/api/books').then(function(response){
                    data.books = response.data;
                    console.log(response.data);
                })
                
            }
        ]
    })