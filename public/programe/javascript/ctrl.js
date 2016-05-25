/**
 * Created by abc on 25/05/2016.
 */
var app = angular.module("app");

app.controller("default", function($scope){

    $scope.usertable=[];

    $scope.id=1;
    $scope.user={'id':$scope.id};

    $scope.education=['B.Tech', 'B.Com', 'B.Sc', 'BA'];

    $scope.savedata=function(myform){
        myform.nm.$touched=false;
        myform.eml.$touched=false;
        myform.mbl.$touched=false;
        myform.qlf.$touched=false;

        $scope.usertable.push($scope.user);
        $scope.id = $scope.id +1 ;

        $scope.user={'id':$scope.id};
    };

    $scope.closedata=function () {
        $scope.editg=false;
        $scope.user={'id':$scope.id};
    }


    $scope.updatedata=function($index){
        $scope.editg=false;
        $scope.user={'id':$scope.id};
    };

    $scope.editdata=function (val) {
        $scope.editg=true;
        $scope.user=$scope.usertable[val];
    };

    $scope.deletedata=function ($index) {
        $scope.usertable.splice($index,1);
    };


});



app.controller("second", function($scope){

    $scope.usertable=[];

    $scope.id=1;
    $scope.user={'id':$scope.id};

    $scope.education=['B.Tech', 'B.Com', 'B.Sc', 'BA'];
    


    $scope.savedata=function(myform){
        myform.nm.$touched=false;
        myform.eml.$touched=false;
        myform.mbl.$touched=false;
        myform.qlf.$touched=false;

        $scope.usertable.push($scope.user);
        $scope.id = $scope.id +1 ;
        $('#mymodal').modal('hide');
        $scope.user={'id':$scope.id};
    };

    $scope.closedata=function () {
        $scope.editg=false;
        $scope.user={'id':$scope.id};
    };

    $scope.updatedata=function($index){
        $scope.editg=false;
        $('#mymodal').modal('hide');
        $scope.user={'id':$scope.id};
    };

    $scope.editdata=function (val) {
        $scope.editg=true;
        $scope.user=$scope.usertable[val];
        $('#mymodal').modal('show')
    };

    $scope.deletedata=function ($index) {
        $scope.usertable.splice($index,1);
    };

    $scope.popaction=function () {
        var length = $scope.usertable.length - 1;
        $scope.user = $scope.usertable[length];
        $('#popmodal').modal('show');

    };

    $scope.popdata = function () {
            $scope.usertable.pop();
            $('#popmodal').modal('hide');
        $scope.user={'id':$scope.id};

    };

    $scope.unshiftdata=function () {
      $scope.usertable.unshift($scope.user);
        $('#unshiftmodal').modal('hide');
        $scope.user={'id':$scope.id};

    };

    $scope.shiftaction=function () {
        $scope.user=$scope.usertable[0];
        $('#shiftmodal').modal('show');

    };

    $scope.shiftdata = function () {
        $scope.usertable.shift();
        $('#shiftmodal').modal('hide');
        $scope.user={'id':$scope.id};

    };





});



app.controller("third", function($scope){


});