

var x = 15;
var y = 25;


// fonction tableau

function board (x, y) 
{     
	for (var i = 0; i < x; i++) 
	{                   
		$("#grid").append( '<tr id="'+i+'"></tr>');                     
		for (var j = 0; j < y; j++) 
		{                       
			$("#grid tr:last-child").append( '<td id="'+i+'B'+j+'">'+'</td>' );
		

		}          
	}  
}

board(x,y);





// console.log(getnewid(2,5));

$('carnivorous.class.js', function(){

		max=2;
		min=1;
		var x = (Math.floor(Math.random() * (max - min +1)) + min);
		var y = (Math.floor(Math.random() * (max - min +1)) + min);

	function getnewid(x,y){

		var diese = "#";
		var b = "B";
		var rand = Math.floor(Math.random() * Math.floor(4));
		console.log(x);
		console.log(y);

		if(rand==0){
			var disp = diese + (x+1).toString() + b + y;
			$(disp).empty();
			$(disp).append(TRex.appearance);
			console.log(disp);
		} 
		else if(rand==1){
			var disp = diese + (x-1).toString() + b + y;
			$(disp).empty();
			$(disp).append(TRex.appearance);
			console.log(disp);
		} 
		else if(rand==2){
			var disp = diese + x + b + (y+1).toString();
			$(disp).empty();
			$(disp).append(TRex.appearance);
			console.log(disp);
		} 
		else if(rand==3){
			var disp = diese + x + b + (y-1).toString();
			$(disp).empty();
			$(disp).append(TRex.appearance);
			console.log(disp);
		} 
	}
	// function coucou(){
		
	// 	if (z==x){
	//  		$(z).empty();
	//  		z=y;	
	//  		$(z).append(TRex.appearance);

	// 	}
  
 // 		else{
 // 			$(z).empty();
 // 			z=x;
 // 			$(z).append(TRex.appearance);
 // 		}

	// }
	
	console.log(x);
	setInterval(function(){

		getnewid(x,y);




	},3000);
  	//$("#A16B14").css("background-color" , "red");

	// console.log(TRex.move());
	// console.log(TRex);
	// console.log(TRex.eat());
});
