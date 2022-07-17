pragma circom 2.0.3;

/**
parameters:
["0x1c054e32cd88554a7153d3aaf894a3525b26adfb4cf5139453fa6ff0972f59d1", "0x27212cf7ae08c361bb84f2fd5e3e2f500c3d60125feca4710f381a7c608f0d53"],
[["0x1add7b20a6cec8c8344f1fcce4f081fe7ec9234cde63e3cfe91949a01a7eb575", "0x1c579a77d46b828bfca4054599eebb39f5f9a9fc67254bf7afb829baa3ea3ccc"],
 ["0x0cfeac146cdbc8b5d20e43bc3527611d9e0b1c98c250fc4e30be2248f625732b", "0x26c6271e01f3263ea7ccbe543cf7f6017c5cb33f8e94d5e964a4821182c9a102"]],
["0x14ea8649f3ea4c63b3b993438c34d09484269f3c7f81ef239dd84e0200ee87d5", "0x116228ac630759d95cd72b5f5bcea774ee6a06aca81fae0e46e8f5b3abbb35d0"],
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
        where last 2 integers denote coordinate of that
        city. Here cityNames are punkcity + i 
        where i is from [1, 2, 3]
    */
    var city[3][3] = [[0,0,0],[1,1,1],[2,2,2]];
    // var city[3][3] = [[0x4efb8e4341ca99bdd94541a2f82effb83750ce853b0ab90a829aeb3e4dc12224,0,0],
    //     [0xc6c69c65f286f76051a4b077c5edb4fd7b33a6ff790b09c9242734a37f996dcf,1,1],
    //     [0xf003e5bd8fa2143f08fa6a5a6b51b48f01acbb9e45e2300e37088ad963145d7e,2,2]];
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
}

component main = ProofOfLocation();