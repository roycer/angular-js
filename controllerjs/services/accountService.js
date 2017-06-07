angular.module('accountService', [])
    .factory('accountRequest', function ($http) {
        var path = "http://localhost:8080/springapp/account/";

        var myHeaders = {
            'accept': 'application/json',
            'accept-encoding': 'gzip, deflate',
            'accept-language': 'en-US,en;q=0.8',
            'content-type': 'application/json',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
        }
        

        return {            

            getOne: function(id_account){
                global = $http.get(path + "get/" + id_account);
                return global;
            },
            getAll: function () {
                global = $http.get(path + 'get');
                return global;
            },
            insert: function (account) {
                var config = { headers: myHeaders };

                global = $http.post(path + 'post', account, config);
                return global;
            },
            update: function (account) {
                var config = { headers: myHeaders };

                global = $http.put(path + 'put', account, config);
                return global;
            },
            delete: function (account) {
                var config = { data: account,  headers: myHeaders};

                global = $http.delete(path + 'delete', config); 
                return global;               
            }
        }
    });