
class Bubble { 
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.col = col;
    
    
  }
  move() {
    this.x = this.x + random(-coeff, coeff);
    this.y = this.y + random(-coeff, coeff);
    
   }
  
  show() {
    strokeWeight(1);
    noFill();
    stroke(this.col);
    point(this.x, this.y);
  }
  
}