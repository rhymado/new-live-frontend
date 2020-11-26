import React from "react";

// React Fragment => <React.Fragment></React.Fragment>
// <> </>

export default function functionComponent({ title }) {
  // Pemanggilan
  // Props => props
  // n.b props dituliskan sebagai parameter

  return (
    <>
      <p className="text-center">{title}</p>
    </>
  );
}
