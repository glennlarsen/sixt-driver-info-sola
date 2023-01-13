import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { BASE_URL, DRIVERFORM1 } from "constants/apiKeys";
import useApi from "utils/useApi";
import MyLoader from "components/MyLoader";
import DeleteDriver from "utils/DeleteDriver";
import AlertMessage from "components/AlertMessage";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#FF5F00",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const FormTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FF5F00",
  },
});

function AnswersForm() {
  const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState("");
  const [deleted, setDeleted] = useState(false);
  const countryRef = useRef(null);
  const streetRef = useRef(null);
  const postalRef = useRef(null);
  const cityRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const [show, setShow] = useState(true);

  const refreshPage = () => {
    navigate(0);
  };

  function copyEmail(e) {
    emailRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied Email!");
    setShow(true);
  }

  function copyPhone(e) {
    phoneRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied Phone Number!");
    setShow(true);
  }

  function copyCity(e) {
    cityRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied City!");
    setShow(true);
  }

  function copyPostal(e) {
    postalRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied Postal Code!");
    setShow(true);
  }

  function copyStreet(e) {
    streetRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied Street!");
    setShow(true);
  }

  function copyCountry(e) {
    countryRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied Country!");
    setShow(true);
  }

  const url = BASE_URL + DRIVERFORM1;
  const { answers, loading, error } = useApi(url);

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete Driver Info",
      message: "Are you sure?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleDelete(id),
        },
        {
          label: "No",
          onClick: () => null,
        },
      ],
    });
  };

  async function handleDelete(id) {
    const deleteDriv = await DeleteDriver(id);
    if (deleteDriv.success) {
      setDeleted(true);
      window.location.reload(true);
    } else {
      setDeleted(false);
    }
  }

  if (loading) {
    return (
      <div className="loaderContainer">
        <MyLoader />
        <span>Loading Answer...</span>
      </div>
    );
  }

  if (error) {
    return <div className="loaderContainer">An error occured!</div>;
  }

  if (answers.length < 1) {
    return (
      <ThemeProvider theme={theme}>
        <Box className="answers-form">
          <div className="no-answers">
            No Answers Yet. Find a customer that can fill your Live Form! Click
            Refresh if the result don't show automatically.
          </div>
          <button onClick={refreshPage} type="submit">
            Refresh
          </button>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <>
      {answers
        .sort((b, a) => a.id - b.id)
        .filter((item, idx) => idx < 1)
        .map((item) => {
          const { country, street, postal, city, phone, email, publishedAt } =
            item.attributes;
          const phoneFormated = phone ? phone.replace(/\s+/g, "") : "";
          var options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          };
          const formatDate = (value, locale = "nb-NO") => {
            return new Date(value).toLocaleDateString(locale, options);
          };

          return (
            <ThemeProvider theme={theme} key={item.id}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                className="answers-form"
              >
                <span className="last-received">
                  <strong>Last Answer: </strong>
                  {answers ? (
                    formatDate(publishedAt)
                  ) : (
                    <div>No answers yet!</div>
                  )}
                </span>
                <Tooltip title="Click to Copy">
                  <FormTextField
                    onClick={copyCountry}
                    InputProps={{
                      readOnly: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            color="primary"
                            sx={{ boxShadow: "none" }}
                          >
                            <ContentCopyIcon
                              sx={{ height: ".8em", width: ".8em" }}
                              onClick={copyCountry}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    label="Country"
                    type="text"
                    defaultValue={country ? country.toUpperCase() : ""}
                    inputRef={countryRef}
                  />
                </Tooltip>
                <Tooltip title="Click to Copy">
                  <FormTextField
                    onClick={copyStreet}
                    InputProps={{
                      readOnly: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            color="primary"
                            sx={{ boxShadow: "none" }}
                          >
                            <ContentCopyIcon
                              sx={{ height: ".8em", width: ".8em" }}
                              onClick={copyStreet}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    label="Street"
                    type="text"
                    defaultValue={street ? street.toUpperCase() : ""}
                    inputRef={streetRef}
                  />
                </Tooltip>
                <Box gap={2} display="flex">
                  <Tooltip title="Click to Copy">
                    <FormTextField
                      onClick={copyPostal}
                      InputProps={{
                        readOnly: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              color="primary"
                              sx={{ boxShadow: "none" }}
                            >
                              <ContentCopyIcon
                                sx={{ height: ".8em", width: ".8em" }}
                                onClick={copyPostal}
                              />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                      label="Postal Code"
                      type="text"
                      defaultValue={postal ? postal.toUpperCase() : ""}
                      inputRef={postalRef}
                    />
                  </Tooltip>
                  <Tooltip title="Click to Copy">
                    <FormTextField
                      onClick={copyCity}
                      InputProps={{
                        readOnly: true,
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              color="primary"
                              sx={{ boxShadow: "none" }}
                            >
                              <ContentCopyIcon
                                sx={{ height: ".8em", width: ".8em" }}
                                onClick={copyCity}
                              />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                      label="City"
                      type="text"
                      fullWidth
                      defaultValue={city ? city.toUpperCase() : ""}
                      inputRef={cityRef}
                    />
                  </Tooltip>
                </Box>
                <Tooltip title="Click to Copy">
                  <FormTextField
                    onClick={copyPhone}
                    InputProps={{
                      readOnly: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            color="primary"
                            sx={{ boxShadow: "none" }}
                          >
                            <ContentCopyIcon
                              sx={{ height: ".8em", width: ".8em" }}
                              onClick={copyPhone}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    label="Phone Number"
                    type="text"
                    value={phoneFormated ? phoneFormated : ""}
                    inputRef={phoneRef}
                  />
                </Tooltip>
                <Tooltip title="Click to Copy">
                  <FormTextField
                    onClick={copyEmail}
                    InputProps={{
                      readOnly: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            color="primary"
                            sx={{ boxShadow: "none" }}
                          >
                            <ContentCopyIcon
                              sx={{ height: ".8em", width: ".8em" }}
                              onClick={copyEmail}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    label="Email"
                    type="email"
                    defaultValue={email ? email.toUpperCase() : ""}
                    inputRef={emailRef}
                  />
                </Tooltip>
                <button onClick={refreshPage} type="submit">
                  Refresh
                </button>
                <span
                  onClick={() => confirmDelete(item.id)}
                  className="btn-reset btn-delete"
                >
                  Delete answer
                </span>
                {copySuccess && show ? (
                  <Collapse in={show}>
                    <Alert
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setShow(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                      severity="success"
                    >
                      {copySuccess}
                    </Alert>
                  </Collapse>
                ) : (
                  <div className="copy-alert"></div>
                )}
                {deleted && (
                  <AlertMessage
                    width="100px"
                    variant="info"
                    title="Deleted"
                    message="Driver Info successfully deleted"
                  />
                )}
              </Box>
            </ThemeProvider>
          );
        })}
    </>
  );
}

export default AnswersForm;
