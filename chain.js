class Chain {
    constructor(bodyA,bodyB) {
        var options = {
            'stiffness' :0.75,
            'length' :50,
            'bodyA' :bodyA,
            'bodyB' :bodyB
        }
        this.chain = Constraint.create(options)
        World.add(world, this.chain)
    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        stroke("black")
        strokeWeight(5)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}