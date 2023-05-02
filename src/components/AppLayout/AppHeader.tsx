import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/icons/Ideagen.svg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import { IconButton } from "@mui/material";
import "./css/app-layout.css";
import { useNavigate } from "react-router-dom";

function AppHeader() {
  const navigate = useNavigate()
  return (
    <Box className="appHeader">
      <CssBaseline />
      <AppBar position="fixed" className="appBar">
        <Toolbar>
          <div className="toolBarArea">
            <Box className="toolBarBox">
              <IconButton color="inherit" className="toolBarIconButton" onClick={() => navigate('/')}>
                <HomeOutlinedIcon className="toolBarIcon" />
              </IconButton>
              <IconButton color="inherit" className="toolBarIconButton"  onClick={() => navigate('/data-table')}>
                <BarChartOutlinedIcon className="toolBarIcon" />
              </IconButton>
              <IconButton color="inherit" className="toolBarIconButton">
                <InvertColorsOutlinedIcon className="toolBarIcon" />
              </IconButton>
              <IconButton color="inherit" className="toolBarIconButton">
                <HandshakeOutlinedIcon className="toolBarIcon" />
              </IconButton>
              <IconButton color="inherit" className="toolBarIconButton">
                <PeopleAltOutlinedIcon className="toolBarIcon" />
              </IconButton>
            </Box>
            <Box className="toolBarLogo">
              <img
                src={logo}
                className="logoImage"
                alt="no_image"
              />
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
