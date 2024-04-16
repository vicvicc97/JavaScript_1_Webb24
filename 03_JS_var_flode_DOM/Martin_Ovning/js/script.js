let bobAge = 30;
let robAge = 30; //25
let zobAge = 35; //35

if (bobAge > robAge && bobAge > zobAge) {
    console.log("Bob är äldst");
} else if (robAge > bobAge && robAge > zobAge) {
    console.log("Rob är äldst");
} else if (zobAge > bobAge && zobAge > robAge) {
    console.log('Zob är äldst');
} 

if (bobAge === robAge && bobAge === zobAge &&  robAge===zobAge) {
    console.log("De har samma ålder");
} else if (bobAge === robAge || bobAge === zobAge ||  robAge===zobAge) {
    console.log("Det är lika mellan vissa personer");
}

/* Om en condition är true i mitten av if-satsen då fortsätter inte programmet kolla vidare. Även om andra conditions är true längre ner det kommer inte printas i consolen. Om du vill kolla på de andra cindition är true då måste man dela if-satsen i flera if-satser  */

/* OR(||) condition ska vara efter och(&&) condition för att det ska kolla igenom hela koden i if-satsen */