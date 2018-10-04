function Carnivorous(hp, appearance, sex, dmg, age, maturity){

   	Animal.call(this, hp, appearance, sex, dmg, age, maturity);

    this.eat = function(vegetarian){
    	// Vegetarian.hp = 0;
    	return 'je mange';
    }
}

var TRex = new Carnivorous(150, '<svg id="svgcircle" viewBox= "0 0 500 500" preserveAspectRatio="xMidYMid meet" x="0" y="0"><circle cx="250" cy="250" r="200" fill-opacity="red" stroke-width="15" stroke="red"/></svg>', "pénis", 50, 35, true);
