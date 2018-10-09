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

function compare(arraycomp){
	for(i=0;i<arraycomp.length;i++){
		for(j=0;j<arraycomp.length;j++){
			if (arraycomp[i].x == arraycomp[j].x && arraycomp[i].y == arraycomp[j].y && arraycomp[i].regime != arraycomp[j].regime){
          		if(arraycomp[i].regime == 1){
		 			arraycomp.splice(j,1);
		 			cmptVeggie--;
		 			$('#displayVeggie').html(cmptVeggie);
          		}
          		else if(arraycomp[i].regime == 2){
		 			arraycomp.splice(i,1);
		 			cmptVeggie--;
		 			$('#displayVeggie').html(cmptVeggie);
          		}
          	}
		}
	}		
	
	return arraycomp;
}

var world = [];

$("#init").click(function(){
	var int = setInterval(function(){
		var world2 = [];
		
		for(i=0;i<world.length;i++)
		{
			world2.push(world[i]);
			world2[i].move();
		}	
		world2 = compare(world);
			
		$("#stop").click(function(){
			clearInterval(int);
		});
	},500);
});
  


