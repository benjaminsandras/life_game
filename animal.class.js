function Animal(hp, appearance, sex, dmg, age, maturity)
{
    this.hp = hp;
    this.appearance = appearance;
    this.sex = sex;
    this.dmg = dmg;
    this.age = age;
    this.maturity = maturity;
    this.move = function()
    {
    	return "jeCours";
    }
};


var TRex = new Animal(150, "beau", "carnivorous", "pénis", 50, 35, true);
console.log(TRex.move());