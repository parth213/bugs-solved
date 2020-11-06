class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("bird.png");
    this.smoke = loadImage("smoke.png")
    this.arr=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x>230&&this.body.velocity.x>10){
     this.arr.push([this.body.position.x,this.body.position.y])
      
    }
    
    for (var i =0;i<this.arr.length-1;i=i+1) {
      image(this.smoke,this.arr[i][0],this.arr[i][1],11,11)
      
    }
    
  }
}

