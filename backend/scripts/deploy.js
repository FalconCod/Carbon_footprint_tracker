const { ethers } = require("hardhat");

async function main() {
    const CarbonTracking = await ethers.getContractFactory("CarbonTracking");
    const carbonTracking = await CarbonTracking.deploy();
    console.log("Contract deployed to:", carbonTracking.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
