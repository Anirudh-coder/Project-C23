class Paper{
constructor(x,y,radius){
  var options = {
      isStatic : false,
      restitution : 0.3,
      friction : 0.5,
      density : 1.2

  }
Matter.Bodies.circle(x, y, radius, [options], [maxSides]);
}

 keyPressed() {
    if(keycode === UP_Arrow){
        Matter.body.applyForce(paperObject.body, paperObject.body.position,{x:85, y:-85});
    }

   function display(){
       ellipseMode(RADIUS);
       ellipse(paper.position.x , ball.position.y, 20,20);
   }
}

}