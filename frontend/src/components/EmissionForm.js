import React, { useState } from "react";
import "../styles/styles.css";
import { Button } from "@/components/ui/button";

export default function EmissionForm({ contract, account, fetchEmissions }) {
  const [entity, setEntity] = useState("");
  const [carbonEmitted, setCarbonEmitted] = useState("");

  const recordEmission = async () => {
    if (contract && entity && carbonEmitted) {
      await contract.methods.recordEmission(entity, carbonEmitted).send({ from: account });
      fetchEmissions();
      setEntity("");
      setCarbonEmitted("");
    }
  };

  return (
    <div className="container">
      <input type="text" placeholder="Entity" value={entity} onChange={(e) => setEntity(e.target.value)} />
      <input type="number" placeholder="Carbon Emitted" value={carbonEmitted} onChange={(e) => setCarbonEmitted(e.target.value)} />
      <Button onClick={recordEmission}>Record Emission</Button>
    </div>
  );
}
