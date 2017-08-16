const app = angular.module('app', []);
app.controller('studentController', function($scope) {
  $scope.student = {
    firstname: 'Bolarinwa',
    lastname: 'Ajayi',
    fee: 32000,
    subjects: [
      {name: 'Computer', marks: 98},
      {name: 'Chemistry', marks: 82},
      {name: 'Mathematics', marks: 90},
      {name: 'Physics', marks: 87}
    ],
    fullname: function() {
      obj = $scope.student;
      return `${obj.firstname} ${obj.lastname}`
    }
  };
});
