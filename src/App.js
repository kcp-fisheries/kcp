import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { ToWords } from "to-words";
import Doc from "./DocService";
import { Labels } from "./Labels";
import { PdfContainer } from "./PdfContainer";
import "./style.css";
import MayTable from "./table";

const sigUrl = `data:image/png;base64,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`;

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

                      <img alt="signature-aejaz" src={sigUrl}></img>
                      <div>Authorized Sign</div>
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
