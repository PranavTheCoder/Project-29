class Block {
    constructor(x,y,width,height) {
        var options = {
            restitution : 0.4,
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display() {
        var BoxPos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(BoxPos.x,BoxPos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}
   
   