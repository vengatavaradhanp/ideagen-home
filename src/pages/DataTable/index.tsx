import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Analysis from "../Analysis";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Drawer,
  Grid,
  Link,
  MenuItem,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import "./css/index.css";
import SnackBar from "../../components/Notification/SnackBar";
import DeleteConfirmationPopup from "../../components/DeleteConfirmationPopup";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/ReduxHook";
import { fetchProduct } from "../../actions/product/ProductSlice";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CenterFocusStrong, Search } from "@mui/icons-material";
import AppLoader from "../../components/AppLayout/AppLoader";
import { toast } from "react-toastify";
function createData(
  id: number,
  name: string,
  division: string,
  status: number,
  selling: string,
  published_date: string,
  published_by: string
) {
  return { id, name, division, status, selling, published_date, published_by };
}

const rows = [
  createData(
    1,
    "Academy",
    "Learning Management",
    1,
    "32%",
    "2 April, 2023",
    "Ideagen"
  ),
  createData(
    2,
    "Courson",
    "Risk Management",
    1,
    "50%",
    "3 April, 2023",
    "Ideagen"
  ),
  createData(
    3,
    "Huddle",
    "Collboration Management",
    1,
    "60%",
    "6 April, 2023",
    "Ideagen"
  ),
  createData(
    4,
    "Pentana",
    "Audit Management",
    1,
    "80%",
    "6 April, 2023",
    "Ideagen"
  ),
  createData(
    5,
    "OpsBase",
    "Process Management",
    1,
    "65%",
    "9 April, 2023",
    "Ideagen"
  ),
  createData(
    6,
    "PleaseReview",
    "Document Management",
    0,
    "71%",
    "10 April, 2023",
    "Q Pulse"
  ),
  createData(
    7,
    "Q-Pulse*",
    "Quality Management",
    1,
    "20%",
    "11 April, 2023",
    "Q Pulse"
  ),
  createData(
    8,
    "Q-Pulse*PM",
    "Complaiance Management",
    1,
    "40%",
    "12 April, 2023",
    "Ideagen"
  ),
];


const drawerWidth = 500;

export default function DataTable(props: any) {
  const [data, setData] = React.useState<any>(rows);
  const snackBarRef: any = React.useRef();
  const confirmPopup: any = React.useRef();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state: any) => state.products);
  const [openForm, setOpenForm] = React.useState(false);
  const drawerWidth = 500;
  const [loader, setLoader] = useState(true);

  const [details, setDetails] = useState({
    name: "",
    Division: "",
    status: 0,
    fileUpload: "",
    DatePicker: null,
    publishedBy: "",
  });

  

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  useEffect(() => {
    setLoader(products.loading);
  }, []);
 
  const handleNavigation=(rowData:any)=>{
    navigate('/analysis', {state:{ rowData:rowData , row: rows}});
      }
      
  
  const handleSubmit = (e: any) => {
    console.log(details);
    setOpenForm(!openForm);
  };

  const handleDateChange = (e: any) => {
    setDetails((prev) => {
      return { ...prev, DatePicker: e };
    });
  };

  const handleChange = (e: any) => {
    setDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <Box className="containerBox">
      <AppLoader state={loader} />
      <Drawer
        anchor="right"
        open={openForm}
        onClose={() => setOpenForm(!openForm)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#fff",
            // borderRadius: "0px 0px 60px 0px",
            border: "0px",
            boxShadow: "none",
          },
        }}
      >
        <div>
          <Typography variant="h6" margin={"15px"}>
            Add Product
          </Typography>
        </div>
        <div>
          <Grid container>
            <Grid item xs={10} margin={"15px 15px 0px 15px"}>
              <Typography variant="subtitle1" gutterBottom>
                Name
              </Typography>
              <div>
                <TextField
                  id="outlined-basic"
                  placeholder="Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  onChange={handleChange}
                />
              </div>
            </Grid>

            <Grid item xs={10} margin={"15px 15px 0px 15px"}>
              <Typography variant="subtitle1" gutterBottom>
                Division
              </Typography>
              <div>
                <TextField
                  id="outlined-basic"
                  placeholder="Division"
                  variant="outlined"
                  fullWidth
                  name="Division"
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={10} margin={"15px 15px 0px 15px"}>
              <Typography variant="subtitle1" gutterBottom>
                Status
              </Typography>
              <div>
                <TextField
                  id="outlined-basic"
                  placeholder="Status"
                  variant="outlined"
                  select
                  fullWidth
                  name="status"
                  onChange={handleChange}
                >
                  <MenuItem value={0}>Active</MenuItem>
                  <MenuItem value={1}>In Active</MenuItem>
                </TextField>
              </div>
            </Grid>
            <Grid item xs={10} margin={"15px 15px 0px 15px"}>
              {/* <div><Typography  variant="caption" display="block" gutterBottom style={{fontSize: '16px', color: 'grey'}}>Product Icon</Typography></div> */}
              <Typography variant="subtitle1" gutterBottom>
                File Upload
              </Typography>
              <div>
                <TextField
                  id="outlined-basic"
                  placeholder="File Upload"
                  variant="outlined"
                  fullWidth
                  type="file"
                  name="fileUpload"
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={10} margin={"15px 15px 0px 15px"}>
              <Typography variant="subtitle1" gutterBottom>
                Published Date
              </Typography>
              <div>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  style={{ width: "100%" }}
                >
                  <DatePicker
                    value={details.DatePicker}
                    onChange={handleDateChange}
                  />
                </LocalizationProvider>
              </div>
            </Grid>

            <Grid item xs={10} margin={"15px 15px 0px 15px"}>
              <Typography variant="subtitle1" gutterBottom>
                Published By
              </Typography>
              <div>
                <TextField
                  id="outlined-basic"
                  placeholder="Published By"
                  variant="outlined"
                  fullWidth
                  name="publishedBy"
                  onChange={handleChange}
                />
              </div>
            </Grid>
          </Grid>
          <Divider style={{ margin: "30px 0px" }} />
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Button
                onClick={() => setOpenForm(!openForm)}
                variant="outlined"
                style={{
                  border: "1px solid #1b878f",
                  background: "#fff",
                  color: "#1b878f",
                }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={handleSubmit}
                variant="contained"
                style={{
                  border: "1px solid #1b878f",
                  background: "#1b878f",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </Drawer>
      <div className="containerHeading">
        <div>
          <Typography variant="h6" className="headingText">
            Product List
          </Typography>
        </div>
        <div>
          <Button variant="outlined" onClick={() => setOpenForm(!openForm)}>
            Add Product
          </Button>
        </div>
      </div>
      <div>
        <Grid container justifyContent="flex-end">
          <Grid item xs={3} id="searchField">
            <TextField
              variant="standard"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <TableContainer component={Paper} className="tableContainer">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Division</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Selling</TableCell>
                <TableCell align="center">Published Date</TableCell>
                <TableCell align="center">Published By</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row: any, index: any) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.division}</TableCell>
                  <TableCell align="center">
                    {row.status === 1 ? (
                      <Button
                        className="activeBtn"
                        variant="contained"
                        size="small"
                        color="success"
                        onClick={() => {
                          const records = [...data];
                          records[index].status = 0;
                          setData(records);
                          toast(`${row.name} is Inactive`);
                        }}
                      >
                        Active
                      </Button>
                    ) : (
                      <Button
                        className="inActiveBtn"
                        variant="contained"
                        size="small"
                        color="error"
                        onClick={() => {
                          const records = [...data];
                          records[index].status = 1;
                          setData(records);
                          toast(`${row.name} is Active`);
                        }}
                      >
                        Inactive
                      </Button>
                    )}
                  </TableCell>
                  <TableCell align="center">{row.selling}</TableCell>
                  <TableCell align="center">{row.published_date}</TableCell>
                  <TableCell align="center">{row.published_by}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleNavigation(row)}>
                      <VisibilityIcon color="warning" />
                    </IconButton>
                    <IconButton onClick={() => setOpenForm(!openForm)}>
                      <EditIcon color="action" />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        confirmPopup.current.handleClickOpen(true, row.name)
                      }
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="paginationBlock">
          <Pagination
            count={8}
            color="primary"
            variant="outlined"
            shape="rounded"
          />
        </div>
        <div>
          <SnackBar ref={snackBarRef} />
          <DeleteConfirmationPopup ref={confirmPopup} />
        </div>
      </div>
    </Box>
  );
}
