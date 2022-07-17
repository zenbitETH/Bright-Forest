pragma circom 2.0.3;

/**
parameters:
["0x16a1a3df17c75d481276d1f550b91aeeffdc5a06ca0ae6160af793459b9f9689", "0x10a848aa5f57b8d85cdbe950ed7cc02131797560408e95d7d5f22372e3bf8a75"],
[["0x1699299c72766dabe82065c60f81613c4e8889dbc5e466552ab91c59ea5d04cd", "0x0e18aca6dbb04377a8026d847c4b98ea92af5fc05611e528bafd3c9ab718a0d3"],
 ["0x2cafb30f842555f914f981b5b794c7902eb1ba51e73222753b0bb8a3b8a1e183", "0x2cae498c15ac443991ddca37daae0fa7b3f4b289eadd274cc497e7b7abd9b5aa"]],
["0x0ab3e378925c3f214c0de5a833e6295d94b94233b44df828ee866d3da79a4aa7", "0x20e3cd6610ae39e2e3a1a08a9449e6881aba42d2bf669f6c9a8beedb18b03d25"],
["0x0000000000000000000000000000000000000000000000000000000000000001"]
*/

/*** 
Firstly, we would need to verify that a user is at some location

@params will be latitude, longitude, range, cityName
=>  bunch of if-else or switch statement to proove whether 
    someone is at the given city or not
=>  decide a range for tolerance of error in coordinates

***/

function isValidPunkCity(cityName, latitude, longitude, range) {
    /*  city is an array of intArrays of the cityNames 
        where last 2 elements denote coordinate of that
        city. Here cityNames are punkcity + i 
        where i is from [1, 2, 3]
        The values stored here is keccakHash of the city
        from which a random element is deleted to 
        maintain unpredictibility (here last) 
    */
    // var city[3][3] = [[0,0,0],[1,1,1],[2,2,2]];
    var city[3][3] = [[0x4efb8e4341ca99bdd94541a2f82effb83750ce853b0ab90a829aeb3e4dc1222,0,0],
        [0xc6c69c65f286f76051a4b077c5edb4fd7b33a6ff790b09c9242734a37f996dc,1,1],
        [0xf003e5bd8fa2143f08fa6a5a6b51b48f01acbb9e45e2300e37088ad963145d7,2,2]];
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
    isValidPunkCityLocation <-- isValidPunkCity(cityName, latitude, longitude, range);
    log(isValidPunkCityLocation);
}

component main = ProofOfLocation();