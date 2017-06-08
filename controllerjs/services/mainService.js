var app = angular.module('mainService', []);

app.factory('mainRequest', function ($http) {

        var path1 = "http://localhost:8080/sigbook/publication/";
        var path2 = "http://localhost:8080/sigbook/friend/";
        var path3 = "http://localhost:8080/sigbook/user/";

        var myHeaders = {
            'accept': 'application/json',
            'accept-encoding': 'gzip, deflate',
            'accept-language': 'en-US,en;q=0.8',
            'content-type': 'application/json',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
        }

        return {            
            getMyPublication: function(user_id){
                global = $http.get(path1 + user_id + "/getMyPublications");
                return global;
            },
            getFriendPublication: function (user_id) {
                global = $http.get(path1 + user_id + "/getMyFriendsPublications");
                return global;
            },
            insertPublication: function (user_id, publication) {
                var config = myHeaders;
                global = $http.post(path1 + user_id + "/insert", publication, config);
                return global;
            },
            getMyFriends: function(user_id){
                global = $http.get(path3 + user_id + "/getMyFriends");
                return global;
            },
            insertNewFriend(friend){
                var config = myHeaders;
                global = $http.post(path2 + "insert", friend, config);
                return global;
            }
        }
    });