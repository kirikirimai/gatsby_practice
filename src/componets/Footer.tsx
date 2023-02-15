import React from "react";
import { css } from "@emotion/react";

const Footer = () => {
  return <div css={footer}>Footer</div>;
};

const footer = css`
  padding-top: 30px;
  border-top: 2px solid #ccc;
  position: sticky;
  top: 100vh;
  width: 100%;
`;
export default Footer;
