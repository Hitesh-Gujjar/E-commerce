import React, { Children } from "react";
import Button from "@mui/material/Button";
import cartIcon from "./Icon/CartIcon.png";
function PrimaryButton({ title, icon }) {
  const getIcon = (icon) => {
    switch (icon) {
      case "cart":
        return <img src={cartIcon} alt="hii"></img>;
    }
  };
  // console.log("Children",icon)
  return (
    <Button variant="contained" color="secondary" className="mx-2">
      <div className="d-flex pt-1">
        {icon && <div className="mx-2 pt-1">{getIcon(icon)}</div>}
        <h3> {title}</h3>
      </div>
    </Button>
  );
}

export default PrimaryButton;
