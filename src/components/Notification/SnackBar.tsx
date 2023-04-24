import { Alert, Snackbar } from "@mui/material";
import React, { forwardRef, useImperativeHandle } from "react";

const SnackBar = forwardRef((props: any, ref: any) => {
  const [open, setOpen] = React.useState(false);

  useImperativeHandle(ref, () => ({
    open(status: any) {
      console.log("###", ref);
      setOpen(status);
    },
  }));

  return (
    <div>
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        open={open}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Product Activated!
        </Alert>
      </Snackbar>
    </div>
  );
});

export default SnackBar;
