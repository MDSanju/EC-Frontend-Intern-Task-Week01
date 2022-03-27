import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import "./ContactForm.css";

const ContactForm = () => {
  const workingStatus = [
    { label: "Unemployed" },
    { label: "Working" },
    { label: "Student" },
    { label: "Retired" },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [contactInfo, setContactInfo] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...contactInfo };
    newInfo[field] = value;
    setContactInfo(newInfo);
  };

  const handleContactSubmit = (e) => {
    // contact list data
    const contactList = {
      ...contactInfo,
      DoLiketoCode: true,
      Secret: "sanjucad",
    };

    // console.log(contactList);

    fetch("https://intern-api.engineerscradle.com/api/ft/task1/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contactList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          handleClickOpen();
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{"Contact Us!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            We will contact you soon. Thank you!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>OK</Button>
        </DialogActions>
      </Dialog>
      ;
      <div className="contact-form-page">
        <img
          src="https://i.ibb.co/QDnrHty/Contact-Us-Vector-Illustration-Part-02-1.jpg"
          className="contact-form-img"
          alt=""
        />
        <div className="form-card">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src="https://i.ibb.co/PZq24Fk/png-transparent-eventloop-service-information-machining-marketing-contact-us-miscellaneous-blue-text.png"
              style={{ width: "40%" }}
              alt=""
            />
            <br />
            <br />
            <form onSubmit={handleContactSubmit}>
              <TextField
                id="outlined-textarea"
                label="Full Name"
                name="Name"
                placeholder="John Doe"
                multiline
                onBlur={handleOnBlur}
                sx={{ width: "300px" }}
                required
              />
              <br />
              <br />
              <TextField
                type="email"
                id="outlined-textarea"
                label="Email"
                name="Email"
                placeholder="Example@gmail.com"
                multiline
                onBlur={handleOnBlur}
                sx={{ width: "300px" }}
                required
              />
              <br />
              <br />
              <TextField
                id="outlined-textarea"
                label="Your Address"
                name="Address"
                placeholder="RE: to appear when you..."
                multiline
                onBlur={handleOnBlur}
                sx={{ width: "300px" }}
                required
              />
              <br />
              <br />

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={workingStatus}
                sx={{ width: "300px" }}
                onBlur={handleOnBlur}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="--Select One--"
                    name="JobStatus"
                    required
                  />
                )}
              />

              <br />
              <Button
                type="submit"
                variant="contained"
                sx={{ float: "right" }}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
