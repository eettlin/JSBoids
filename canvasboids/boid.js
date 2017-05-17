'use strict'


// Start Boid class  +++++++++++++++++++++++++++++++++++++++++++++++++++++
class Boid {
  //  Boid constructor
  constructor(m, location) {
    // declare instance variables for Boid
    this.main = m;
    this.loc = location;
    this.vel = vector2d(Math.random()*10 - 5, Math.random()*10 - 5);
    this.context = this.main.context;
    this.radius = Math.floor(Math.random()*5+5);
    this.clrR = Math.floor(Math.random()*250);
    this.clrG = Math.floor(Math.random()*250);
    this.clrB = Math.floor(Math.random()*250);
    this.color = 'rgb('+ this.clrR +', '+ this.clrG +', '+ this.clrB +')';
    //create all initial items
    this.init();
  }

  init(){

  }

  run() { // update this
    this.update();
    this.render();
  }
  update() { // render or draw this to canvas
    this.checkEdges();
    this.loc.x += this.vel.x;
    this.loc.y += this.vel.y;
  }
  render() { // render or draw this to canvas
    //console.log("this.color " + this.color);
    this.context.fillStyle  = this.color;
    this.context.beginPath();
    this.context.ellipse(this.loc.x, this.loc.y, this.radius, this.radius, 0, 2*Math.PI, false);
    this.context.fill();
  }

  checkEdges(){
    if(this.loc.x > 1000 ||this.loc.x < 10) this.vel.x *= -1;
    if(this.loc.y > 750 ||this.loc.y < 10) this.vel.y *= -1;
  }


}
