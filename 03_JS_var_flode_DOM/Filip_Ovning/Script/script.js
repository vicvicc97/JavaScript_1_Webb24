
let bobAge = 30;
let robAge = 25;
let zobAge = 35;

if (bobAge > robAge && bobAge > zobAge){
    console.log("Bob is the oldest.");
} 
else if (robAge > bobAge && robAge > zobAge){
    console.log("Rob is the oldest.");
}
else if(zobAge > bobAge && robAge > zobAge){
    console.log("Zob is the oldest.");
}
else if(bobAge === robAge || bobAge === zobAge || robAge === zobAge){
    console.log("Its the same between some people.");
}
else if(bobAge === robAge && bobAge === zobAge && robAge === zobAge){
    console.log("They have the same age.");
}

