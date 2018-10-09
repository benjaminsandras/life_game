function Vegetarians(nam,x,y, appearance,hp, sex, dmg, age, maturity, regime){

   	Animal.call(this,nam,x,y,appearance,hp, sex, dmg, age, maturity,regime);

    this.eat = function(plant){
    	// Plant.hp = 0;
    	return 'je mange';
    }
}


