import {
  SET_BILL_ADD,
  SET_BILL_NAME,
  SET_INV_DATE,
  SET_INV_NUM,
  SET_PHNO,
  SET_ROWS_DATA,
  SET_TOTAL,
  SET_TYPES,
} from "./counterActions";

const initialState = {
  billName: "",
  billAddress: "",
  phno: "",
  invNum: "",
  invDate: new Date(),
  types: 1,
  total: 30000,
  rowsData: [
    {
      id: 0,
      name: "Katla",
      num: "1",
      quantity: 10000,
      unit: "PCS",
      priceperunit: 3,
      amount: 30000,
      isEditMode: false,
    },
  ],
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BILL_ADD:
      return {
        ...state,
        billAddress: action.payload,
      };
    case SET_PHNO:
      return {
        ...state,
        phno: action.payload,
      };
    case SET_INV_NUM:
      return {
        ...state,
        invNum: action.payload,
      };
    case SET_INV_DATE:
      return {
        ...state,
        invDate: action.payload,
      };
    case SET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case SET_BILL_NAME:
      return {
        ...state,
        billName: action.payload,
      };
    case SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case SET_ROWS_DATA:
      return {
        ...state,
        rowsData: action.payload,
      };
    default:
      return state;
  }
};
