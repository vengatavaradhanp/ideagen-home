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
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "450px", // Set your width here
              borderRadius: "15px",
            },
          },
        }}
      >
        <DialogContent>
          <div style={{ padding: "15px 20px" }}>
            <div style={{ fontSize: "22px" }}>
              Do you want to delete this item?
            </div>
            <div style={{ fontSize: "18px", margin: "5px 0px" }}>
              You can't restore it.
            </div>
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
              placeholder={name}
              sx={{
                width: '300px'
              }}
            />
            <div style={{ justifyContent: "center", marginTop: "15px" }}>
              <Button variant="outlined" onClick={handleClose} sx={{ mr: 1 }}  style={{
                  border: "1px solid #1b878f",
                  color: "#1b878f",
                }}>
                Cancel
              </Button>
              <Button
                variant="outlined"
                onClick={handleDelete}
                style={{
                  border: "0px",
                  background: "#0d4347",
                  color: !enable ? "#fff" : "#fff",
                  opacity: enable ? 1 : .8
                }}
                disabled={!enable}
              >
                Delete
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
});

export default DeleteConfirmationPopup;
