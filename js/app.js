const app = angular.module('app', []);
app.controller('StudentController', function($scope) {
  $scope.student = {
    firstname: 'Victor I.',
    lastname: 'Afolabi',
    fullname: function() {
      let studentObj = $scope.student;
      return studentObj.firstname + ' ' + studentObj.lastname;
    }
  };
});
