angular.module('app.services', [])

.factory('quotationService', function($http) {
    return {
		getQuotation: function(){
			return $http.get("https://restfull-api-quotation-adrianlemess.c9users.io/api/getQuotation");
            //return $http.get("http://10.96.127.142:3000/cotacaoAtual");
		}
	}
})
.factory('averageDailyService', function($http) {
    return {
		getAverageDaily: function(){
			return $http.get("https://restfull-api-quotation-adrianlemess.c9users.io/api/getAverageDaily");
		}
	}
})
.factory('lastAverageService', function($http) {
    return {
		getLastAverage: function(){
			return $http.get("https://restfull-api-quotation-adrianlemess.c9users.io/api/getLastAverage");
		}
	}
})

.service('BlankService', [function(){

}]);

