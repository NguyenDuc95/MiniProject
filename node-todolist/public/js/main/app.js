// define a angualer for client 
const app = angular.module ("app.todos", []);
app.controller("todoController",['$scope',function($scope){
    $scope.appName  = 'To do dashboard'
}])