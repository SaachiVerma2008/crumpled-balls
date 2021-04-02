class Paper {
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        
    this.body = Bodies.rectangle(x, y, options);

    World.add(world, this.body)
    }
    display(){
    Image(paper.png)

    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
    }
}