
function kilometerToMeter(kilometer) {

        if (kilometer<0)
        {
            return "Distance cann't be negative";
        }

        else if (kilometer == 0){

            return "No distance";

        }

        else {
            var meter = kilometer * 1000;//1 kilometer=1000 meters

            return meter; 
        }
    
}

var mtr = kilometerToMeter(0);
console.log(mtr)








//x=number of watch,y=number of mobile,z=number of laptop
function budgetCalculator(x,y,z) {

        if (x>0 && y>0 && z>0)
        {

          var watchCost = 50 * x ;//cost-per-watch=50

          var mobileCost = 100 * y ;//cost-per-mobile=100

          var laptopCost = 500 * z ;//cost-per-laptop=500

          var totalCost = watchCost + mobileCost + laptopCost ;

          return totalCost ;  

        }

        else{

           return "Number of goods must be greater than zero";
        }
}
var cst = budgetCalculator(0,3,2);
console.log(cst);




//duration = total day's in hotel
function hotelCost(duration) {

 if (duration>0)

    {

    var totalCost = 0 ;//set initial value

    if(duration <= 10){

        totalCost = duration * 100 ;//first 10 day's rent = 100$

    }
    else if (duration <= 20) {

        var firstPart = 10 * 100 ;//first 10 day's rent = 100$

        var remaining = duration - 10 ;//number of day's staying hotel from 11th to 20th day

        var secondPart = remaining * 80 ;//second 10 day's rent = 80$

        totalCost = firstPart + secondPart ;
    }

  else {

        var firstPart = 10 * 100 ;//first 10 day's rent = 100$

        var secondPart = 10 * 80 ;//second 10 day's rent = 80$

        var remaining = duration - 20 ; //number of day's staying hotel from 21th to upper day's

        var thirdPart = remaining * 50 ;//third 10 day's rent = 50$

        totalCost = firstPart + secondPart + thirdPart ;
    }

        return totalCost;
    }
    
    else {

        return "Duration must be greater than zero";
    }

}



//array=["some","different","names"]
function megaFriend(array) {

    if(array.length>0) {


       var longest = array[0];//set initial value

       for(let i = 0;i < array.length;i++){

        const element = array[i];

        if( longest.length < element.length){

            longest = element;//updating longest value by compairing with element value

            }
                 }


                return longest;
                 


    }
    
    else {

        return "Array must have at least one element";
     }
}     
