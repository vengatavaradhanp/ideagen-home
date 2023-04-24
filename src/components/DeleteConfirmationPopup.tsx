import React, { forwardRef, useImperativeHandle } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { DialogTitle } from "@mui/material";
import { toast } from "react-toastify";

const DeleteConfirmationPopup = forwardRef((props: any, ref: any) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [enable, setEnable] = React.useState(false);

  useImperativeHandle(ref, () => ({
    handleClickOpen(status: any, name: any) {
      console.log("###", ref);
      setOpen(status);
      setName(name);
    },
  }));

  const handleClose = () => {
    setOpen(false);
    setEnable(false);
  };

  const handleDelete = () => {
    if (enable) {
      handleClose();
      toast(`${name} is deleted successfully`);
    }
  };

  const handleConfirm = (e: any) => {
    setEnable(name === e.target.value);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        style={{ textAlign: "center", borderRadius: "10px" }}
      >
        <DialogContent>
          <DialogTitle style={{ padding: "12px 30px" }}>
            Do you want to delete this item?
          </DialogTitle>
          <p style={{ fontWeight: "bold", margin: "2px", fontSize: "18px" }}>
            You can't restore it.
          </p>
          <DialogContentText style={{ fontStyle: "bold", margin: "2px" }}>
            Note: Enter <b>"{name}"</b> to Confirm
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="confirm"
            type="text"
            variant="outlined"
            size="small"
            onChange={handleConfirm}
          />
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="outlined"
            onClick={handleDelete}
            style={{
              // border: "1px solid rgb(27, 135, 143)",
              background: !enable ? "#80808091" : "rgb(27, 135, 143)",
              color: !enable ? "#fff" : "#fff",
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default DeleteConfirmationPopup;
