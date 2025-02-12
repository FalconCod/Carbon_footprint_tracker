# Blockchain-Based Carbon Footprint Tracker

## Overview
This project is a **Blockchain-Based Carbon Footprint Tracker** that allows companies and organizations to record and track their carbon emissions securely and transparently using blockchain technology. The system ensures data integrity and prevents tampering by storing emissions data on a decentralized network.

## Features
- **Decentralized & Secure:** Uses Ethereum smart contracts to store carbon emission records immutably.
- **Transparency:** Anyone can verify emissions data recorded on the blockchain.
- **User-Friendly Interface:** A simple frontend built with React for submitting and viewing emission records.
- **Smart Contract Integration:** Solidity-based smart contract deployed on an Ethereum testnet.

## Project Structure
```
CarbonFootprintTracker/
│── backend/
│   ├── contracts/
│   │   ├── CarbonTracking.sol  # Smart contract for carbon tracking
│   ├── scripts/
│   │   ├── deploy.js  # Script for deploying the contract
│── frontend/
│   ├── public/
│   │   ├── index.html  # Main HTML file
│   ├── src/
│   │   ├── components/
│   │   │   ├── EmissionForm.js  # Form for submitting emissions data
│   │   │   ├── EmissionList.js  # List displaying emissions
│   │   ├── styles/
│   │   │   ├── styles.css  # Basic styling
│   │   ├── App.js  # Main React component
│── README.md  # Project documentation
│── package.json  # Dependencies and scripts
```

## How to Run the Project

### Prerequisites
- **Node.js** (v16 or higher)
- **Metamask Wallet** (For connecting to Ethereum testnets)
- **Ganache or Hardhat** (For local blockchain testing)
- **React.js** (For frontend development)

### Backend (Smart Contract Deployment)
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Compile and deploy the contract:
   ```sh
   npx hardhat run scripts/deploy.js --network localhost
   ```
4. Note the **smart contract address** displayed in the terminal and update it in `frontend/src/App.js`.

### Frontend (React Application)
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React application:
   ```sh
   npm start
   ```
4. Open **http://localhost:3000/** in your browser.

## Usage
- **Submit an emission record** by entering the entity name and carbon emissions in the input fields.
- **View recorded emissions** in the list, which fetches data from the blockchain.
- **Ensure Metamask is connected** to an Ethereum testnet (like Rinkeby or Sepolia) to interact with the smart contract.

## Smart Contract Code (Snippet)
```solidity
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
```

## Future Enhancements
- **Integration with IoT devices** for automated data collection.
- **Tokenizing carbon credits** to incentivize lower emissions.
- **AI-driven analytics** for insights on carbon footprint reduction.

## License
This project is open-source and available under the MIT License.

---
**Developed by:** *Athreya Sharma , Pranay.Ch , Yellaling , Amoghavarsha*
