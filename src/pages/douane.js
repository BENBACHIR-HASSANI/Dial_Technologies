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
const DouanePage = (props) => {
  const title =
    "Administration des Douanes et Impôts Indirects - Dial Technologies (Dialy)";
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
              Administration des Douanes et Impôts Indirects
            </h5>
            <h2 style={{ fontWeight: "bold", marginTop: "20px" }}>
              Développement d'une Application Mobile pour les Agents Douaniers
            </h2>
          </div>
        </div>
      </BackgroundImage>
      <StaticImage
        src="../images/Douane1.png"
        alt="Douane screen shot 1"
        style={{
          marginLeft: "200px",
          width: "300px",
          marginTop: "60px",
          marginBottom: "90px",
          marginRight: "200px",
        }}
      />
      <StaticImage
        src="../images/Douane2.png"
        alt="Douane screen shot 2"
        style={{ marginTop: "60px", marginRight: "30px", width: "300px" }}
      />
    </Layout>
  );
};
// Step 3: Export your component
export default DouanePage;
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
