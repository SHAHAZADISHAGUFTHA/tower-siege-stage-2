class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.img1 = loadImage("sling1.png");
        this.img2 = loadImage("sling2.png");
        this.img3 = loadImage("sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB = pointB;
    }

    display(){
        image(this.img1,200,250);
        image(this.img2,170,252);
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke(color(48,22,8));
        line(pointA.x-20, pointA.y, pointB.x-5, pointB.y);
        line(pointA.x-20, pointA.y, pointB.x+40, pointB.y-3);
        image(this.img3,pointA.x-30,pointA.y-10,10,30);
        }      
    }
    
    

    fly(){
       this.sling.bodyA = null;

    } 
    reattach(bodyA){
        this.sling.bodyA = bodyA;
  
      }
}

