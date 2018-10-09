function Animal(nam,x,y,appearance,hp, sex, dmg, age, maturity,regime)
{	
	this.nam = nam
	this.x = x;
	this.y = y;
	this.appearance = appearance;
    this.hp = hp;
    this.sex = sex;
    this.dmg = dmg;
    this.age = age;
    this.maturity = maturity;
    this.regime = regime;

    var pos=[this.x,this.y,"#" + this.x +"b"+ this.y];

    this.getid = function(pos){

    	var rand = Math.floor(Math.random() * Math.floor(4));
    	
		if(pos[1]<=0){
			var currenty = pos[1]+1;
			var currentx = pos[0];
		}
		else if(pos[1]>=24){
			var currenty = pos[1]-1;
			var currentx = pos[0];
		}
		else if(pos[0]<=0){
			var currentx = pos[0]+1;
			var currenty = pos[1];
		}
		else if(pos[0]>=14){
			var currentx = pos[0]-1;
			var currenty = pos[1];
		}

		else
		{
	    	if(rand==0){
	       		 var currentx=pos[0]+1;
	       		 var currenty=pos[1];
	       		  
	    	}
	    	else if(rand==1){
	       		 var currentx=pos[0]-1;  	
	       		 var currenty=pos[1];  	
	       		 		    
	       	}
	    	else if(rand==2){
	       		 var currenty=pos[1]+1;
	       		 var currentx=pos[0];
	       		 		      
	    	}
	    	else if(rand==3){
	       		 var currenty=pos[1]-1;
	       		 var currentx=pos[0];

	    	}
		}
    	
        var idPos="#"+currentx.toString() + "b" + currenty.toString();
        var currentPos=[currentx,currenty,idPos];

        return currentPos;
    }

    this.move = function(){
    	$(pos[2]).empty();
        pos =this.getid(pos);
        $(pos[2]).append(this.appearance);
        this.x = pos[0];
        this.y = pos[1];
    }

    this.compare = function(arraycomp){
		for(j=0;j<arraycomp.length;j++){
		
			if (arraycomp[j].x == this.x && arraycomp[j].y == this.y && arraycomp[j].regime != this.regime){
          		if(this.regime == 1){
		 			arraycomp.splice(j,1);
		 			cmptVeggie--;
		 			$('#displayVeggie').html(cmptVeggie);
          		}
          		else if(this.regime == 2){
		 			arraycomp.splice(this,1);
		 			cmptVeggie--;
		 			$('#displayVeggie').html(cmptVeggie);
          		}
        	}
		}
		return arraycomp;		
	}

};


