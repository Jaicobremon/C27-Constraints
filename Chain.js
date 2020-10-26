class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:8,
            stiffness:0.3
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var posA= this.chain.bodyA.position;
        var posB= this.chain.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y);
    }
}