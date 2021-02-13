class SlingShot{
constructor(stone,boy){
    var options = {
        stone:stone,
        boy:boy,
        stiffness:0.04,
        length:10
    }
    this.boy=boy
    this.sling=Constraint.create(options);
    World.add(world,this.sling)
}
display(){
    var boy=this.sling.boy.position;
    var stone=this.stone
    strokeWeight(4);
    line(stone.x,stone.y,boy.x,boy.y);
}
}