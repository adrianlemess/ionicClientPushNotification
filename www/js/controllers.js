angular.module('app.controllers', [])

.controller('notificationsCtrl', function($scope) {

})

.controller('informationsCtrl', function($scope, quotationService) {
        quotationService.getQuotation().then(function(response) {
            var hora = response.data.create_date.substring(11, 19);
            $scope.data = response.data;
            $scope.hora = hora;
        });
    })
    .controller('averageInformationCtrl', function($scope, averageDailyService) {
        averageDailyService.getAverageDaily().then(function(response) {
            console.log(response.data.averageDaily);
            $scope.averageDaily = response.data.averageDaily;
        });
    })
    .controller('lastAverageInformationCtrl', function($scope, lastAverageService) {
        lastAverageService.getLastAverage().then(function(response) {
            $scope.lastAverage = response.data.average;
        });
    })

.controller('historicQuotationsCtrl', function($scope, listQuotationsService) {
    listQuotationsService.getListQuotations().then(function(response){
var teste = response.data;
 console.log(response.data);
console.log( teste.create_date);
angular.forEach(teste, function(data, key) {
     
console.log( teste[0].create_date);
        data.hora = teste.create_date.substring(11, 19);
    });
            $scope.datas = response.data; 
    });
})

.controller('historicAveragesCtrl', function($scope, listAverageDailyService) {
    listAverageDailyService.getListAverageDaily().then(function(response) {
        console.log(response.data);
        $scope.datas = response.data;
    });

})