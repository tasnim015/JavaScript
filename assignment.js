/** code for feetToMile function*/
function feetToMile(value){
   
    var result = value/5280;
    return result;
    
}
var feets=5280;
var miles=feetToMile(feets);
    if(miles<0){
        console.log("feets can not be negative\n");
    }
    else{
    console.log( feets +" feets = "+miles.toFixed(3)+" miles\n");
    }


/** code for woodCalculator function */
function woodCalculator(chairs,tables,beds){
    var woods = (chairs*1) + (tables*3) + (beds*5);
    return woods;
}

var chair=2;
var table=1;
var bed=3;
    if(chair<0||table<0||bed<0){
        console.log("table,chair,bed can not be obtained negative value\n");
    }
    else{
        var totalWood=woodCalculator(chair,table,bed);
        console.log(totalWood+" woods needed\n");
    }


/**code for brickCalculator function */

function brickCalculator(base){
    var bricks=0;
    if(base<=10){
        bricks=base*15*1000;
    }
    else if(base>10&&base<=20){
        bricks= (10*15*1000) + ((base-10)*12*1000);
    }
    else{
        bricks=(10*15*1000) + ((20-10)*12*1000) + ((base-20)*10*1000);
    }
    return bricks;
}

var floor=25;
    if (floor<=0){
        console.log("bricks can not be required\n");
    }
    else{
        var totalBricks=brickCalculator(floor);
        console.log("We will need "+totalBricks+" bricks  for this building\n");
    }

/**code for tinyFriend function */

function tinyFriend(friendsName){
    var sizeOfName = friendsName[0].length;
    var indexNo=0;
    for(var i=0;i<friendsName.length;i++){
        if(friendsName[i].length<sizeOfName){
            sizeOfName = friendsName[i].length;
            indexNo=i;
        }
    }
    return friendsName[indexNo];
}

var friendsList=["tasnim","jawad","kawser","mostakim","hemel"];
    if(friendsList.length==0){
        console.log("this array has no element");
    }
    else{
        var tinyOne=tinyFriend(friendsList);
        console.log(tinyOne);
    }


    
