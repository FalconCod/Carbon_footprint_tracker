import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function EmissionList({ emissions }) {
  return (
    <div className="container">
      {emissions.length === 0 ? (
        <p>No emissions recorded yet.</p>
      ) : (
        emissions.map((emission, index) => (
          <Card key={index}>
            <CardContent>
              <p><strong>Entity:</strong> {emission.entity}</p>
              <p><strong>Carbon Emitted:</strong> {emission.carbonEmitted} kg</p>
              <p><strong>Timestamp:</strong> {new Date(emission.timestamp * 1000).toLocaleString()}</p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
