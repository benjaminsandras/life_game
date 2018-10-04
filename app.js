

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




function getnewid(x,y){
	console.log("coucou");
	var diese = "#";
	var b = "B";
	var x1=x++;
	var x2=x--;
	var y1=y++;
	var y2=y--;
	var rand = Math.floor(Math.random() * Math.floor(4));
	console.log(rand);
	if(rand==0){
		return diese + x1.toString() + b + y;
		console.log(diese + x1.toString() + b + y);

	console.log("coucou");
	} 
	else if(rand==1){
		return diese + x2.toString() + b + y;
		console.log(diese + x2.toString() + b + y);

	console.log("coucou");
	} 
	else if(rand==2){
		return diese + y1.toString() + b + x;
		console.log(diese + y1.toString() + b + x);

	console.log("coucou");
	} 
	else if(rand==3){
		return diese + y2.toString() + b + x;
		console.log(diese + y2.toString() + b + x);

	console.log("coucou");
	} 
}

console.log(getnewid(2,5));

$('carnivorous.class.js', function()
{

function coucou()
{
	if (z==x){
	 	$(z).empty();
	 	z=y;	
	 	$(z).append(TRex.appearance);

	}
  
 	else{
 		$(z).empty();
 		z=x;
 		$(z).append(TRex.appearance);
 	}

}
setInterval(function(){getnewid(2,5);},3000);
  	//$("#A16B14").css("background-color" , "red");

	// console.log(TRex.move());
	// console.log(TRex);
	// console.log(TRex.eat());
})
