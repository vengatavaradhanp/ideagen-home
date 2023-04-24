import React from "react";
import { Navigate } from "react-router-dom";
import AppHeader from "../AppLayout/AppHeader";
import AppSidebar from "../AppLayout/AppSidebar";
import { Box } from "@mui/material";

const drawerWidth = 100;

function ProtectedRoute({ isLoggedIn, children }: any) {
  if (!isLoggedIn) {
    return <Navigate to="/error" replace />;
  }
  return (
    <React.Fragment>
      <AppHeader />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          ml: `${drawerWidth}px`,
          mt: 12,
          display: "block",
        }}
      >
        {children}
      </Box>
      <AppSidebar />
    </React.Fragment>
  );
}

export default ProtectedRoute;
