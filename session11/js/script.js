// console.log('web design')
// var firstName = "Areej"
// var lastName = "Reda"
// var fullName = firstName + " " + lastName
// var name = `${firstName} ${lastName}`
// console.log(firstName)
// console.log(lastName)
// console.log(fullName)
// console.log(name)
// var age = 19
// console.log(age)
// console.log(age++)
// console.log(age)
// console.log(++age)
// var l = age / firstName
// console.log(l)
// age += 5
// console.log(age)
// console.log(firstName == "Areej")
// console.log(firstName == "Areej" && age == 26)
// console.log(firstName == "Areej" || age == 19)
// console.log(firstName == "areej" || age == 19)
// console.log(typeof (firstName))
// console.log(typeof firstName);
// (typeof age) ? console.log("26") : console.log("inavlid")
// var age = 0;
// (age) ? console.log("26") : console.log("inavlid");
// (!age) ? console.log("26") : console.log("inavlid");

// var age= 19; 

// if (age == 26)
//     console.log("26");
// else
//     console.log(age);



// switch (age) {
//     case 26:
//         console.log("26");
//         break;
//     case 19:
//         console.log(age);
//         break;
// }


// for(var x= 1 ; x<=10 ; x++){
//     if(x==5)
//         continue;
//     else if (x==8)
//         break;
//     else
//         console.log(x)
// }


function looping( start, end, breakNum , continueNum){
    if(start&&end&&breakNum&&continueNum){
        for(var i= start ;i<=end ; i++)
            if(i== breakNum && breakNum>=start&&breakNum<=end)
                break;
            else if(i==continueNum && continueNum>=start && continueNum<=end)
                continue;
            else
                console.log(i)

    }
    else{
        console.log("please enter all numbers")
    }

}
looping(1,10,4,3)





