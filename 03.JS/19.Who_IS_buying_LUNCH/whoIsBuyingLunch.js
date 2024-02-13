function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        var length=names.length;
        var genraterRandom=Math.floor(Math.random()*length);
        var randomPerson=names[genraterRandom];
        return randomPerson+" is going to buy lunch today!"
        
}

let names=["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whosPaying(names));