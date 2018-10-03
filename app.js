var x = 25;
var y = 50;


// fonction tableau

function board (x, y) 
{     
	for (var i = 0; i < x; i++) 
	{                   
		$("#grid").append( '<tr data-id="'+i+'"></tr>');                     
		for (var j = 0; j < y; j++) 
		{                       
			$("#grid tr:last-child").append( '<td data-id="'+i+'/'+j+'">'+'</td>' );

		}          
	}  
}

board(x,y);

