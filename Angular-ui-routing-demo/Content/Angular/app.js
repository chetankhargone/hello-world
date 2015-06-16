/// <reference path="angular.min.js" />
var app = angular.module('demoApp', ['ui.router'])



app.config(['$routeProvider','$location'], function($routeProvider)
{
    when('/',
        {
            templateUrl: '/AlbumsList.html',
            controller: 'a1Ctrl'
        }).
    when('/albums/:albumName',
    {
        templateUrl: 'AlbumsList.html',
        controller: 'b1Ctrl'
    })
})
app.controller('a1Ctrl', function($scope,$http){

    $scope.albums = function()
    {
        //ajax getting data from server 
    }
})

app.controller('b1Ctrl', function ($scope, $routeProviders) {
    $scope.album = $routeProviders.albumName;

    $http({
        //same ajax function as above getting data from server for the nes sub album
    })
})

app.controller()