class Sand {
    constructor(x,y){
    
     var options={
    
    'restitution':0.8,
    'friction':0.9,
    'density':12
     }
    this.body= Bodies.rectangle(x,y,3,3,options);
    this.width=3;
    this.height=3;
    World.add(world,this.body);
    
    }
    display(){
    
    var pos=this.body.position;
    
    var angle= this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("brown");
    strokeWeight(4);
    stroke("black");
    rectMode(CENTER);
   rect(0,0,this.width,this.height);
    pop();
    }
    
    
    }