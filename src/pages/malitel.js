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
const MalitelPage = (props) => {
  const title = "Malitel - Dial Technologies (Dialy)";
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
              Malitel
            </h5>
            <h2 style={{ fontWeight: "bold", marginTop: "20px" }}>
              Application Mobile pour les Services Malitel
            </h2>
            <p style={{ marginTop: "30px" }}>
              Application mobile pour les clients mobiles de Malitel permettant
              d’avoir accès à ses produits et services.
            </p>
          </div>
        </div>
      </BackgroundImage>
      <Container>
        <Row>
          <Col lg={7}>
            <h5 style={{ marginTop: "60px" }}>Entreprise</h5>
            <StaticImage
              alt="Malitel"
              src="../images/Malitel.png"
              style={{
                width: "150px",
                alignItems: "center",
                marginTop: "20px",
              }}
            />
            <h5 style={{ marginTop: "40px", marginBottom: "35px" }}>Besoin</h5>
            <p className={paragraph}>
              SOTELMA a voulu proposer à ses clients une application mobile
              self-service sur Android et iOS qui lui permet de vulgariser ses
              produits et services tout en y incluant la composante des réseaux
              sociaux
            </p>
            <h5 style={{ marginTop: "40px", marginBottom: "35px" }}>
              Solution
            </h5>
            <p className={paragraph}>
              En réponse à ce besoin nous avons assuré pour Malitel:
              <ul style={{ marginTop: "35px" }}>
                <li>Développement de l’application sous Android et iOS</li>
                <li>
                  Design de l’application en respectant la charte graphique de
                  Malitel
                </li>
                <li>Développement du CMS</li>
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
              <h5
                className={title}
                style={{
                  marginTop: "50px",
                  marginLeft: "-110px",
                  float: "left",
                  color: "#393838",
                }}
              >
                CONSEIL EN STRATEGIE
              </h5>
            </Link>
          </div>
          <div className={element} style={{ marginLeft: "150px" }}>
            <h4 className="icons" style={{ color: "#00b3b8", float: "left" }}>
              <FontAwesomeIcon icon={"mobile-alt"} />
            </h4>
            <h5
              className={title}
              style={{ marginTop: "50px", marginLeft: "-115px", float: "left" }}
            >
              DÉVELOPPEMENT MOBILE
            </h5>
          </div>
        </div>
      </div>
      <div>
        <StaticImage
          src="../images/Malitel1.png"
          alt="Malitel screen shot 1"
          style={{
            marginLeft: "250px",
            width: "160px",
            marginTop: "60px",
            marginBottom: "90px",
            marginRight: "30px",
          }}
        />
        <StaticImage
          src="../images/Malitel2.png"
          alt="Malitel screen shot 2"
          style={{ width: "160px", marginTop: "60px", marginRight: "30px" }}
        />
        <StaticImage
          src="../images/Malitel3.png"
          alt="Malitel screen shot 2"
          style={{ marginTop: "60px", marginRight: "30px", width: "160px" }}
        />
        <StaticImage
          src="../images/Malitel4.png"
          alt="Malitel screen shot 2"
          style={{ marginTop: "60px", marginRight: "30px", width: "160px" }}
        />
      </div>
    </Layout>
  );
};
// Step 3: Export your component
export default MalitelPage;
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
