// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { graphql } from "gatsby";
import {
  titre,
  tech,
  subtitle,
  items,
  item,
  title,
  text,
  backgroundImage,
  blackOverlay,
  contentBox,
  statistic,
  statistics,
  open_form,
} from "../components/layout.module.css";
import { Link } from "gatsby";

// Step 2: Define your component
const IndexPage = (props) => {
  return (
    <Layout pageTitle="Home Page">
      <Link to="/">
        <StaticImage alt="Logo Dial Technologies" src="../images/logo.png" />
      </Link>
      <div className={tech}>
        <StaticImage alt="Technologies" src="../images/tech.jpg" />
      </div>
      <div id="services">
        <p className={titre}>Nos Services</p>
        <p className={subtitle}>
          Assurez votre transformation digitale de bout en bout
        </p>
        <div className={items}>
          <div className={item}>
            <StaticImage
              alt="Messagerie"
              src="../images/message.png"
              style={{ width: "30px" }}
            />
            <p className={title}>Messagerie</p>
            <p className={text}>
              Plus de proximité avec vos clients à travers une messagerie 360
            </p>
          </div>
          <div className={item}>
            <StaticImage
              alt="Messagerie"
              src="../images/send.png"
              style={{ width: "30px" }}
            />
            <p className={title}>Transformation Digitale</p>
            <p className={text}>
              Mieux prendre le virage du digital à travers nos nombreuses offres
            </p>
          </div>
          <div className={item}>
            <StaticImage
              alt="Messagerie"
              src="../images/settings.png"
              style={{ width: "30px" }}
            />
            <p className={title}>Intelligence Artificielle</p>
            <p className={text}>
              Développez des produits et des solutions axés sur l’IA
            </p>
          </div>
          <div className={item}>
            <StaticImage
              alt="Messagerie"
              src="../images/smartphone.png"
              style={{ width: "30px" }}
            />
            <p className={title}>Solutions de mobilité</p>
            <p className={text}>
              Restez en contact avec vos collaborateurs & clients
            </p>
          </div>
        </div>
        <div>
          <BackgroundImage
            fluid={props.data.indexImage.childImageSharp.fluid}
            fadeIn
            className={backgroundImage}
          >
            <div className={blackOverlay}>
              <div className={contentBox}>
                <h3>Quelques faits</h3>
                <h5>
                  Une expertise approuvée et une relation cordiale avec nos
                  clients
                </h5>
                <div className={statistics}>
                  <div className={statistic}>
                    <StaticImage
                      alt="cup of coffee"
                      src="../images/coffee.png"
                      style={{ width: "40px" }}
                    />
                    <h3>Tasses de café</h3>
                    <h1>986</h1>
                  </div>
                  <div className={statistic}>
                    <StaticImage
                      alt="Projects"
                      src="../images/star.png"
                      style={{ width: "40px" }}
                    />
                    <h3>Projets</h3>
                    <h1>723</h1>
                  </div>
                  <div className={statistic}>
                    <StaticImage
                      alt="Trophy"
                      src="../images/trophy.png"
                      style={{ width: "40px" }}
                    />
                    <h3>Réconpenses</h3>
                    <h1>7</h1>
                  </div>
                  <div className={statistic}>
                    <StaticImage
                      alt="colaborate"
                      src="../images/people.png"
                      style={{ width: "40px" }}
                    />
                    <h3>Collaborateurs</h3>
                    <h1>43</h1>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundImage>
        </div>
      </div>
      <div id="clients">
        <p className={titre}>Nos Clients</p>
        <p className={subtitle}>
          Soyez les prochains à bénéficier de notre expertise
        </p>
        <table
          style={{
            width: "1228px",
            height: "1228px",
          }}
        >
          <tr style={{ height: "16.66%", border: "1px solid gray" }}>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="ANAPEC"
                src="../images/ANAPEC.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="AUSIM"
                src="../images/AUSIM.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="chaabiLLD"
                src="../images/chaabiLLD-logo.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="CNRA"
                src="../images/CNRA.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
          </tr>
          <tr style={{ height: "16.66%", border: "1px solid gray" }}>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="Cooper"
                src="../images/Cooper.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="DGI"
                src="../images/DGI.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="Douane"
                src="../images/Douane.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="Gabon-Telecom"
                src="../images/Gabon-Telecom-Logo.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
          </tr>
          <tr style={{ height: "16.66%", border: "1px solid gray" }}>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="INWI"
                src="../images/INWI.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="ANRT"
                src="../images/logo-ANRT.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="carrefour"
                src="../images/logo-carrefour.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="LOGOCMR"
                src="../images/LOGOCMR-01-1.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
          </tr>
          <tr style={{ height: "16.66%", border: "1px solid gray" }}>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="Malitel"
                src="../images/Malitel.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="Marocaine-Vie"
                src="../images/Marocaine-Vie.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="Ministere-Transport"
                src="../images/Ministere-Transport.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="Moov-Togo"
                src="../images/Moov-Togo-Logo.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
          </tr>
          <tr style={{ height: "16.66%", border: "1px solid gray" }}>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="Orange"
                src="../images/Orange.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="PG"
                src="../images/PG.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="Rawbank"
                src="../images/Rawbank.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="RCAR"
                src="../images/RCAR.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
          </tr>
          <tr style={{ height: "16.66%", border: "1px solid gray" }}>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="Richbond"
                src="../images/Richbond-1.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="RMA-Watanya"
                src="../images/RMA-Watanya-Logo.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="SAIC"
                src="../images/SAIC-Logo.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <StaticImage
                alt="Wafa-Assurance"
                src="../images/Wafa-Assurance.png"
                style={{
                  width: "140px",
                  alignItems: "center",
                  marginLeft: "80px",
                }}
              />
            </td>
          </tr>
        </table>
      </div>
      <div id="contact">
        <p className={titre}>Passez à l'Action</p>
        <p className={subtitle}>
          Programmons un meeting pour discuter votre projet
        </p>
        <button className={open_form} id="open_form">
          Soumettre votre demande
        </button>
        <form
          className="form contact-form"
          method="POST"
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div className="form-row">
            <label htmlFor="name">Nom ou raison social</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="form-row">
            <label htmlFor="objet">Objet</label>
            <input type="text" name="objet" id="objet" />
          </div>
          <div className="form-row">
            <label htmlFor="besoin">Exprimez votre besoin ...</label>
            <textarea type="text" name="besoin" id="besoin"></textarea>
          </div>
          <button type="submit" className="btn block">
            ENVOYER
          </button>
        </form>
      </div>
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "teamWork.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
