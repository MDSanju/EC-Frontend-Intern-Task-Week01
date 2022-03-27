import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ContactLists.css";

const ContactLists = () => {
  const navigate = useNavigate();
  const [contactLists, setContactLists] = useState({});
  console.log(contactLists);

  useEffect(() => {
    fetch("https://intern-api.engineerscradle.com/api/ft/task2/view/sanjucad", {
      headers: {
        authorization: "v3p42mqQDWrg9j4gvbTrxT808n30vr5483",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          //   navigate("/");
        }
      })
      .then((data) => setContactLists(data));
  }, []);

  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }

  const rows = [
    createData("Frozen yoghurt", "example@gmail", "32/ 6.0", "Student"),
    createData("Ice cream sandwich", "example@gmail", "32/ 9.0", "Student"),
    createData("Eclair", "example@gmail", "32/16.0", "Student"),
    createData("Cupcake", "example@gmail", "32/ 3.7", "Student"),
    createData("Gingerbread", "example@gmail", "32/16.0", "Student"),
    createData("Gingerbread", "example@gmail", "32/16.0", "Student"),
    createData("Gingerbread", "example@gmail", "32/16.0", "Student"),
    createData("Gingerbread", "example@gmail", "32/16.0", "Student"),
  ];

  return (
    <div className="form-lists-page">
      <TableContainer component={Paper} sx={{ margin: "20px 25px" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#ef4444" }}>NAME</TableCell>
              <TableCell sx={{ color: "#ef4444" }} align="right">
                GMAIL
              </TableCell>
              <TableCell sx={{ color: "#ef4444" }} align="right">
                ADDRESS
              </TableCell>
              <TableCell sx={{ color: "#ef4444" }} align="right">
                JOB
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="form-bg">
        <img
          src="https://i.ibb.co/p3b6SR8/blog-single-platform-backup-recovery-hero-banner.png"
          alt=""
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default ContactLists;
