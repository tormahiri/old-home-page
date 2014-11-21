	var app=angular.module("jsonapp",[]);

	app.controller("inkas",function($scope){


	$scope.item={itemname:"tormahiri"};
	});
	app.directive("tormahiri",function(){

	return{
		restrict:'E',
		template:'بارلىق ھوقۇق تورماھىرىغا مەنسۇپ'
	}
	});
	app.factory("info",function(){

	return{

	hakkida:'بۇ سەھىپىدە داڭلىق پىروگىرامما تىللىرىغا مۇناسىۋەتلىك ئەڭ يڭى دەرسلىكلەر تەمىنلىنىدۇ،جۈملىدىن java,go قاتارلىقلار ،ئۇنىڭدىن باشقا دەرسلىكلەرمۇ ئۇزۇن بولمىغان ۋاقىت ئىچىدە توربىكىتىمىزدە ئىلان قىلىنىىپ تۇرىدۇ،شۇنداقلا بۇ دەرسلىكلەرنى ھەقسىز چۈشۈرۋالالايسىز،دەرسلىكلەر ئەڭ كىچىك ئۆلچەملىك شەكىلدە فورماتلانغان بولۇپ ،چۈشۈرپ خالىغان سىن قويۇش قويغۇچىدا قويۇپ كۆرسىڭىز بولىدۇ،دەرسلىكلەرنىڭ ھەممىسى سۈزۈك نۇسخىدا بولۇپ ھىچقانداق دەرسلىكلنىڭ سۈزۈكلىكىگە تەسر يەتكۈزىدىغان شەكىلدە پىرىسلاش ئىلىپ بىرىلمىغان',
	talap:"باشقا پىكىر تەلەپ ياكى تەكلىپىڭىز بولسا ئىنكاس قالدۇرڭ"
	}



	});
	 function myapp($scope,$http,$rootScope,info){
	 	$rootScope.headfinfo="تورماھىرى تېخنىكا تورى";
	    $scope.currentPage = 0;
	    $scope.pageSize = 3;
		$scope.items = [];
		$scope.download="چۈشۈرۈش";
		$scope.about=info.hakkida;
		$scope.talap=info.talap;


		$scope.getItems = function() {
			$http({method : 
				'GET',url : 
				'https://api.parse.com/1/classes/daris',
				 headers: { 'X-Parse-Application-Id':'hSNY3qCUgP6jYeb3dwG53huAGGd8YEHugCAjdgGR', 'X-Parse-REST-API-Key':'2rkTaxHnBJbKZvJsDmqdl4kHhqTI8QP9rzaFpPDi'}})
			.success(function(data, status) {
			
				$scope.items = data.results;
			
			});
		};

		};

		app.filter('startFrom', function() {
	    return function(input, start) {
	        start = +start; //parse to int
	        return input.slice(start);
	    }

	});
