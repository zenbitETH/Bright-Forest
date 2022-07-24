//SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "../node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "./verifier.sol";

contract BrightForest is ERC1155 {
    enum JourneyType {
        BikeTrip,
        Others
    }
    enum JourneyStatus {
        Started,
        Active,
        Completed
    }

    struct Journey {
        JourneyType journeyType;
        JourneyStatus status;
        uint256 startLocation; // cityId
        uint256 startTime; // Timestamp
        uint256 endLocation; // cityId
        uint256 endTime;
        uint256 distance;
        uint256 timeTaken;
    }
    Journey journey;

    struct User {
        string name;
        string hometown;
        string country;
        // power of 4 or 5
        int latitude;
        int longitude;
        uint256 distanceTravelled;
        uint256 energyReward;
    }
    User user;

    struct PunkCity {
        PlaceType placeType;
        address registerAddress;
        string cityName;
        uint256 cityId;
        bytes32 locationHash;
        int latitude;
        int longitude;
        uint256 energy;
    }
    PunkCity punkCity;

    enum PlaceType {
        Public_Park,
        Skate_Park,
        Soccer_Field,
        Basketball_Court,
        Playground,
        Outdoor_Gym,
        ArtGallery_Museum,
        Stadium,
        Beach,
        Recycling_Deposit,
        Bus_Stop,
        Library,
        University,
        Church_Temple,
        Government_Office,
        Tree
    }

    uint256 public cityId;
    uint256 private energy;
    // Verifer generated by ZK-circuit
    address verifierAddress = 0x4C7F5fbBd452b004Db659C9379d483EF2A5e2427;
    uint256 public constant energyPerCityTreshold = 10000000;
    uint256 public constant initialEnergyPerUser = 0;
    address[] public registeredUsers;

    mapping(address => User) public addressToUserDetail;
    mapping(address => Journey) public addressToJourneyDetail;
    mapping(address => bool) public userRegistered;
    mapping(uint256 => PunkCity) public cityIdToCityDetail;
    mapping(address => uint256) public energyPerCityId;
    mapping(uint256 => string) uris;

    event CityAdded(
        address indexed _from,
        uint256 _cityId,
        PlaceType _placeType,
        uint256 _energy,
        string _cityName,
        int _latitude,
        int _longitude
    );
    event EnergyTransfer(address indexed _from, uint256 _cityId);
    event LocationVerified(
        address indexed _from,
        string _name,
        uint256 _cityId,
        string _cityName,
        int _latitude,
        int _longitude
    );
    event UserRegistered(
        address indexed _from,
        string _name,
        string _homeTown,
        string country
    );
    event JourneyRegistered(
        address indexed _from,
        JourneyStatus _status,
        JourneyType _journeyType,
        uint256 _startLocation,
        uint256 _endLocation,
        uint256 _startTime,
        uint256 _endTime,
        uint256 _distance,
        uint256 _timeTaken
    );

    constructor() ERC1155("") {
        cityId = 0;
        owner = msg.sender;
    }

    address owner;

    modifier isOwner(address _address) {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    modifier isUserRegistered(address _address) {
        require(userRegistered[_address], "This user is not registered");
        _;
    }

    modifier cityIdExists(uint256 _cityId) {
        require(_cityId <= cityId, "This city id doesn't exist");
        _;
    }

    /**
     * @dev Registering user in the game
     */
    function registerUser(
        string memory _name,
        string memory _hometown,
        string memory _country
    ) public {
        require(
            userRegistered[msg.sender] == false,
            "You are already registered"
        );

        userRegistered[msg.sender] = true;
        registeredUsers.push(msg.sender);

        addressToUserDetail[msg.sender].name = _name;
        addressToUserDetail[msg.sender].hometown = _hometown;
        addressToUserDetail[msg.sender].country = _country;
        addressToUserDetail[msg.sender].distanceTravelled = 0;
        addressToUserDetail[msg.sender].latitude = 0;
        addressToUserDetail[msg.sender].longitude = 0;

        emit UserRegistered(
            msg.sender,
            addressToUserDetail[msg.sender].name,
            addressToUserDetail[msg.sender].hometown,
            addressToUserDetail[msg.sender].country
        );
    }

    function registerJourney(
        JourneyType _journeyType,
        JourneyStatus _status,
        uint256 _startCityId,
        uint256 _startTime,
        uint256 _endCityId,
        uint256 _endTime,
        uint256 _distanceInMetre
    ) public isUserRegistered(msg.sender) {
        addressToJourneyDetail[msg.sender].status = _status;
        addressToJourneyDetail[msg.sender].journeyType = _journeyType;
        addressToJourneyDetail[msg.sender].startLocation = _startCityId;
        addressToJourneyDetail[msg.sender].endLocation = _endCityId;
        addressToJourneyDetail[msg.sender].startTime = _startTime;
        addressToJourneyDetail[msg.sender].endTime = _endTime;
        addressToJourneyDetail[msg.sender].distance = _distanceInMetre;
        addressToJourneyDetail[msg.sender].timeTaken = _endTime - _startTime;

        addressToUserDetail[msg.sender].distanceTravelled += _distanceInMetre;
        addressToUserDetail[msg.sender].energyReward += _distanceInMetre;

        emit JourneyRegistered(
            msg.sender,
            addressToJourneyDetail[msg.sender].status,
            addressToJourneyDetail[msg.sender].journeyType,
            addressToJourneyDetail[msg.sender].startLocation,
            addressToJourneyDetail[msg.sender].endLocation,
            addressToJourneyDetail[msg.sender].startTime,
            addressToJourneyDetail[msg.sender].endTime,
            addressToJourneyDetail[msg.sender].distance,
            addressToJourneyDetail[msg.sender].timeTaken
        );
    }

    function verifyLocation(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[1] memory input,
        string memory _cityName,
        uint256 _cityId,
        int _latitude,
        int _longitude,
        bytes32 locationHash
    ) public isUserRegistered(msg.sender) {
        bool isVerified = Verifier(address(verifierAddress)).verifyProof(
            a,
            b,
            c,
            input
        );
        require(isVerified == true, "Location not verified");
        addressToUserDetail[msg.sender].latitude = _latitude;
        addressToUserDetail[msg.sender].longitude = _longitude;
        addressToUserDetail[msg.sender].energyReward += 100;

        emit LocationVerified(
            msg.sender,
            addressToUserDetail[msg.sender].name,
            _cityId,
            _cityName,
            _latitude,
            _longitude
        );
    }

    function addPunkCity(
        uint256 _placeType,
        string memory _cityName,
        int _latitude,
        int _longitude,
        string memory _ipfsuri
    ) public isOwner(msg.sender) {
        // updating the place struct
        cityIdToCityDetail[cityId].placeType = PlaceType(_placeType);
        cityIdToCityDetail[cityId].registerAddress = msg.sender;
        cityIdToCityDetail[cityId].cityName = _cityName;
        cityIdToCityDetail[cityId].latitude = _latitude;
        cityIdToCityDetail[cityId].longitude = _longitude;
        cityIdToCityDetail[cityId].locationHash = hash(_cityName);
        cityIdToCityDetail[cityId].energy = energyPerCityTreshold;

        //registration results in the place being minted as an nft. the nft id will be the same as the placeId
        mint(msg.sender, cityId, 1, "");
        setTokenUri(cityId, _ipfsuri);

        emit CityAdded(
            cityIdToCityDetail[cityId].registerAddress,
            cityId,
            cityIdToCityDetail[cityId].placeType,
            cityIdToCityDetail[cityId].energy,
            cityIdToCityDetail[cityId].cityName,
            cityIdToCityDetail[cityId].latitude,
            cityIdToCityDetail[cityId].longitude
        );
        emit EnergyTransfer(msg.sender, cityId);

        cityId += 1;
    }

    function getCities() public view returns (PunkCity[] memory) {
        PunkCity[] memory id = new PunkCity[](cityId);
        for (uint256 i = 0; i < cityId; i++) {
            PunkCity storage punkCityTemp = cityIdToCityDetail[i];
            id[i] = punkCityTemp;
        }
        return id;
    }

    function getUsers() public view returns (User[] memory) {
        User[] memory users = new User[](registeredUsers.length);
        for (uint256 i = 0; i < registeredUsers.length; ++i) {
            User storage userTemp = addressToUserDetail[registeredUsers[i]];
            users[i] = userTemp;
        }
        return users;
    }

    function transferEnergy(uint256 _cityId, uint256 _energy) public {
        cityIdToCityDetail[_cityId].energy += _energy;
    }

    function hash(string memory _string) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_string));
    }

    // Minting and metadata

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) private {
        _mint(account, id, amount, data);
    }

    function uri(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        return (uris[_tokenId]);
    }

    function setTokenUri(uint256 _tokenId, string memory _uri) internal {
        require(bytes(uris[_tokenId]).length == 0, "Cannot set uri twice");
        uris[_tokenId] = _uri;
    }
}
