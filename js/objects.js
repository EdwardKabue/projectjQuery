function Rabbit(adjective)
{
	this.adjective=adjective;
	
}
Rabbit.prototype.species="rabbit";
var whiteRabbit=new Rabbit("white");
var blackRabbit=new Rabbit("black");
whiteRabbit.species="human";
console.log(whiteRabbit);
console.log(blackRabbit)
