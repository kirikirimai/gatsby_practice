import React from 'react'
import Layout from '../componets/Layout'

import {css} from "@emotion/react";
import imgGatsby1 from "../images/img_gatsby1.jpg"
import { StaticImage } from "gatsby-plugin-image"


const imageDisp = () => {
  return (
    <Layout>
    <h1>画像のテスト</h1>
    <hr/>
    <h2>import して画像を読み込む</h2>
    <img css={imgWidthS} src={imgGatsby1} />

    <hr/>
    <h2>staticフォルダから呼び出す</h2>
    <img src='/img_gatsby2.jpg' width="50%" />

    <hr/>
    <h2>Gatsby Imageのプラグインを使用</h2>
    <StaticImage src="../images/img_gatsby3.jpg" alt="gatsbyimage" placeholder='blurred' />
    </Layout>
  )
}

const imgWidthS=css`
width: 30%;
`
export default imageDisp