class Boat{

    constructor(x,y,width,height,boatPosition){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.boatPosition = boatPosition;
    this.image = loadImage("assets/boat.png");
    World.add(world,this.body)    ;


    }
    remove(index) {
        Matter.World.remove(world, boats[index].body);
        boats.splice(index, 1);
    
      }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);//it gives the pos.x,pos.y as center of boat
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.boatPosition, this.width, this.height);
        pop ();
    }







}