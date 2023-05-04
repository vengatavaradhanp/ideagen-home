import React, { useState,useEffect } from "react";
import {useLocation} from 'react-router-dom';
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
  import "./css/index.css";
import ReactEcharts from "echarts-for-react";
import { useNavigate } from "react-router-dom";
export default function Analysis(props: any) {
    const location = useLocation();

    const [dataShow , setdataShow] = useState<any>({})

    const [selectedValue, setSelectedValue] = useState<any>(location.state===null?
        "all":location.state.name);
    const navigate = useNavigate();
    // console.log(Object.keys(dataShow));
    // if(Object.keys(dataShow).length === 0){
        

        useEffect(() => {
          setdataShow(location.state || {});
        }, [location.state]);
        // setdataShow(location.state)
// }
    // console.log("loaction",typeof dataShow.selling)
    const allData = [
        { name: "Academy", selling: 32 },
        { name: "Courson", selling: 50 },
        { name: "Huddle", selling: 60 },
        { name: "Pentana", selling: 80 },
        { name: "OpsBase", selling: 65 },
        { name: "PleaseReview", selling: 71 },
        { name: "Q-Pulse*PM", selling: 20 },
        { name: "Q-Pulse*", selling: 40 },
      ];
    console.log("data:",selectedValue)
    const filteredData = selectedValue === "all"? allData : [dataShow];
    const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
            
          },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            
            type: 'category',
            // data: ['Academy', 'Courson', 'Huddle', 'Pentana', 'OpsBase', 'PleaseReview', 'Q-Pulse*','Q-Pulse*PM'],
            // data : [dataShow.name],
            data: filteredData.map((data: any) => data.name),
            axisTick: {
              alignWithLabel: true
            },
           
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '10%',
        
            // data : [parseInt(dataShow.selling)],
            data: filteredData.map((data: any) => parseInt(data.selling)),
            
            // data: [10, 52, 200, 334, 390, 330, 220,50]
          },
          
        ]
      };
  return (
    
    <div>
        <div style={{ padding: "15px 15px 5px 65px" }}>
          <Typography variant="h4">Analysis</Typography>
        </div>
        <div style={{display:"flex",justifyContent:"end",padding:"0px 68px 0px 0px"}} >
                  <TextField
                  style={{width:"20%"}}
                    id="outlined-basic"
                    placeholder="All"
                    value={selectedValue}
                    variant="outlined"
                    select
                    fullWidth
                    onChange={(e) => { setSelectedValue(e.target.value)}}
          >
            <MenuItem value="all">All</MenuItem>
            {allData.map((data: any) => (
            <MenuItem value={data.name}>{data.name}</MenuItem>
            ))} 
        </TextField>
                </div>
        <div style={{height:"500px!important"}}>
        <ReactEcharts option={option} style={{height:"580px"}} />
        </div>
    </div>
  );
}
