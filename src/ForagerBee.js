var ForagerBee = function() {
	HoneyMakerBee.call(this);
	this.age = 10;
	this.job = 'find pollen';
	this.canFly = true; 
	this.treasureChest = []; 
};

ForagerBee.prototype.eat = Grub.prototype.eat;

ForagerBee.prototype.forage = function() {
	this.treasureChest.push('treasure');
}