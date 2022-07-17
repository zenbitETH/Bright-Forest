pragma circom 2.0.3;

/*** 
Firstly, we would need to verify that a user is at some location

@params will be latitude, longitude, range, cityName
=>  bunch of if-else or switch statement to proove whether 
    someone is at the given city or not
=>  decide a range for tolerance of error in coordinates

***/

function isValidPunkCity(cityName, latitude, longitude, range) {
    /*  city is an array of intArrays of the cityNames 
        where last 2 integers denote coordinate of that
        city. Here cityNames are punkcity + i 
        where i is from [1, 2, 3]
    */
    var city[3][3] = [[0,0,0],[1,1,1],[2,2,2]];
    // var city[3][3] = [[0x4efb8e4341ca99bdd94541a2f82effb83750ce853b0ab90a829aeb3e4dc12224,0,0],
    //     [0xc6c69c65f286f76051a4b077c5edb4fd7b33a6ff790b09c9242734a37f996dcf,1,1],
    //     [0xf003e5bd8fa2143f08fa6a5a6b51b48f01acbb9e45e2300e37088ad963145d7e,2,2]];

    log(cityName);
    log(latitude);
    log(longitude);
    
    log(city[0][0]);
    log(city[0][1]);
    log(city[0][2]);
    
    log(city[1][0]);
    log(city[1][1]);
    log(city[1][2]);
    
    log(city[2][0]);
    log(city[2][1]);
    log(city[2][2]);
    var count = 0;
    for (var i = 0; i < 3; i++) {
        if (cityName == city[i][0] && 
        latitude <= city[i][1] + range && 
        latitude >= city[i][1] - range && 
        longitude <= city[i][2] + range &&
        longitude >= city[i][1] - range) {
            count++;
        }
    }
    return count;
}

template ProofOfLocation() {
    signal input cityName;
    signal input latitude;
    signal input longitude;
    signal input range;
    signal output isValidPunkCityLocation;

    var test = isValidPunkCity(cityName, latitude, longitude, range);
    log(test);
    isValidPunkCityLocation <-- test;
   
}

component main = ProofOfLocation();