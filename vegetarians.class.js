function Vegetarians(hp, appearance, sex, dmg, age, maturity){

   	Animal.call(this, hp, appearance, sex, dmg, age, maturity);

    this.eat = function(plant){
    	// Plant.hp = 0;
    	return 'je mange';
    }
}

var diplodocus = new Vegetarians(500, "beau", "vulve", 20, 65, true);
