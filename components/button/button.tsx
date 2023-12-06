"use client";

import React, { useState, useEffect } from "react";
import styles from "../button/button.module.scss";
import Image from "next/image";
import icon_sprite from "../../assets/icon/icon_sprite.png";
//import Icon from '../icon/icon';

type ButtonProps = {
  label: string;
  size?: string; // small, big
  fillStyle?: string; // fillin, outlined
  colorStyle?: string; // gray, green, red
  iconType?: string;
  iconState?: boolean;
  disabled?: boolean;
  customStyle?: React.CSSProperties;
  onClick?(): any;
};

const Button = ({
  label,
  onClick,
  size = "small",
  fillStyle = "outlined",
  colorStyle = "gray",
  iconType,
  customStyle,
}: ButtonProps) => {
  return (
    <div
      style={customStyle ? customStyle : undefined}
      onClick={onClick}
      className={`${styles.default_style} ${styles[size]} ${
        styles[fillStyle + "_" + colorStyle]
      }`}
    >
      {/* {iconType && <Icon iconType={iconType} />} */}
      {label}
    </div>
  );
};

export default Button;
