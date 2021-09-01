// Step 1: Import React
import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { graphql, Link } from "gatsby";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
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
} from "../components/layout.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../utils/font-awesome";

// Step 2: Define your component
const IndexPage = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    objet: "",
    besoin: "",
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
        <Container>
          <Row>
            <Col lg={6} style={{ marginLeft: "25%" }}>
              <Form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <Form.Group controlId="name" style={{ marginBottom: "30px" }}>
                  <Form.Control
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formState.name}
                    placeholder="Nom ou raison social"
                  />
                </Form.Group>
                <Form.Group controlId="email" style={{ marginBottom: "30px" }}>
                  <Form.Control
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formState.email}
                    placeholder="Email"
                  />
                </Form.Group>
                <Form.Group controlId="objet" style={{ marginBottom: "30px" }}>
                  <Form.Control
                    id="objet"
                    type="text"
                    name="objet"
                    onChange={handleChange}
                    value={formState.objet}
                    placeholder="Objet"
                  />
                </Form.Group>
                <Form.Group controlId="besoin" style={{ marginBottom: "30px" }}>
                  <Form.Control
                    id="besoin"
                    as="textarea"
                    rows="8"
                    name="besoin"
                    onChange={handleChange}
                    value={formState.besoin}
                    placeholder="Exprimez votre besoin ..."
                  />
                </Form.Group>
                <Button
                  type="submit"
                  style={{
                    marginBottom: "50px",
                    width: "200px",
                    marginLeft: "200px",
                  }}
                >
                  ENVOYER
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
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
