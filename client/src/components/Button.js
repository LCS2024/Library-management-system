import React from "react";

function Button({
  title,
  variant = "contained",
  type = "button",
  onClick,
  fullWidth = false,
  disabled,
}) {
  // let className = fullWidth ? "w-100 rounded " : "pr-2 pl-2 rounded ";
  // if (variant === "contained" && !disabled) {
  //   className += "bg-" + color + " text-white";
  // } else if (variant === "outlined" && !disabled) {
  //   className += "border-" + color + " text-" + color;
  // }

  // if (disabled) {
  //   className += "disabled-btn";
  // }

  return (
    <button
      style={{
        backgroundColor: "#4651EC",
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        color: "white",
        cursor: "pointer",
      }}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
