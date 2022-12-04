class Player{
constructor(){
  this.player = Matter.Bodies.rectangle(100, 100, 50, 50,{restitution:1.2, isStatic: true});
  Matter.World.add(world, this.player);
  
}
  
  display(){
     image(plrImg, this.player.position.x, this.player.position.y, 50, 50);
  }
}