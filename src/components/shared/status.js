import React from "react";

const Status = ({ value = "" }) => {
  const bgColor = (value) => {
    switch (value.toLowerCase()) {
      case "completed":
        return "#2e7d32";
      case "manual":
        return "#1976d2";
      case "pending":
        return "#ed6c02";
      default:
        break;
    }
  };
  return (
    <span
      className="rounded-pill status-pill w-clr ft-14"
      style={{ backgroundColor: bgColor(value) }}
    >
      {value}
    </span>
  );
};

export default Status;
