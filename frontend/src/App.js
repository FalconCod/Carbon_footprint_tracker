import React, { useState, useEffect } from "react";
import Web3 from "web3";
import contractABI from "./contractABI.json";
import EmissionForm from "./components/EmissionForm";
import EmissionList from "./components/EmissionList";

const CONTRACT_ADDRESS = "YOUR_SMART_CONTRACT_ADDRESS";

export default function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [emissions, setEmissions] = useState([]);

  useEffect(() => {
    async function loadBlockchainData() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        const contractInstance = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);
        setContract(contractInstance);
        fetchEmissions(contractInstance);
      }
    }
    loadBlockchainData();
  }, []);

  const fetchEmissions = async (contractInstance) => {
    try {
      const data = await contractInstance.methods.getEmissions().call();
      setEmissions(data);
    } catch (error) {
      console.error("Error fetching emissions:", error);
    }
  };

  return (
    <div>
      <h1>Blockchain-Based Carbon Footprint Tracker</h1>
      <p>Connected Account: {account}</p>
      <EmissionForm contract={contract} account={account} fetchEmissions={fetchEmissions} />
      <EmissionList emissions={emissions} />
    </div>
  );
}
