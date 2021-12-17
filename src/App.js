import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { ToWords } from "to-words";
import Doc from "./DocService";
import { Labels } from "./Labels";
import { PdfContainer } from "./PdfContainer";
import "./style.css";
import MayTable from "./table";

export const App = () => {
  let createPdf = useRef();
  createPdf = (html) => Doc.createPdf(html);
  const toWords = new ToWords();

  const { billName, billAddress, phno, invNum, invDate, rowsData } =
    useSelector((state) => state.counterReducer);

  const cash = rowsData.reduce((a, b) => +a + (+b["amount"] || 0), 0);

  return (
    <React.Fragment>
      <Labels />

      <PdfContainer createPdf={createPdf}>
        <React.Fragment>
          <section className="flex-column">
            <div className="row">
              <div
                style={{
                  float: "left",
                  width: "50%",
                  padding: "10px",
                }}>
                <div
                  style={{
                    fontSize: "x-large",
                    fontWeight: "bold",
                    color: "rgb(13, 44, 90)",
                  }}>
                  KCP FISHERIES
                </div>
                <small>
                  Hazarath syed roshan ali shaa dargah,Marigowdanadoddi,
                  Kanakapura Taluk, Ramanagar-562159
                </small>
                <br />
                <small>Phone no.: 9449794801 </small>
                <br />
                <small>Email: aejazfishkcp@gmail.com</small>
              </div>
              <div className="column">
                <img
                  style={{ width: "100px", height: "100px", float: "right" }}
                  src="https://i.ibb.co/9yKfCmb/KCP-logo.jpg"
                  alt=""
                />
              </div>
            </div>

            <h3
              style={{
                color: "rgb(13, 44, 90)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              Tax Invoice
            </h3>
            <div className="row">
              <div
                style={{
                  float: "left",
                  width: "50%",
                  padding: "10px",
                }}>
                <div style={{ fontSize: "large", fontWeight: "bold" }}>
                  Bill To:
                </div>
                <b>{billName}</b>
                <br />
                <small>{billAddress}</small>
                <br />
                <small>Phone no.: {phno} </small>
              </div>
              <div style={{ float: "right" }}>
                <small>Place of Supply: 29-Karnataka</small>
                <br />
                <small style={{ fontWeight: "bold" }}>
                  Invoice No: {invNum}{" "}
                </small>
                <br />
                <small style={{ fontWeight: "bold" }}>
                  {`Date: ${invDate.getDate()}-${
                    invDate.getMonth() + 1
                  }-${invDate.getFullYear()}`}
                </small>
              </div>
            </div>

            {/* wjenfiwjenfoijkeofik3oirfk */}
            <MayTable />

            {/* jehdbuhenduneudnuenudnue */}
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
                <small className="shade">
                  {`${toWords.convert(cash)} Only`}
                </small>
                <br />
                <br />
                <small className="shade">TERMS AND CONDITIONS</small>
                <br />
                <small className="shade">
                  Thank you for doing business with us.
                </small>
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
                      <b>{cash}</b>
                      <br />
                      <small>{cash}</small>
                      <br />
                      <small>Cash</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      </PdfContainer>
    </React.Fragment>
  );
};
