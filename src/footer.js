import React from "react";

export default function Footer() {
  return (
    <div className="row">
      <div
        style={{
          float: "left",
          width: "35%",
          padding: "10px",
        }}>
        <div
          className="shade"
          style={{ fontSize: "large", fontWeight: "bold" }}>
          INVOICE AMOUNT IN WORDS
        </div>
        <small className="shade">Thirty Thousand Rupees Only</small>
        <br />
        <br />
        <small className="shade">TERMS AND CONDITIONS</small>
        <br />
        <small className="shade">Thank you for doing business with us.</small>
      </div>
      <div style={{ float: "right" }}>
        <div>
          <div className="row">
            <div
              style={{
                float: "left",
                width: "50%",
                padding: "10px",
              }}>
              <b>Total</b>
              <br />
              <small>Received</small>
              <br />
              <small>
                Payment Mode &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </small>
              <br />
            </div>
            <div style={{ paddingTop: "10px" }}>
              <b>30000</b>
              <br />
              <small>30000</small>
              <br />
              <small>Cash</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
