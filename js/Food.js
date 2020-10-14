class Food{
    constructor(){
        foodStock,
        lastFed
    }
    getFoodStock(){

    }

    updateFoodStock(){

    }

    deductFood(){
        
    }

    //fill(255,255,254);

    display(){
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
        if(lastFed>=12){
            text("Last Feed :"+lastFed%12+"PM",350,30);
        }
        else if(lastFed===0){
            text("Lat Feed : 12 AM",350,30);

        }
        else{
            text("Last Feed :"+lastFed+"AM",350,30);
        }

    }
}