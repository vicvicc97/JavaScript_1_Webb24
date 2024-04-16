let bobAge=30;
let robAge=25;
let zobAge=35;

if (bobAge > robAge || zobAge){
    console.log("Bob är äldst")
}
else if (robAge > bobAge || zobAge){
    console.log("Rob är äldst") }
else if (zobAge > bobAge || robAge){
    console.log("Zob är äldst") }
else if (zobAge == bobAge > robAge){
    console.log("Det är lika mellan vissa personer")
}
else(zobAge && robAge && bobAge){
    console.log("Det har alla samma ålder")
}