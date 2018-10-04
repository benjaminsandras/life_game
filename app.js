var x = 25;
var y = 50;


// fonction tableau

function board (x, y) 
{     
	for (var i = 0; i < x; i++) 
	{                   
		$("#grid").append( '<tr id="'+i+'"></tr>');                     
		for (var j = 0; j < y; j++) 
		{                       
			$("#grid tr:last-child").append( '<td id="'+i+'/'+j+'">'+'</td>' );

		}          
	}  
}

board(x,y);

function canvas(coucou){
	
$("# '"+ coucou + "'").append("<canvas id='canv'></canvas>");

	// var c=document.getElementById("canv");
	// var ctx=c.getContext("2d");
	// ctx.beginPath();
	// ctx.arc(100,75,50,0,2*Math.PI);
	// ctx.stroke();

}

canvas(20/5);

