pragma circom 2.0.3;

/**
parameters:
["0x1efed265f9358e6448e67f05e8defe69786769baaf989aa945cdae3ec176dc88", "0x0f7e552d829449a358da6fd7f7c7c6a0969b418c1b318dfb2c697865ff3e8ddb"],
[["0x226fbb8b40a3e68855a0a35953d5419cbb5ef7524fc19ce6b7336b1d3d17d64d", "0x1d1b4c5395f096b89bc5ef969972e7dd2c96cdf6e04609f33e76b0acb7238353"],
["0x1ad0159ef8c13da85ccd285e750c81cd9aafa090e75282585c835b0b168ce962", "0x1056733f2ef36a5861334836a6fa2d0dee260b0e121f3a6f4f667c2ae789b91d"]],
["0x14620bce4f2c020b5d29fabd599a2602609e87d1b42686df40ff288603fac423", "0x0c52905f7eca17af074a32d4a163283a7ca664a36d1738fa383a78055f0dead7"],
["0x0000000000000000000000000000000000000000000000000000000000000000"]
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
        city. Here cityNames are LocationHash of that city
    */
    // var city[3][3] = [[0,0,0],[1,1,1],[2,2,2]];
    var city[5][3] = [[0xdcc721bdb36f1d643b7b274ba0febc49c08f0106e760a6ec25f60f7f32e74d1,2060156,10044205],
        [0x56631a3209e89b1d14175f7722ea2d88360552a0b6036cd90a1aa8b60e71b78,2060562,10042865],
        [0x6f0df174283db5a216a03358cfef4883b0932b1ad57c0d5ee8b08d8dc449af6,2059194,10041029],
        [0xd0ceefea16ea1d701352e4bab894da98be8ba1e04ad908d799574fe3f3aa3d7,2059340,10040852],
        [0x6e4d3307fa06cef393c558029417ef5fbc7ae41140f5fc79c4dc1d29b0fb180,2060613,10043243]];
    var count = 0;
    for (var i = 0; i < 5; i++) {
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