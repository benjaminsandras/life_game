function Vegetarians(x,y, appearance,hp, sex, dmg, age, maturity){

   	Animal.call(this,x,y,appearance,hp, sex, dmg, age, maturity);

    this.eat = function(plant){
    	// Plant.hp = 0;
    	return 'je mange';
    }
}


