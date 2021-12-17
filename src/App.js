import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import AppBar from "@mui/material/AppBar";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { Component } from "react";
import { ToWords } from "to-words";
import Doc from "./DocService";
import PdfContainer from "./PdfContainer";
import "./style.css";
import MayTable from "./table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billName: "",
      billAddress: "",
      phno: "",
      invNum: "",
      date: "",
      date2: new Date(),
      total: 30000,
      types: 1,
    };
  }
  createPdf = (html) => Doc.createPdf(html);

  onBillNameChange = (e) => {
    this.setState({ billName: e.target.value });
  };

  handleChange = (event) => {
    this.setState({ types: event.target.value });
  };
  onBillAddressChange = (e) => {
    this.setState({ billAddress: e.target.value });
  };
  onPhnoChange = (e) => {
    this.setState({ phno: e.target.value });
  };
  onInvNumChange = (e) => {
    this.setState({ invNum: e.target.value });
  };
  onDateChange = (e) => {
    this.setState({ date: e.target.value });
  };
  handleDateChange = (e) => {
    this.setState({ date2: e });
  };
  getTotal = (t) => {
    this.setState({ total: t });
  };

  render() {
    const toWords = new ToWords();

    return (
      <React.Fragment>
        <AppBar
          style={{
            backgroundColor: "rgb(13, 44, 90)",
            alignItems: "center",
          }}
          position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              KCP FISHERIES
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              color="primary"
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Billing Name"
              variant="outlined"
              value={this.state.billName}
              onChange={(e) => this.onBillNameChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Billing Address"
              variant="outlined"
              value={this.state.billAddress}
              onChange={(e) => this.onBillAddressChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              value={this.state.phno}
              onChange={(e) => this.onPhnoChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Invoice Number"
              variant="outlined"
              value={this.state.invNum}
              onChange={(e) => this.onInvNumChange(e)}
            />
          </Grid>

          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <MobileDatePicker
                  label="Date of Invoice"
                  inputFormat="MM/dd/yyyy"
                  value={this.state.date2}
                  onChange={(val) => this.handleDateChange(val)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Number of Types of Fishes
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.types}
                label="Number of Types of Fishes"
                onChange={this.handleChange}>
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
                <MenuItem value={4}>Four</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <PdfContainer createPdf={this.createPdf}>
          <React.Fragment>
            <section className="flex-column">
              <div class="row">
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
                <div class="column">
                  <img
                    style={{ width: "100px", height: "100px", float: "right" }}
                    src="https://i.ibb.co/9yKfCmb/KCP-logo.jpg"
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
              {/* jnjwemnfjmefokmeokfmokfmrokmfokemfo,mofm,eo,okm,foem,oemrf */}
              <div class="row">
                <div
                  style={{
                    float: "left",
                    width: "50%",
                    padding: "10px",
                  }}>
                  <div style={{ fontSize: "large", fontWeight: "bold" }}>
                    Bill To:
                  </div>
                  <b>{this.state.billName.toUpperCase()}</b>
                  <br />
                  <small>{this.state.billAddress}</small>
                  <br />
                  <small>Phone no.: {this.state.phno} </small>
                </div>
                <div style={{ float: "right" }}>
                  <small>Place of Supply: 29-Karnataka</small>
                  <br />
                  <small style={{ fontWeight: "bold" }}>
                    Invoice No: {this.state.invNum}{" "}
                  </small>
                  <br />
                  <small style={{ fontWeight: "bold" }}>
                    {`Date: ${this.state.date2.getDate()}-${
                      this.state.date2.getMonth() + 1
                    }-${this.state.date2.getFullYear()}`}
                  </small>
                </div>
              </div>

              {/* wjenfiwjenfoijkeofik3oirfk */}
              <MayTable
                getTotal={this.getTotal}
                typesCount={this.state.types}
              />

              {/* jehdbuhenduneudnuenudnue */}
              <div class="row">
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
                    {`${toWords.convert(this.state.total)} Only`}
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
                    <div class="row">
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
                          Payment Mode
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </small>
                        <br />
                      </div>
                      <div style={{ paddingTop: "10px" }}>
                        <b>{this.state.total}</b>
                        <br />
                        <small>{this.state.total}</small>
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
  }
}
export default App;
