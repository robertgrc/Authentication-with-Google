import React from "react";
import "./Header.css";

import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left"></div>
      <MenuIcon fontSize="large" />
      <img
        className="logo"
        src="https://media.istockphoto.com/vectors/internet-url-or-web-page-url-link-line-art-icon-for-apps-and-websites-vector-id1226097607"
        alt="logo"
      />
      <div className="header__menu">
        <h3>Home</h3>
        <h3>
          Quick Menu
          <span>
            <ExpandMoreIcon />
          </span>
        </h3>
      </div>
      <div className="header__right">
        <div className="header__button">
          <Box
            marginRight="2rem"
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="filled-basic" label="Filled" variant="filled" />
          </Box>
        </div>
        <AccountBoxIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Header;
