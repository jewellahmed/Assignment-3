
function kilometerToMeter(kilometer) {

        var meter = kilometer * 1000;//1 kilometer=1000 meters

        return meter;
    
}






//x=number of watch,y=number of mobile,z=number of laptop
function budgetCalculator(x,y,z) {
        
        var watchCost = 50 * x ;//cost-per-watch=50

        var mobileCost = 100 * y ;//cost-per-mobile=100

        var laptopCost = 500 * z ;//cost-per-laptop=500

        var totalCost = watchCost + mobileCost + laptopCost ;

        return totalCost ;  
}





//duration = total day's in hotel
function hotelCost(duration) {

    var totalCost = 0 ;//set initial value

    if(duration <= 10){

        totalCost = duration * 100 ;//first 10 day's rent = 100$

    }
    else if(duration <= 20){

        var firstPart = 10 * 100 ;//first 10 day's rent = 100$

        var remaining = duration - 10 ;//number of day's staying hotel from 11th to 20th day

        var secondPart = remaining * 80 ;//second 10 day's rent = 80$

        totalCost = firstPart + secondPart ;

    }
    else{

        var firstPart = 10 * 100 ;//first 10 day's rent = 100$

        var secondPart = 10 * 80 ;//second 10 day's rent = 80$

        var remaining = duration - 20 ; //number of day's staying hotel from 21th to upper day's

        var thirdPart = remaining * 50 ;//third 10 day's rent = 50$

        totalCost = firstPart + secondPart + thirdPart ;
    }

        return totalCost;

}



//array=["some","different","names"]
function megaFriend(array) {

    var longest = array[0];//set initial value

    for(let i = 0;i < array.length;i++){

        const element = array[i];

        if( longest.length < element.length){

            longest = element;//updating longest value by compairing with element value

            }
                 }

                return longest;
                    }