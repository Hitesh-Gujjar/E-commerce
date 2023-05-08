import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./style.css";

export default function ProductList({ setSelectedProduct, open, setOpen }) {
  const [productLists, setProductLists] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductLists(json));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className=".table-hover"
      >
        <TableHead>
          <TableRow className="" style={{ backgroundColor: "#E7E7E7" }}>
            <TableCell align="left" className="fs-6">
              Titel
            </TableCell>
            <TableCell align="left" className="fs-6">
              Categary
            </TableCell>
            <TableCell align="left" className="fs-6">
              Price
            </TableCell>
            <TableCell align="left" className="fs-6">
              Available Count
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productLists.map((item, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => {
                setSelectedProduct(item);
                setOpen(true)
              }}
            >
              <TableCell align="left">
                <div className="d-flex">
                  <div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="mx-2 image inline-block"
                      style={{ width: "30px", height: "40px" }}
                    />
                  </div>
                  <div style={{ height: "40px", cursor: "pointer" }}>
                    <p className="mx-2">{item.title}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell align="left">{item.category}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{item.rating.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
