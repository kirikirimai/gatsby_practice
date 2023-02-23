import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { css, Global } from "@emotion/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Global styles={globalBody} /> */}

      <div css={wrapper}>
        <Header />
        <main >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

const globalBody = css`
  html{
    height: 100%;
  }
  body {
    margin: 0;
    height: 100%;
  }
`;

const wrapper = css`
  width: 100%;
  max-width: 980px;
  margin: auto;
  height: 100%;
`;


export default Layout;
