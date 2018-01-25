var numBlocks = 38;
var sizeBlocks = 10;
var gridSize = numBlocks * sizeBlocks;
var canvas = jQuery('#game-grid').attr({width: gridSize, height: gridSize});
var context = canvas.get(0).getContext("2d");
var a = 0;
var game_gun, game_random;
context.fillStyle = '#fff000';

var arr_gun =  [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
                [0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];



var theGame = function(){
    return {
        createRandomArray: function () {
            var arrAux = [];
            for(var i=0; i < numBlocks; i++){
                arrAux[i] = [];

                for(var y=0; y < numBlocks; y++){
                    arrAux[i][y] = 0;

                    var randomBinary = Math.floor(Math.random() * 2);

                    if (randomBinary === 1) {
                        arrAux[i][y] = 1;
                    } else {
                        arrAux[i][y] = 0;
                    }
                }
            }

            return arrAux;
        },
        createArray: function (bl) {
            var array = [];
            for (var x = 0; x < bl; x++) {
                array[x] = [];
            }

            return array;
        },
        createGrid: function () {

            context.clearRect(0, 0, gridSize, gridSize);

            for (var x = 0; x <= gridSize; x += sizeBlocks) {
                context.moveTo(x, 0);
                context.lineTo(x, gridSize);
                context.moveTo(0, x);
                context.lineTo(gridSize, x);
            }

            context.strokeStyle = "black";
            context.stroke();


            for (var i = 0; i < numBlocks; i++) {
                for (var y = 0; y < numBlocks; y++) {
                    if (arr[i][y] === 1) {
                        context.fillRect(y * sizeBlocks, i * sizeBlocks, sizeBlocks, sizeBlocks);
                    }
                }
            }
        },
        updateGameGrid: function () {

            for (var i = 1; i < numBlocks -1; i++) { //rows
                for (var y = 1; y < numBlocks -1; y++) { //columns
                    var neithbors = 0;

                    //add up the total values for the surrounding cells
                    neithbors += arr[i - 1][y - 1]; //top left
                    neithbors += arr[i - 1][y]; //top center
                    neithbors += arr[i - 1][y + 1]; //top right

                    neithbors += arr[i][y - 1]; //middle left
                    neithbors += arr[i][y + 1]; //middle right

                    neithbors += arr[i + 1][y - 1]; //bottom left
                    neithbors += arr[i + 1][y]; //bottom center
                    neithbors += arr[i + 1][y + 1]; //bottom right

                    if (arr[i][y] === 0) { //dead cell
                        if (neithbors === 3) {
                            arr2[i][y] = 1;
                        } else {
                            arr2[i][y] = 0;
                        }

                    } else if (arr[i][y] === 1) { // alive cell
                        if (neithbors === 0 || neithbors === 1) {
                            arr2[i][y] = 0;
                        }
                        else if (neithbors === 2 || neithbors === 3) {
                            arr2[i][y] = 1;
                        }
                        else if (neithbors > 3) {
                            arr2[i][y] = 0;
                        }
                    }
                }
            }



            var aux = arr;
            arr = arr2;
            arr2 = aux;
        }
    }
};

function start_random() {
    game_random.createGrid();
    game_random.updateGameGrid();

    a++;
    if(a<100)setTimeout(start_random, 50);
}

function start_gun() {
    game_gun.createGrid();
    game_gun.updateGameGrid();

    a++;
    if(a<100)setTimeout(start_gun, 50);
}

jQuery('document').ready(function () {

    jQuery('.btn').click(function () {
        a = 0;
        var type = jQuery(this).attr('data-type');

        if(type === 'random') {
            game_random = new theGame();
            arr2 = game_random.createArray(numBlocks);
            arr = game_random.createRandomArray();
            start_random();

        } else {
            game_gun = new theGame();
            arr2 = game_gun.createArray(numBlocks);
            arr = arr_gun;
            start_gun();
        }
    });

});
