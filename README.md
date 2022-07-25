# Bright-Forest

Developed at [HackFS 2022](https://ethglobal.com/showcase/bright-forest-a6zdy)  

## About
Bright forest is based on Dark Forest game dynamic to move game units between two places located by coordinates. In DF this works to move resources between planets, while BF will use it to move "Energy and Chips" between IRL places minted as NFTs on Punk Cities.

Bright Forest uses ZKsnarks to prove that players' IRL location matches with the origin and destination coordinates and validate that the ride is completed. When a ride is completed the player gets energy units from the Bright Forest contract as a reward for the distance traveled on the ride.

## Contracts



### Built with:

-React 
-SnarksJS  
-Google API  
-IPFS  
-Polygon  
-Punk Cities Places  
-Tailwind CSS  




### Dev Environment

Working with Polygon Mumbai testnet contracts (further update to deploy your own contracts)

1. Make `.env.sample`

```shell
touch .env.sample
```

add environment variable

```text
REACT_APP_MAPS_API_KEY
```

3. Install dependencies

```bash
cd client
npm install
```

4. Start developmment

```bash
cd client
npm start
```

5. 📱 Open http://localhost:3000 to see the app

### Contracts

#### Deployment address (Polygon Mumbai)
``` 
0xAb359104d87180B0d2506cBc6AC75BCba553dc3c
```
Verified code can found [here](https://mumbai.polygonscan.com/address/0xab359104d87180b0d2506cbc6ac75bcba553dc3c#code).
To view decoded Inputs and contract calls use Decode Input Data button provided at the bottom of the transaction.
