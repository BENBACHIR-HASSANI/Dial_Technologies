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
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";
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
const MinistereTransportPage = (props) => {
  const title =
    "Ministère des Equipements et des Transports - Dial Technologies (Dialy)";
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
              <FormattedMessage id="titre_min" />
            </h5>
            <h2 style={{ fontWeight: "bold", marginTop: "20px" }}>
              <FormattedMessage id="h2_min" />
            </h2>
            <p style={{ marginTop: "30px" }}>
              <FormattedMessage id="parag_min" />
            </p>
          </div>
        </div>
      </BackgroundImage>
      <Container>
        <Row>
          <Col lg={7}>
            <h5 style={{ marginTop: "60px" }}>
              <FormattedMessage id="entreprise" />
            </h5>
            <StaticImage
              alt="Ministere Transport"
              src="../images/Ministere_.png"
              style={{
                alignItems: "center",
                marginTop: "20px",
              }}
            />
            <h5 style={{ marginTop: "40px", marginBottom: "35px" }}>
              <FormattedMessage id="besoin" />
            </h5>
            <p className={paragraph}>
              <FormattedMessage id="besoin_parag_min" />
            </p>
            <h5 style={{ marginTop: "40px", marginBottom: "35px" }}>
              Solution
            </h5>
            <p className={paragraph}>
              <FormattedMessage id="solutions_min" />
              <ul style={{ marginTop: "35px" }}>
                <li>
                  <FormattedMessage id="solution1_min" />
                </li>
                <li>
                  <FormattedMessage id="solution2_min" />
                </li>
                <li>
                  <FormattedMessage id="solution3_min" />
                </li>
              </ul>
            </p>
          </Col>
          <Col lg={5} style={{ marginTop: "60px" }}>
            <h5>
              <FormattedMessage id="besoin_form" />
            </h5>
            <Form
              onSubmit={handleSubmit}
              name="Contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="Contact" />
              <Form.Group controlId="name" style={{ marginBottom: "20px" }}>
                <Form.Label
                  style={{
                    color: "#6c757d",
                    marginBottom: "10px",
                    marginTop: "30px",
                  }}
                >
                  <FormattedMessage id="nom" />
                </Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formState.name}
                  style={{ borderRadius: "0px" }}
                />
              </Form.Group>
              <Form.Group controlId="email" style={{ marginBottom: "20px" }}>
                <Form.Label style={{ color: "#6c757d", marginBottom: "10px" }}>
                  Email
                </Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formState.email}
                  style={{ borderRadius: "0px" }}
                />
              </Form.Group>
              <Form.Group
                controlId="telephone"
                style={{ marginBottom: "20px" }}
              >
                <Form.Label style={{ color: "#6c757d", marginBottom: "10px" }}>
                  <FormattedMessage id="telephone" />
                </Form.Label>
                <Form.Control
                  id="telephone"
                  type="text"
                  onChange={handleChange}
                  value={formState.objet}
                  style={{ borderRadius: "0px" }}
                  className={input}
                />
              </Form.Group>
              <Form.Group controlId="message" style={{ marginBottom: "20px" }}>
                <Form.Label style={{ color: "#6c757d", marginBottom: "10px" }}>
                  Message
                </Form.Label>
                <Form.Control
                  id="message"
                  as="textarea"
                  rows="8"
                  name="message"
                  onChange={handleChange}
                  value={formState.besoin}
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
                <FormattedMessage id="envoyer" />
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
          <div className={element}>
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
                <FormattedMessage id="conseil" />
              </h5>
            </Link>
          </div>
          <div className={element}>
            <h4 className="icons" style={{ color: "#00b3b8", float: "left" }}>
              <FontAwesomeIcon icon={"mobile-alt"} />
            </h4>
            <h5
              className={title}
              style={{ marginTop: "50px", marginLeft: "-115px", float: "left" }}
            >
              <FormattedMessage id="mobile" />
            </h5>
          </div>
          <div className={element}>
            <h4 className="icons" style={{ color: "#00b3b8", float: "left" }}>
              <FontAwesomeIcon icon={"desktop"} />
            </h4>
            <h5
              className={title}
              style={{ marginTop: "50px", marginLeft: "-115px", float: "left" }}
            >
              <FormattedMessage id="web" />
            </h5>
          </div>
        </div>
      </div>
      <div>
        <StaticImage
          src="../images/Ma-Route-Ministere_1.png"
          alt="Ma-Route-Ministere screen shot 1"
          style={{
            marginLeft: "250px",
            width: "154px",
            marginTop: "60px",
            marginBottom: "90px",
            marginRight: "30px",
          }}
        />
        <StaticImage
          src="../images/Ma-Route-Ministere_2.png"
          alt="Ma-Route-Ministere screen shot 2"
          style={{ width: "154px", marginTop: "60px", marginRight: "30px" }}
        />
        <StaticImage
          src="../images/Ma-Route-Ministere_3.png"
          alt="Ma-Route-Ministere screen shot 3"
          style={{ marginTop: "60px", marginRight: "30px", width: "154px" }}
        />
        <StaticImage
          src="../images/Ma-Route-Ministere_4.png"
          alt="Ma-Route-Ministere screen shot 4"
          style={{ marginTop: "60px", marginRight: "30px", width: "154px" }}
        />
      </div>
    </Layout>
  );
};
// Step 3: Export your component
export default injectIntl(MinistereTransportPage);
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
