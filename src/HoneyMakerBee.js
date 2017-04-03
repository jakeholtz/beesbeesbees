var HoneyMakerBee = function() {
    Bee.call(this); //this refers to honeymakerbee object 
	this.age = 10; 
	this.job = 'make honey';
	this.honeyPot = 0;
};

HoneyMakerBee.prototype.eat = Grub.prototype.eat;

HoneyMakerBee.prototype.makeHoney = function() {
		this.honeyPot++;
}
HoneyMakerBee.prototype.giveHoney = function() {
		this.honeyPot--;
}