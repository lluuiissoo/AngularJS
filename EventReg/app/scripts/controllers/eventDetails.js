'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */

eventsApp.controller('EventDetailsCtrl',
	function ($scope) {
        $scope.event = {
            name: 'Angular Bootcamp',
            date: '10/26/2016',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/images/angularjs-logo.png',
            sessions: [
                {
					"id": 1,
                    "name": "Directives Masterclass",
                    "creatorName": "Bob Smith",
                    "duration": "1 hr",
                    "level": "Advanced",
                    "abstract": "In this session you will learn the ins and outs of directives!",
                    "upVoteCount": 5,
                    "visible": true
                },
                {
					"id": 2,
                    "name": "Scopes for fun and profit",
                    "creatorName": "John Doe",
                    "duration": "3 hrs",
                    "level": "Introductory",
                    "abstract": "This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.",
                    "upVoteCount": 0,
                    "visible": false
                },
                {
					"id": 3,
                    "name": "Well Behaved Controllers",
                    "creatorName": "Jane Doe",
                    "duration": "2 hrs",
                    "level": "Intermediate",
                    "abstract": "Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.",
                    "upVoteCount": 85,
                    "visible": true
                }
            ]
        };

        $scope.upVoteSession = function (session){
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session){
            if (session.upVoteCount > 0)
                session.upVoteCount--;
        }
    }
);