import React from "react";
import Drawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import "./css/app-layout.css";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

const drawerWidth = 90;

export default function AppSidebar() {
  const navigate = useNavigate();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#304254",
          borderRadius: "0px 0px 60px 0px",
          border: "0px",
          boxShadow: "none",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <div className="drawerMainBlock">
        <div className="drawerGrid">
          <div className="drawerGridBlock">
            <div className="drawerIconBlock">
              <IconButton onClick={() => navigate("/")}>
                <HomeOutlinedIcon className="drawerIcon" />
              </IconButton>
            </div>
            <div className="drawerIconBlock">
              <IconButton onClick={() => navigate("/data-table")}>
                <BarChartOutlinedIcon className="drawerIcon" />
              </IconButton>
            </div>
            <div className="drawerIconBlock">
              <IconButton>
                <InvertColorsOutlinedIcon className="drawerIcon" />
              </IconButton>
            </div>
            <div className="drawerIconBlock">
              <IconButton>
                <HandshakeOutlinedIcon className="drawerIcon" />
              </IconButton>
            </div>
            <div className="drawerIconBlock">
              <IconButton>
                <PeopleAltOutlinedIcon className="drawerIcon" />
              </IconButton>
            </div>
          </div>

          <div className="drawerIconBlock drawerIconEndBlock">
            <IconButton onClick={() => navigate("/error")}>
              <QuestionMarkOutlinedIcon className="drawerIcon" />
            </IconButton>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
