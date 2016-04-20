export default /* @ngInject */ function (){
    return {
        templateUrl : '/templates/board.html',
        link : function(scope, ele, attrs, ctrl) {
            scope.rows = 8;
            scope.columns = 8;
            scope.board = [];
            scope.selected = {};
            
            for(var r = 0; r<scope.rows; r++) {
                scope.board[r] = [];
                for(var c = 0;c<scope.columns;c++) {
                    scope.board[r][c] = {
                        address:`r${r}c${c}`,
                        value:0
                    };
                }
            }
        },
        controller : ['$scope',function($scope){
            $scope.selectCell = function(cell){

                $scope.selected = cell;
            }
            
        }]
    }; 
}