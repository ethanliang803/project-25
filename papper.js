class papper{
    constructor (x,y,r){
        var options = {
            isStatic:false,
            restitution = 0.3,
            friction: 0,
            density: 1.2

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle ( this.x,this.y,(this.r-20 )/2,options);

                World.add(world,this.body);


    }
    display()
    {var paperPosition = this.body.position;
    
        Push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        fill(250,0,250);
        ImageMode(CENTER);
        image(this.image,0,0,this.r,this.r)
        pop()
    
    
    
    }
}