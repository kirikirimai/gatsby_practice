import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../componets/Layout"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
