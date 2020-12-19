class slingshot{
constructor(body1,point2){
    var options={
        bodyA:body1,
        pointB:point2,
        stiffness:0.04,
        length:10
    }
    this.pointB=point2;
    this.slingshot=Constraint.create(options);
    World.add(world,this.slingshot)
 }
 display(){
     //var pointa=this.chain.body1.position,pointb=this.chain.body2.position
     if(this.slingshot.bodyA){
     strokeWeight(4)
     line(this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
 }
 fly(){
     this.slingshot.bodyA=null;
 }
 attach(body){
    this.slingshot.bodyA = body;
}
}
