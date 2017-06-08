angular.module('registroService', [])
    .factory('registroRequest', function ($http) {
        var path = "http://localhost:8080/sigbook/user/";

        var myHeaders = {
            'accept': 'application/json',
            'accept-encoding': 'gzip, deflate',
            'accept-language': 'en-US,en;q=0.8',
            'content-type': 'application/json',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
        }
        

        return {            

            getOne: function(user_id){
                global = $http.get(path + "/" + user_id);
                return global;
            },
            getAll: function () {
                global = $http.get(path + 'listausuarios');
                return global;
            },
            insert: function (user) {
                var config = { headers: myHeaders };

                global = $http.post(path + 'insert', user, config);
                return global;
            },
            update: function (user) {
                var config = { headers: myHeaders };

                global = $http.put(path + 'update', user, config);
                return global;
            },
            delete: function (user_id) {
                global = $http.delete(path + user_id +  '/delete'); 
                return global;               
            }
        }
    });