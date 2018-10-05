function Vegetarians(x,y, appearance,hp, sex, dmg, age, maturity, regime){

   	Animal.call(this,x,y,appearance,hp, sex, dmg, age, maturity,regime);

    this.eat = function(plant){
    	// Plant.hp = 0;
    	return 'je mange';
    }
}


