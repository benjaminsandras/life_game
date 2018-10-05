function Carnivorous(x,y,appearance, hp, sex, dmg, age, maturity,regime){

   	Animal.call(this, x, y,appearance, hp, sex, dmg, age, maturity,regime);

    this.eat = function(vegetarian){
   		Vegetarian.hp = 0;
   		
   	}

    
}






