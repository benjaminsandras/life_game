function Animal(x,y,appearance,hp, sex, dmg, age, maturity,regime)
{
	this.x = x;
	this.y = y;
	this.appearance = appearance;
    this.hp = hp;
    this.sex = sex;
    this.dmg = dmg;
    this.age = age;
    this.maturity = maturity;

    var start=[5,5,"#55"];

    this.getid = function(Start){

    	var rand = Math.floor(Math.random() * Math.floor(4));
    	
		if(Start[1]<=0){
			var number2 = Start[1]+1;
			var number = Start[0];
		}
		else if(Start[0]<=0){
			var number = Start[0]+1;
			var number2 = Start[1];
		}
		else if(Start[1]>=24){
			var number2 = Start[1]-1;
			var number = Start[0];
		}
		else if(Start[0]>=14){
			var number = Start[0]-1;
			var number2 = Start[1];
		}

		else
		{
	    	if(rand==0){
	       		 var number=Start[0]+1;
	       		 var number2=Start[1];
	       		  
	    	}
	    	else if(rand==1){
	       		 var number=Start[0]-1;  	
	       		 var number2=Start[1];  	
	       		 		    
	       	}
	    	else if(rand==2){
	       		 var number2=Start[1]+1;
	       		 var number=Start[0];
	       		 		      
	    	}
	    	else if(rand==3){
	       		 var number2=Start[1]-1;
	       		 var number=Start[0];

	    	}
		}
    	console.log("rand = " + rand);

        var x = number.toString();
        var y = number2.toString();
        var res="#"+x+y;
        var array=[number,number2,res];

        return array;
    }

    this.move = function(){
    	$(start[2]).empty();
    	// $(start[2]).data("carnivorous", 0);
        start =this.getid(start);
        $(start[2]).append(this.appearance);
        
    }


};


