class Paper {
    constructor() {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0

     

      }
      this.body=Bodies.circle(200,300,20,options)
      World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,20,20)




    }
}