import React from "react";

interface ButtonProps {
  text: string;
  disabled?: boolean;
}

export const MyButton = ({ text = "Button", disabled }: ButtonProps) => {
  return <button type="button">{text}{disabled}</button>;
};
