pragma solidity ^0.8.0;

contract CarbonTracking {
    struct EmissionRecord {
        string entity;
        uint256 carbonEmitted;
        uint256 timestamp;
    }
    
    EmissionRecord[] public emissions;
    
    function recordEmission(string memory _entity, uint256 _carbonEmitted) public {
        emissions.push(EmissionRecord(_entity, _carbonEmitted, block.timestamp));
    }
    
    function getEmissions() public view returns (EmissionRecord[] memory) {
        return emissions;
    }
}
