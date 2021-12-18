import DoneIcon from "@mui/icons-material/DoneAllTwoTone";
// Icons
import EditIcon from "@mui/icons-material/EditOutlined";
import RevertIcon from "@mui/icons-material/NotInterestedOutlined";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRowsData } from "./counterActions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "fit-content",
  },
  table: {
    // minWidth: 650,
    maxWidth: 1000,
  },
  selectTableCell: {
    width: 10,
  },
  tableCell: {
    width: 100,
    height: 40,
  },
  input: {
    width: 100,
    height: 40,
  },
}));

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          onChange={(e) => onChange(e, row)}
          className={classes.input}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

export default function MayTable(props) {
  const dispatch = useDispatch();
  const [rows, setRows] = React.useState([]);
  const types2 = useSelector((state) => state.counterReducer.types);

  useEffect(() => {
    setRows(createData(types2));
  }, [types2]);

  const [previous, setPrevious] = React.useState({});
  const classes = useStyles();

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

  const onToggleEditMode = (id, flag) => {
    setRows((state) => {
      return rows.map((row) => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
    if (flag === "done" || flag === "revert") {
      dispatch(setRowsData(rows));
    }
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious((state) => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
    dispatch(setRowsData(newRows));
  };

  const onRevert = (id, flag) => {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious((state) => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id, flag);
  };

  const tt = rows.reduce((a, b) => +a + (+b["amount"] || 0), 0);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left">SN</TableCell>
            <TableCell align="left">Item</TableCell>
            <TableCell align="left">Qty</TableCell>
            <TableCell align="left">Unit</TableCell>
            <TableCell align="left">Price/Unit</TableCell>
            <TableCell align="left">Amount&nbsp;(Rs)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.selectTableCell}>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={() => onToggleEditMode(row.id, "done")}>
                      <DoneIcon />
                    </IconButton>
                    <IconButton
                      aria-label="revert"
                      onClick={() => onRevert(row.id, "revert")}>
                      <RevertIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    aria-label="delete"
                    onClick={() => onToggleEditMode(row.id, "edit")}>
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
              <CustomTableCell {...{ row, name: "num", onChange }} />
              <CustomTableCell {...{ row, name: "name", onChange }} />
              <CustomTableCell {...{ row, name: "quantity", onChange }} />
              <CustomTableCell {...{ row, name: "unit", onChange }} />
              <CustomTableCell {...{ row, name: "priceperunit", onChange }} />
              <CustomTableCell {...{ row, name: "amount", onChange }} />
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={4}>Subtotal</TableCell>
            <TableCell align="right">{tt}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell align="right">{tt}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}
