export const SET_BILL_NAME = "SET_BILL_NAME";
export const SET_BILL_ADD = "SET_BILL_ADD";
export const SET_INV_NUM = "SET_INV_NUM";
export const SET_INV_DATE = "SET_INV_DATE";
export const SET_PHNO = "SET_PHNO";
export const SET_TYPES = "SET_TYPES";
export const SET_TOTAL = "SET_TOTAL";
export const SET_ROWS_DATA = "SET_ROWS_DATA";

export const setBillName = (payload) => ({
  type: SET_BILL_NAME,
  payload,
});

export const setBillAddress = (payload) => ({
  type: SET_BILL_ADD,
  payload,
});

export const setInvoiceNumber = (payload) => ({
  type: SET_INV_NUM,
  payload,
});

export const setInvoiceDate = (payload) => ({
  type: SET_INV_DATE,
  payload,
});

export const setPhoneNumber = (payload) => ({
  type: SET_PHNO,
  payload,
});

export const setTypesOfFish = (payload) => ({
  type: SET_TYPES,
  payload,
});

export const setTotal = (payload) => ({
  type: SET_TOTAL,
  payload,
});

export const setRowsData = (payload) => ({
  type: SET_ROWS_DATA,
  payload,
});
