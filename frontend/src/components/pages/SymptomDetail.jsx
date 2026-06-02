import React from "react";
import { useParams } from "react-router-dom";

function SymptomDetail() {
  const { name } = useParams();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Symptom: {name}</h1>
      <p>Here you can show details, suggestions, or AI results.</p>
    </div>
  );
}

export default SymptomDetail;
