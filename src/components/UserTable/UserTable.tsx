import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
// import { Link } from "react-router-dom";

export type UserTableData = {
  id: number;
  username: string;
  created_at: string;
  role: "admin" | "user";
};

interface IUserTableProps {
  tableData: UserTableData[];
  tableHeaders: string[];
}

const UserTable: React.FC<IUserTableProps> = ({ tableData, tableHeaders }) => {
  return (
    <TableContainer
      component={Box}
      sx={{ width: "100%", overflowX: "auto", padding: "8px 16px" }}
    >
      <Table
        sx={{
          minWidth: 650,
          borderCollapse: "separate",
          borderSpacing: "0 10px",
        }}
        aria-label="support table"
      >
        <TableHead
          sx={{
            border: "none",
            color: "#878787",
            fontSize: "12px",
            padding: "16px 0",
            borderRadius: "8px",
          }}
        >
          <TableRow sx={{ width: "100%" }}>
            {tableHeaders.map((tableHeader, index) => {
              return (
                <TableCell key={index} align="left">
                  {tableHeader}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((data) => (
            <TableRow
              key={data.id}
              sx={{
                outline: "1px solid #BFCBE1",
                borderRadius: "12px",
                "&:last-child td, &:last-child th": { border: 0 },
                "& > *": {
                  padding: "12px",
                },
              }}
            >
              <TableCell component="th" scope="row" align="left">
                {data.id}
              </TableCell>
              <TableCell align="left">{data.username}</TableCell>
              <TableCell align="left">{data.created_at}</TableCell>
              <TableCell align="left">{data.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
