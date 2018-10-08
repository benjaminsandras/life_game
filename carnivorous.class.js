function Carnivorous(nam,x,y,appearance, hp, sex, dmg, age, maturity,regime){

   	Animal.call(this,nam, x, y,appearance, hp, sex, dmg, age, maturity,regime);

    this.eat = function(vegetarian){
   		Vegetarian.hp = 0;
   		
   	}

   	

    
}






