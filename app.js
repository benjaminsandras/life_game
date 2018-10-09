var carnivorousapp = '<svg class="carnivorou" viewBox= "0 0 500 500" preserveAspectRatio="xMidYMid meet" x="0" y="0"><circle cx="250" cy="250" r="200" fill= "red" stroke-width="15" stroke="black"/></svg>';
var vegetariansapp = '<svg class="vegetarian" viewBox= "0 0 500 500" preserveAspectRatio="xMidYMid meet" x="0" y="0"><circle cx="250" cy="250" r="200" fill= "green" stroke-width="15" stroke="black"/></svg>';

var boardWidth = 15;
var boardHeight = 25;

function board (boardWidth, boardHeight)
{
    for (var i = 0; i < boardWidth; i++)
    {
        $("#grid").append( '<tr id="'+i+'"></tr>');
        for (var j = 0; j < boardHeight; j++)
        {
            $("#grid tr:last-child").append( '<td id="'+i+'b'+j+'">'+'</td>' );
        }
    }
};

board(boardWidth,boardHeight);

var carnoName = ["Trex", "Allosaurus", "Vélociraptor"];
var veggieName = ["Diplodocus", "Stegosaurus", "Triceratops"];

var cmptCarno = 0;
var cmptVeggie = 0;

function shufflex(){
	var x = Math.floor(Math.random() * Math.floor(14));
	return x;

}
function shuffley(){
	var y = Math.floor(Math.random() * Math.floor(24));
	return y;
}

function newCarno(arr){

	var nameChoice = Math.floor(Math.random() * Math.floor(2));
	var appearance = carnivorousapp;
	var name = carnoName[nameChoice];
	var sex = Math.floor(Math.random() * Math.floor(1));
	var animal = new Carnivorous(name, shufflex(),shuffley(), appearance, 200, sex, 20, 45, true, 1);
	arr.push(animal);
}

function newVeggie(arr){
	
	var nameChoice = Math.floor(Math.random() * Math.floor(2));
	var appearance = vegetariansapp;
	var name = veggieName[nameChoice];
	var sex = Math.floor(Math.random() * Math.floor(1));
	var animal = new Vegetarians(name, shufflex(),shuffley(), appearance, 200, sex, 20, 45, true, 2);
	arr.push(animal);
}

$('#newCarno').click(function(){
	newCarno(world);
	cmptCarno ++;
	$('#displayCarno').html(cmptCarno);
});

$('#newVeggie').click(function(){
	newVeggie(world);
	cmptVeggie ++;
	$('#displayVeggie').html(cmptVeggie);
});

var world = [];

$("#init").click(function(){
	var int = setInterval(function(){
		var majWorld = [];
		
		for(i=0;i<world.length;i++)
		{
			majWorld.push(world[i]);
			majWorld[i].move();
			majWorld[i].compare(world);
			
		}	
		world = majWorld;		
			
		$("#stop").click(function(){
			clearInterval(int);
		});
	},500);
});
  


