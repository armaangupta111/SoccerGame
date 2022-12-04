class Wall{
    constructor(x,y,width,height){
    this.body = Bodies.rectangle(x,y,width,height)
    Matter.World.add(world, this.body);
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    }
    
    
    display(){
        fill("red")
        rect(this.x,this.y,this.width,this.height);
     }
    }