class block{
    constructor(x,y){
        var options =  {
            isStatic : false,
            'restitution' : 0.8,
            'density': 0.7,
            'friction':0.8

        } 
        this.body = Bodies.rectangle(x,y,30,40);
        this.width = 30;
        this.height = 40;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       // fill("yellow");
      // fill("blue");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}