var carnivorousapp = '<svg id="carnivorou" viewBox= "0 0 500 500" preserveAspectRatio="xMidYMid meet" x="0" y="0"><circle cx="250" cy="250" r="200" fill= "red" stroke-width="15" stroke="black"/></svg>';
var vegetariansapp = '<svg id="vegetarian" viewBox= "0 0 500 500" preserveAspectRatio="xMidYMid meet" x="0" y="0"><circle cx="250" cy="250" r="200" fill= "green" stroke-width="15" stroke="black"/></svg>';

console.log(carnivorousapp);
console.log(vegetariansapp);
var boardWidth = 15;
var boardHeight = 25;


// fonction tableau

function board (boardWidth, boardHeight)
{
    for (var i = 0; i < boardWidth; i++)
    {
        $("#grid").append( '<tr id="'+i+'"></tr>');
        for (var j = 0; j < boardHeight; j++)
        {
            $("#grid tr:last-child").append( '<td id="'+i+j+'">'+'</td>' );
        

        }
    }
}

board(boardWidth,boardHeight);
var x = 5;
var y = 7;
function shuffle(x,y){
	var x = Math.floor(Math.random() * Math.floor(14));
	var y = Math.floor(Math.random() * Math.floor(24));
}

shuffle(1,1);
var TRex = new Carnivorous(x,y,carnivorousapp,150,"pénis", 50, 35, true,1);
var Allosaurus = new Carnivorous(x,y,carnivorousapp,150,"pénis", 50, 35, true,1);
var Vélociraptor = new Carnivorous(x,y,carnivorousapp,150,"pénis", 50, 35, true,1);


shuffle(1,1);
var Diplodocus = new Vegetarians(x,y,vegetariansapp,500,"vulve", 20, 45, true,2);
var Triceratops = new Vegetarians(x,y,vegetariansapp,500,"vulve", 20, 45, true,2);
var Stegosaurus = new Vegetarians(x,y,vegetariansapp,500,"vulve", 20, 45, true,2);
var Galimimmus = new Vegetarians(x,y,vegetariansapp,500,"vulve", 20, 45, true,2);
var Baryonix = new Vegetarians(x,y,vegetariansapp,500,"vulve", 20, 45, true,2);
var Edmontosaurus = new Vegetarians(x,y,vegetariansapp,500,"vulve", 20, 45, true,2);



setInterval(function(){
	
	TRex.move();
	Allosaurus.move();
	Vélociraptor.move();
	Diplodocus.move();
	Triceratops.move();
	Stegosaurus.move();
	Galimimmus.move();
	Baryonix.move();
	Edmontosaurus.move();


},500);
  



