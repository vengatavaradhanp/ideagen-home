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
    const [dataShow , setdataShow] = useState<any>({})
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(Object.keys(dataShow));
    // if(Object.keys(dataShow).length === 0){
        useEffect(() => {
            setdataShow(location.state);
          }, []);
        // setdataShow(location.state)
// }
    // console.log("loaction",typeof dataShow.selling)
    const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
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
            data : [dataShow.name],
            axisTick: {
              alignWithLabel: true
            }
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
            barWidth: '5%',
        
            data : [parseInt(dataShow.selling)],
            
            // data: [10, 52, 200, 334, 390, 330, 220,50]
          }
          
        ]
      };
  return (
    
    <div>
        <div style={{ padding: "15px 0px" }}>
          <Typography variant="h4">Analysis</Typography>
        </div>
        <div>
        <select style={{width:"200px",height:"25px"}} >
        <option value="All">All</option>
        <option value="Iphone">Academy</option>
        <option value="Samsung">Courson</option>
        <option value="Oneplus">Oneplus</option>
        <option value="Oneplus">Huddle</option>
        <option value="Oneplus">Pentana</option>
        <option value="Oneplus">OpsBase</option>
        <option value="Oneplus">PleaseReview</option>
        <option value="Oneplus">Q-Pulse*</option>
        <option value="Oneplus">Q-Pulse*PM</option>
      </select>
      </div>
        <div style={{height:"500px!important"}}>
        <ReactEcharts option={option} style={{height:"580px"}} />
        </div>
    </div>
  );
}
