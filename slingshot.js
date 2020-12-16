class Sligshot{
    constructor(body1,body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            stiffness:0.04,
            length:10
        }

        this.sling = constraint.create(options)
        world.add(world,this.BodyA)
        world.add(world,this.BodyB)
    }




}