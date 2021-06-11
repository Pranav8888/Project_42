function Raindrop (x, y, r) {
    this.body = Bodies.circle(x, y, r);
    
    this.body.setStatic = false;
    this.body.restitution = 0.6;
    this.body.friction = 0.3;
    
    this.r = r;

    World.add(world, this.body);

    this.show =  function() {
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        
        fill('blue');
        circle(0, 0, this.r, angle);

        pop();

    }
}