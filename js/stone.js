class Stone{
    constructor(x,y,w,h){
        var option ={
           restitution:0.8,
        }
       this.body= Bodies.rectangle(x,y,w,h,option);
       this.w=w;
       this.h=h;
       
       World.add(world,this.body);
       }
   
       display(){
         var pos = this.body.position
         push()
         noStroke()
         translate(pos.x,pos.y)
         fill("red")
         ellipseMode(CENTER)
         ellipse(0,0,this.w,this.h);
         pop()
       } 
}