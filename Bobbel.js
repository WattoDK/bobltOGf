class Bobbel {
constructor (){
    this.y=height
    this.x=random(0,width)
}
show(){
    circle(this.x,this.y,50)
    this.y-=3
}
}