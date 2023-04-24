import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

class Form extends Component {
  render() {
    return (
      <Box style={{ margin: "0px 120px" }}>
        <div style={{ padding: "15px 0px" }}>
          <Typography variant="h5">Add Product</Typography>
        </div>
        <Paper variant="outlined">
          <Box style={{ padding: "20px" }}>
            <Grid container>
              <Grid item xs={4} style={{ padding: "5px" }}>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    fullWidth
                  />
                </div>
              </Grid>
              <Grid item xs={4} style={{ padding: "5px" }}>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Division"
                    variant="outlined"
                    fullWidth
                  />
                </div>
              </Grid>
              <Grid item xs={4} style={{ padding: "5px" }}>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Status"
                    variant="outlined"
                    select
                    fullWidth
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="Inactive">In Active</MenuItem>
                  </TextField>
                </div>
              </Grid>
              <Grid item xs={4} style={{ padding: "5px" }}>
                {/* <div><Typography  variant="caption" display="block" gutterBottom style={{fontSize: '16px', color: 'grey'}}>Product Icon</Typography></div> */}
                <div>
                  <TextField
                    id="outlined-basic"
                    // label="Published By"
                    variant="outlined"
                    fullWidth
                    type="file"
                  />
                </div>
              </Grid>
              <Grid item xs={4} style={{ padding: "5px" }}>
                <div>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    style={{ width: "100%" }}
                  >
                    <DatePicker />
                  </LocalizationProvider>
                </div>
              </Grid>

              <Grid item xs={4} style={{ padding: "5px" }}>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Published By"
                    variant="outlined"
                    fullWidth
                  />
                </div>
              </Grid>
            </Grid>
            <Divider style={{ margin: "20px 0px" }} />
            <Box style={{ minHeight: "350px" }}>
              <div>
                <Typography variant="h5">Preview</Typography>
              </div>
              <Grid container spacing={0} style={{ marginTop: "25px" }}>
                <Grid item xs={4} style={{ margin: "30px 0px" }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <span style={{ fontWeight: 600 }}>Name</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span style={{ color: "green" }}>Academy</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} style={{ margin: "30px 0px" }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <span style={{ fontWeight: 600 }}>Division</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span style={{ color: "green" }}>
                        Learning Management
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} style={{ margin: "30px 0px" }}></Grid>
                <Grid item xs={4} style={{ margin: "30px 0px" }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <span style={{ fontWeight: 600 }}>Status</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span style={{ color: "green" }}>Active</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} style={{ margin: "30px 0px" }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <span style={{ fontWeight: 600 }}>Icon</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span style={{ color: "green" }}>No_Icon</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} style={{ margin: "30px 0px" }}></Grid>
                <Grid item xs={4} style={{ margin: "30px 0px" }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <span style={{ fontWeight: 600 }}>Published Date</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span style={{ color: "green" }}>06/06/2023</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} style={{ margin: "30px 0px" }}>
                  <Grid container>
                    <Grid item xs={6}>
                      <span style={{ fontWeight: 600 }}>Published By</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span style={{ color: "green" }}>Ideagen</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} style={{ margin: "30px 0px" }}></Grid>
              </Grid>
            </Box>
            <Divider style={{ margin: "20px 0px" }} />
            <div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div style={{ margin: "0px 5px" }}>
                  <Link href="/data-table">
                    <Button
                      variant="outlined"
                      style={{ border: "1px solid #1b878f", color: "#1b878f" }}
                    >
                      Cancel
                    </Button>
                  </Link>
                </div>
                <div style={{ margin: "0px 5px" }}>
                  <Link href="/data-table">
                    <Button
                      variant="contained"
                      style={{
                        border: "1px solid #1b878f",
                        background: "#1b878f",
                      }}
                    >
                      Submit
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Box>
        </Paper>
      </Box>
    );
  }
}

export default Form;
