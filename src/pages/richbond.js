// Step 1: Import your component
import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { useState } from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import BackgroundImage from "gatsby-background-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/font-awesome";
import {
  backgroundImageCompany,
  blackOverlay,
  contentBox,
  paragraph,
  input,
  elements,
  element,
  title,
} from "../components/layout.module.css";

// Step 2: Define your component
const RichbondPage = (props) => {
  const title = "Richbond - Dial Technologies (Dialy)";
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };
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
              Richbond
            </h5>
            <h2 style={{ fontWeight: "bold", marginTop: "20px" }}>
              Applications Mobiles Métiers
            </h2>
            <p style={{ marginTop: "30px" }}>
              Applications de gestion pour les métiers de vente et de
              recouvrement de Richbond, permettant aux clients de suivre leurs
              commandes et aux représentants de l’entreprise d’assurer le suivi
              des recouvrements
            </p>
          </div>
        </div>
      </BackgroundImage>
      <Container>
        <Row>
          <Col lg={7}>
            <h5 style={{ marginTop: "60px" }}>Entreprise</h5>
            <StaticImage
              alt="Richbond"
              src="../images/Richbond-1.png"
              style={{
                alignItems: "center",
                marginTop: "20px",
              }}
            />
            <h5 style={{ marginTop: "40px", marginBottom: "35px" }}>Besoin</h5>
            <p className={paragraph}>
              Richbond avait pour objectif la mise en place de deux applications
              mobiles: Une application destinée à ses clients qui leur permet de
              suivre leurs commandes et une seconde destinée à ses representants
              pour le suivi des recouvrements.
            </p>
            <h5 style={{ marginTop: "40px", marginBottom: "35px" }}>
              Solution
            </h5>
            <p className={paragraph}>
              Nous avons répondu au besoin de Richbond en assurant les missions
              qui suivent:
              <ul style={{ marginTop: "35px" }}>
                <li>Développement des applications sous Android</li>
                <li>Design des applications</li>
                <li>Développement du backoffice</li>
              </ul>
            </p>
          </Col>
          <Col lg={5} style={{ marginTop: "60px" }}>
            <h5>Besoin d'un projet similaire?</h5>
            <Form
              onSubmit={handleSubmit}
              name="Contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="Contact" />
              <Form.Group
                controlId="name"
                style={{ marginTop: "30px", marginBottom: "30px" }}
              >
                <Form.Control
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formState.name}
                  placeholder="Nom ou raison social*"
                  style={{ borderRadius: "0px" }}
                  className={input}
                />
              </Form.Group>
              <Form.Group controlId="email" style={{ marginBottom: "30px" }}>
                <Form.Control
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formState.email}
                  placeholder="Email*"
                  style={{ borderRadius: "0px" }}
                  className={input}
                />
              </Form.Group>
              <Form.Group
                controlId="telephone"
                style={{ marginBottom: "30px" }}
              >
                <Form.Control
                  id="telephone"
                  type="text"
                  name="telephone"
                  onChange={handleChange}
                  value={formState.objet}
                  placeholder="Téléphone"
                  style={{ borderRadius: "0px" }}
                  className={input}
                />
              </Form.Group>
              <Form.Group controlId="message" style={{ marginBottom: "30px" }}>
                <Form.Control
                  id="message"
                  as="textarea"
                  rows="8"
                  name="message"
                  onChange={handleChange}
                  value={formState.besoin}
                  placeholder="Message"
                  style={{ borderRadius: "0px" }}
                  className={input}
                />
              </Form.Group>
              <Button
                type="submit"
                style={{
                  marginBottom: "50px",
                  width: "110px",
                  backgroundColor: "#A5B800",
                  height: "60px",
                  borderRadius: "2px",
                  border: "0px solid white",
                }}
              >
                Envoyer
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          height: "300px",
          backgroundColor: "#F4F7FF",
          width: "1519px",
          marginLeft: "-152px",
          marginTop: "30px",
        }}
      >
        <div className={elements}>
          <div className={element} style={{ marginLeft: "-75px" }}>
            <h4 className="icons" style={{ color: "#00b3b8", float: "left" }}>
              <FontAwesomeIcon icon={"lightbulb"} />
            </h4>
            <Link to="#strategy">
              <h6
                className={title}
                style={{
                  marginTop: "50px",
                  marginLeft: "-100px",
                  float: "left",
                  color: "#393838",
                }}
              >
                CONSEIL EN STRATEGIE
              </h6>
            </Link>
          </div>
          <div className={element} style={{ marginLeft: "150px" }}>
            <h4 className="icons" style={{ color: "#00b3b8", float: "left" }}>
              <FontAwesomeIcon icon={"mobile-alt"} />
            </h4>
            <h6
              className={title}
              style={{ marginTop: "50px", marginLeft: "-105px", float: "left" }}
            >
              DÉVELOPPEMENT MOBILE
            </h6>
          </div>
        </div>
      </div>
      <div>
        <StaticImage
          src="../images/Richbond1.png"
          alt="Richbond screen shot 1"
          style={{
            marginLeft: "250px",
            width: "160px",
            marginTop: "60px",
            marginBottom: "90px",
            marginRight: "30px",
          }}
        />
        <StaticImage
          src="../images/Richbond2.png"
          alt="Richbond screen shot 2"
          style={{ width: "160px", marginTop: "60px", marginRight: "30px" }}
        />
        <StaticImage
          src="../images/Richbond3.png"
          alt="Richbond screen shot 3"
          style={{ marginTop: "60px", marginRight: "30px", width: "160px" }}
        />
        <StaticImage
          src="../images/Richbond4.png"
          alt="Richbond screen shot 4"
          style={{ marginTop: "60px", marginRight: "30px", width: "160px" }}
        />
        <StaticImage
          src="../images/Richbond5.png"
          alt="Richbond screen shot 5"
          style={{
            marginLeft: "250px",
            width: "160px",
            marginBottom: "80px",
            marginRight: "30px",
          }}
        />
        <StaticImage
          src="../images/Richbond6.png"
          alt="Richbond screen shot 6"
          style={{ width: "160px", marginRight: "30px" }}
        />
        <StaticImage
          src="../images/Richbond7.png"
          alt="Richbond screen shot 7"
          style={{ marginRight: "30px", width: "160px" }}
        />
      </div>
    </Layout>
  );
};
// Step 3: Export your component
export default RichbondPage;
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
