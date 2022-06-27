import React from "react";

interface ButtonProps {
  text: string;
}

export const Button = ({ text = "Button" }: ButtonProps) => {
  return <button type="button">{text}</button>;
};
