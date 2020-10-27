class Launcher {
    constructor(bodyA,pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
        
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){  
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("turquoise");
            line(pointA.x,pointA.y,pointB.x,pointB.y);               
    }
}  