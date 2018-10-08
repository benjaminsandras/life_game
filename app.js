var carnivorousapp = '<svg class="carnivorou" viewBox= "0 0 500 500" preserveAspectRatio="xMidYMid meet" x="0" y="0"><circle cx="250" cy="250" r="200" fill= "red" stroke-width="15" stroke="black"/></svg>';
var vegetariansapp = '<svg class="vegetarian" viewBox= "0 0 500 500" preserveAspectRatio="xMidYMid meet" x="0" y="0"><circle cx="250" cy="250" r="200" fill= "green" stroke-width="15" stroke="black"/></svg>';


var boardWidth = 15;
var boardHeight = 25;
var x = 5;
var y = 7;
var TRex = new Carnivorous("Carnivorous",shufflex(),shuffley(),carnivorousapp,150,"pénis", 50, 35, true,1);
var Allosaurus = new Carnivorous("Carnivorous",shufflex(),shuffley(),carnivorousapp,150,"pénis", 50, 35, true,1);
var Vélociraptor = new Carnivorous("Carnivorous",shufflex(),shuffley(),carnivorousapp,150,"pénis", 50, 35, true,1);


var Diplodocus = new Vegetarians("Vegetarians",shufflex(),shuffley(),vegetariansapp,500,"vulve", 20, 45, true,2);
var Triceratops = new Vegetarians("Vegetarians",shufflex(),shuffley(),vegetariansapp,500,"vulve", 20, 45, true,2);
var Stegosaurus = new Vegetarians("Vegetarians",shufflex(),shuffley(),vegetariansapp,500,"vulve", 20, 45, true,2);
var Galimimmus = new Vegetarians("Vegetarians",shufflex(),shuffley(),vegetariansapp,500,"vulve", 20, 45, true,2);
var Baryonix = new Vegetarians("Vegetarians",shufflex(),shuffley(),vegetariansapp,500,"vulve", 20, 45, true,2);
var Edmontosaurus = new Vegetarians("Vegetarians",shufflex(),shuffley(),vegetariansapp,500,"vulve", 20, 45, true,2);


var arr = [TRex,Allosaurus,Vélociraptor,Diplodocus,Triceratops,Stegosaurus,Galimimmus,Baryonix,Edmontosaurus];



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

function shufflex(){
	var x = Math.floor(Math.random() * Math.floor(14));
	return x;

}
function shuffley(){
	var y = Math.floor(Math.random() * Math.floor(24));
	return y;
}

function compare(arraycomp){
	for(i=0;i<arraycomp.length;i++){
		for(j=0;j<arraycomp.length;j++){
			if (arraycomp[i].x == arraycomp[j].x && arraycomp[i].y == arraycomp[j].y && arraycomp[i].regime != arraycomp[j].regime){
          		
          		console.log(arraycomp[i]);
          		console.log(arraycomp[j]);
          		    
		 		arraycomp.splice(j,1);
			}
			
			
		}		
	
	return arraycomp;
}


             



$("#init").click(function(){
	var int = setInterval(function(){
		var arr2 = [];
		//arr;
		
		for(i=0;i<arr.length;i++)
		{
			arr2.push(arr[i]);
			arr2[i].move();
		}

		arr2 = compare(arr);
			
		$("#stop").click(function(){
			clearInterval(int);
		})
	},500);
});
  


