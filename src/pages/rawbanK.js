// Step 1: Import your component
import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import "../utils/font-awesome";
import {
  backgroundImageCompany,
  blackOverlay,
  contentBox,
} from "../components/layout.module.css";

// Step 2: Define your component
const RawbankPage = (props) => {
  const title = "RAWBANK - Dial Technologies (Dialy)";
  return (
    <Layout>
      <Helmet defaultTitle="Dial Technologies (Dialy)" title={title} />
      <Link to="/">
        <StaticImage
          alt="Logo Dial Technologies"
          src="../images/logo.png"
          id="strategy"
        />
      </Link>
      <BackgroundImage
        fluid={props.data.indexImage.childImageSharp.fluid}
        fadeIn
        className={backgroundImageCompany}
      >
        <div className={blackOverlay}>
          <div className={contentBox}>
            <h5
              style={{
                color: "#3f4d96",
                fontWeight: "bold",
                fontStyle: "italic",
                textShadow: "1px 1px #3f4d96",
              }}
            >
              S2M
            </h5>
            <h2 style={{ fontWeight: "bold", marginTop: "20px" }}>
              Design & UI de l’Application Rawbank
            </h2>
          </div>
        </div>
      </BackgroundImage>

      <StaticImage
        src="../images/RAWBank1.png"
        alt="RAWBank screen shot 1"
        style={{
          marginLeft: "250px",
          width: "158px",
          marginTop: "60px",
          marginBottom: "90px",
          marginRight: "30px",
        }}
      />
      <StaticImage
        src="../images/RAWBank2.png"
        alt="RAWBank screen shot 2"
        style={{ width: "158px", marginTop: "60px", marginRight: "30px" }}
      />
      <StaticImage
        src="../images/RAWBank3.png"
        alt="RAWBank screen shot 3"
        style={{ marginTop: "60px", marginRight: "30px", width: "158px" }}
      />
      <StaticImage
        src="../images/RAWBank4.png"
        alt="RAWBank screen shot 4"
        style={{ marginTop: "60px", marginRight: "30px", width: "158px" }}
      />
    </Layout>
  );
};
// Step 3: Export your component
export default RawbankPage;
export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "lumiere.png" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
