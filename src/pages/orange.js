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
const OrangePage = (props) => {
  const title = "Orange (Meditel) - Dial Technologies (Dialy)";
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
              <FormattedMessage id="titre_orange" />
            </h5>
            <h2 style={{ fontWeight: "bold", marginTop: "20px" }}>
              <FormattedMessage id="h2_orange" />
            </h2>
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
              alt="Orange"
              src="../images/oranges_.png"
              style={{
                alignItems: "center",
                marginTop: "20px",
              }}
            />
            <h5 style={{ marginTop: "40px", marginBottom: "35px" }}>
              <FormattedMessage id="besoin" />
            </h5>
            <p className={paragraph}>
              <FormattedMessage id="besoin_parag_orange" />
            </p>
            <h5 style={{ marginTop: "40px", marginBottom: "35px" }}>
              Solution
            </h5>
            <p className={paragraph}>
              <FormattedMessage id="solutions_orange" />

              <ul style={{ marginTop: "35px" }}>
                <li>
                  <FormattedMessage id="solution1_orange" />
                </li>
                <li>
                  <FormattedMessage id="solution2_orange" />
                </li>
                <li>
                  <FormattedMessage id="solution3_orange" />
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
        <div className={elements} style={{ marginLeft: "150px" }}>
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
            <h4
              className="icons"
              style={{ color: "#00b3b8", float: "left", marginLeft: "-55px" }}
            >
              <FontAwesomeIcon icon={"mobile-alt"} />
            </h4>
            <h5
              className={title}
              style={{ marginTop: "50px", marginLeft: "-115px", float: "left" }}
            >
              <FormattedMessage id="sms" />
            </h5>
          </div>
          <div className={element} style={{ marginLeft: "-100px" }}>
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
          <div
            className={element}
            style={{ marginLeft: "1000px", marginTop: "-135px" }}
          >
            <h4 className="icons" style={{ color: "#00b3b8", float: "left" }}>
              <FontAwesomeIcon icon={"edit"} />
            </h4>
            <h5
              className={title}
              style={{ marginTop: "50px", marginLeft: "-115px", float: "left" }}
            >
              <FormattedMessage id="contenu" />
            </h5>
          </div>
        </div>
      </div>
      <div>
        <StaticImage
          src="../images/Orange_1.png"
          alt="Orange screen shot 1"
          style={{
            marginLeft: "200px",
            width: "300px",
            marginTop: "60px",
            marginBottom: "90px",
            marginRight: "200px",
          }}
        />
        <StaticImage
          src="../images/Orange_2.png"
          alt="Orange screen shot 2"
          style={{ marginTop: "60px", marginRight: "30px", width: "300px" }}
        />
      </div>
    </Layout>
  );
};
// Step 3: Export your component
export default injectIntl(OrangePage);
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
