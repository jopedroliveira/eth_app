// https://www.geeksforgeeks.org/how-to-connect-reactjs-with-metamask/
// https://docs.ethers.io/v5/getting-started/#getting-started--connecting

// Importing modules
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
 
  const [address, setAddress] = useState();
  const [balance, setBalance] = useState();
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const btnhandler = async () => {
    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    signer.getAddress().then((res) => {
      setAddress(res);
    })
    .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (address) { getbalance() };
  }, [address]);

  const getbalance = async () => {
    provider.getBalance(address).then((res) => {setBalance(ethers.utils.formatEther(res))});
  };

  return (
    <div className="App">
      <Card className="text-center">
        <Card.Header>
          <strong>Address: </strong>
          {address}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>Balance: </strong>
            {balance}
          </Card.Text>
          <Button onClick={btnhandler} variant="primary">
            Connect to wallet
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
