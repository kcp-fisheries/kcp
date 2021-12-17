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
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBillAddress,
  setBillName,
  setInvoiceDate,
  setInvoiceNumber,
  setPhoneNumber,
  setRowsData,
  setTypesOfFish,
} from "./counterActions";

const createData = (t) => {
  let arr = [];
  for (let i = 0; i < t; i++) {
    arr.push({
      id: i,
      name: "Katla",
      num: "1",
      quantity: 10000,
      unit: "PCS",
      priceperunit: 3,
      amount: 30000,
      isEditMode: false,
    });
  }

  return arr;
};

export const Labels = () => {
  const dispatch = useDispatch();

  const { billName, billAddress, phno, invNum, invDate, types } = useSelector(
    (state) => state.counterReducer
  );

  const onBillNameChange = (e) => {
    dispatch(setBillName(e.target.value));
  };

  const onBillAddressChange = (e) => {
    dispatch(setBillAddress(e.target.value));
  };

  const onPhnoChange = (e) => {
    dispatch(setPhoneNumber(e.target.value));
  };

  const onInvNumChange = (e) => {
    dispatch(setInvoiceNumber(e.target.value));
  };

  const handleDateChange = (e) => {
    dispatch(setInvoiceDate(e));
  };

  const handleChangeTypes = (e) => {
    dispatch(setTypesOfFish(e.target.value));
    dispatch(setRowsData(createData(e.target.value)));
  };
  return (
    <>
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
            value={billName}
            onChange={onBillNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Billing Address"
            variant="outlined"
            value={billAddress}
            onChange={onBillAddressChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            value={phno}
            onChange={onPhnoChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Invoice Number"
            variant="outlined"
            value={invNum}
            onChange={onInvNumChange}
          />
        </Grid>

        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <MobileDatePicker
                label="Date of Invoice"
                inputFormat="MM/dd/yyyy"
                value={invDate}
                onChange={handleDateChange}
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
              value={types}
              label="Number of Types of Fishes"
              onChange={handleChangeTypes}>
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={4}>Four</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};
