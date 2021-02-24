class Box{
    constructor(x,y){

        var option = {
            'restitution':0.8,
            'friction':1.0,
            'density':1
        }

        this.body = Bodies.rectangle (x,y,50,50,option);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;

        rectMode(CENTER);
        rect(pos.x , pos.y, this.width, this.height);
    }


}