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
    const [items, setItems] = useState([]);
    const savedValue: any = JSON.parse(localStorage.getItem('rows') as string);
    const [dataShow , setdataShow] = useState<any>({})
    const [allProducts, setAllProducts] = useState([])
    const [localData, setlocalData] = useState(savedValue)
    const [filter, setFilter] = useState([])
    const [selectedValue, setSelectedValue] = useState<any>("all");
    const navigate = useNavigate();
    // console.log(Object.keys(dataShow));
    // if(Object.keys(dataShow).length === 0){
        console.log("dd",localStorage)
        console.log("sss",location.state==null?"localData":"location.state.row")

        useEffect(() => {
            
          if(location.state && location.state.rowData) {
            setSelectedValue(location.state.rowData.name)
          }
          if(location.state && location.state.row) {
            setAllProducts(location.state.row==undefined?localData:location.state.row)
            setdataShow(location.state.rowData || {});
          }
          
        }, [location.state?.rowData]);
        useEffect(()=>{
            setAllProducts(!location.state?localData:location.state.row)
        },[])
        // setdataShow(location.state)
// }
    // console.log("loaction",typeof dataShow.selling)
    
    
    // console.log("data:",selectedValue)
useEffect(() => {
    const filtered = selectedValue === "all"
      ? allProducts
      : allProducts.filter((item:any) => item.name === selectedValue);
    setFilter(filtered);
  }, [selectedValue, allProducts]);


  
  
  
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
            data: filter.map((data: any) => data.name),
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
            barWidth: '5%',
        
            // data : [parseInt(dataShow.selling)],
            data: filter.map((data: any) => parseInt(data.selling)),
            
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
  value={selectedValue || ""}
  variant="outlined"
  select
  fullWidth
  onChange={(e) => setSelectedValue(e.target.value)}
>

                  
                  <MenuItem value="all">All</MenuItem>
             {allProducts.map((data: any) => (
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
