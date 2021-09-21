// Step 1: Import React
import * as React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { graphql, Link } from "gatsby";
import { Form, Button, Row, Col } from "react-bootstrap";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";
import {
  titre,
  tech,
  subtitle,
  items,
  item,
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
  const title = "Dial Technologies (Dialy)";
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
    <Layout>
      <Helmet defaultTitle="Dial Technologies (Dialy)" title={title} />
      <Link to="/">
        <StaticImage alt="Logo Dial Technologies" src="../images/logo.png" />
      </Link>
      <div className={tech}>
        <StaticImage alt="Technologies" src="../images/tech.jpg" />
      </div>
      <div id="services">
        <p className={titre}>
          <FormattedMessage id="Nos_services" />
        </p>
        <p className={subtitle}>
          <FormattedMessage id="Nos_services_details" />
        </p>
        <div className={items}>
          <div className={item}>
            <StaticImage
              alt="Messagerie"
              src="../images/message.png"
              style={{ width: "30px" }}
            />
            <p className={title}>
              <FormattedMessage id="Messagerie" />
            </p>
            <p className={text}>
              <FormattedMessage id="Messagerie_details" />
            </p>
          </div>
          <div className={item}>
            <StaticImage
              alt="Messagerie"
              src="../images/send.png"
              style={{ width: "30px" }}
            />
            <p className={title}>
              <FormattedMessage id="Transformation_digitale" />
            </p>
            <p className={text}>
              <FormattedMessage id="Transformation_digitale_details" />
            </p>
          </div>
          <div className={item}>
            <StaticImage
              alt="Messagerie"
              src="../images/settings.png"
              style={{ width: "30px" }}
            />
            <p className={title}>
              <FormattedMessage id="Intelligence_artificielle" />
            </p>
            <p className={text}>
              <FormattedMessage id="Intelligence_artificielle_details" />
            </p>
          </div>
          <div className={item}>
            <StaticImage
              alt="Messagerie"
              src="../images/smartphone.png"
              style={{ width: "30px" }}
            />
            <p className={title}>
              <FormattedMessage id="Solutions_mobilité" />
            </p>
            <p className={text}>
              <FormattedMessage id="Solutions_mobilité_details" />
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
                <h3>
                  <FormattedMessage id="Quelques_faits" />
                </h3>
                <h5>
                  <FormattedMessage id="Quelques_faits_details" />
                </h5>
                <div className={statistics}>
                  <div className={statistic}>
                    <StaticImage
                      alt="cup of coffee"
                      src="../images/coffee.png"
                      style={{ width: "40px" }}
                    />
                    <h3>
                      <FormattedMessage id="TassesCafé" />
                    </h3>
                    <h1>986</h1>
                  </div>
                  <div className={statistic}>
                    <StaticImage
                      alt="Projects"
                      src="../images/star.png"
                      style={{ width: "40px" }}
                    />
                    <h3>
                      <FormattedMessage id="Projets" />
                    </h3>
                    <h1>723</h1>
                  </div>
                  <div className={statistic}>
                    <StaticImage
                      alt="Trophy"
                      src="../images/trophy.png"
                      style={{ width: "40px" }}
                    />
                    <h3>
                      <FormattedMessage id="Réconpenses" />
                    </h3>
                    <h1>7</h1>
                  </div>
                  <div className={statistic}>
                    <StaticImage
                      alt="colaborate"
                      src="../images/people.png"
                      style={{ width: "40px" }}
                    />
                    <h3>
                      <FormattedMessage id="Collaborateurs" />
                    </h3>
                    <h1>43</h1>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundImage>
        </div>
      </div>
      <div id="clients">
        <p className={titre}>
          <FormattedMessage id="Nos_clients" />
        </p>
        <p className={subtitle}>
          <FormattedMessage id="Nos_clients_details" />
        </p>
        <table
          style={{
            width: "1228px",
            height: "1228px",
          }}
        >
          <tr style={{ height: "16.66%", border: "1px solid gray" }}>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <Link to="/anapecCompany">
                <StaticImage
                  alt="ANAPEC"
                  src="../images/ANAPEC.png"
                  style={{
                    width: "140px",
                    alignItems: "center",
                    marginLeft: "80px",
                  }}
                />
              </Link>
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <Link to="/ausim">
                <StaticImage
                  alt="AUSIM"
                  src="../images/AUSIM.png"
                  style={{
                    width: "140px",
                    alignItems: "center",
                    marginLeft: "80px",
                  }}
                />
              </Link>
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
              <Link to="/cnra">
                <StaticImage
                  alt="CNRA"
                  src="../images/CNRA.png"
                  style={{
                    width: "140px",
                    alignItems: "center",
                    marginLeft: "80px",
                  }}
                />
              </Link>
            </td>
          </tr>
          <tr style={{ height: "16.66%", border: "1px solid gray" }}>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <Link to="/cooper">
                <StaticImage
                  alt="Cooper"
                  src="../images/Cooper.png"
                  style={{
                    width: "140px",
                    alignItems: "center",
                    marginLeft: "80px",
                  }}
                />
              </Link>
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
              <Link to="/douane">
                <StaticImage
                  alt="Douane"
                  src="../images/Douane.png"
                  style={{
                    width: "140px",
                    alignItems: "center",
                    marginLeft: "80px",
                  }}
                />
              </Link>
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
              <Link to="/inwi">
                <StaticImage
                  alt="INWI"
                  src="../images/INWI.png"
                  style={{
                    width: "140px",
                    alignItems: "center",
                    marginLeft: "80px",
                  }}
                />
              </Link>
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
              <Link to="/malitel">
                <StaticImage
                  alt="Malitel"
                  src="../images/Malitel.png"
                  style={{
                    width: "140px",
                    alignItems: "center",
                    marginLeft: "80px",
                  }}
                />
              </Link>
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <Link to="/marocaineVie">
                <StaticImage
                  alt="Marocaine-Vie"
                  src="../images/Marocaine-Vie.png"
                  style={{
                    width: "140px",
                    alignItems: "center",
                    marginLeft: "80px",
                  }}
                />
              </Link>
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <Link to="/ministreTransport">
                <StaticImage
                  alt="Ministere-Transport"
                  src="../images/Ministere-Transport.png"
                  style={{
                    width: "140px",
                    alignItems: "center",
                    marginLeft: "80px",
                  }}
                />
              </Link>
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
              <Link to="/orange">
                <StaticImage
                  alt="Orange"
                  src="../images/Orange.png"
                  style={{
                    width: "140px",
                    alignItems: "center",
                    marginLeft: "80px",
                  }}
                />
              </Link>
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <Link to="/pg">
                <StaticImage
                  alt="PG"
                  src="../images/PG.png"
                  style={{
                    width: "140px",
                    alignItems: "center",
                    marginLeft: "80px",
                  }}
                />
              </Link>
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <Link to="/rawbanK">
                <StaticImage
                  alt="Rawbank"
                  src="../images/Rawbank.png"
                  style={{
                    width: "140px",
                    alignItems: "center",
                    marginLeft: "80px",
                  }}
                />
              </Link>
            </td>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <Link to="/rcar">
                <StaticImage
                  alt="RCAR"
                  src="../images/RCAR.png"
                  style={{
                    width: "140px",
                    alignItems: "center",
                    marginLeft: "80px",
                  }}
                />
              </Link>
            </td>
          </tr>
          <tr style={{ height: "16.66%", border: "1px solid gray" }}>
            <td style={{ width: "25%", border: "1px solid gray" }}>
              <Link to="/richbond">
                <StaticImage
                  alt="Richbond"
                  src="../images/Richbond-1.png"
                  style={{
                    width: "140px",
                    alignItems: "center",
                    marginLeft: "80px",
                  }}
                />
              </Link>
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
              <Link to="/wafaAssurance">
                <StaticImage
                  alt="Wafa-Assurance"
                  src="../images/Wafa-Assurance.png"
                  style={{
                    width: "140px",
                    alignItems: "center",
                    marginLeft: "80px",
                  }}
                />
              </Link>
            </td>
          </tr>
        </table>
      </div>
      <div id="contact">
        <p className={titre}>
          <FormattedMessage id="Passez_action" />
          Passez à l'Action
        </p>
        <p className={subtitle}>
          <FormattedMessage id="Passez_action_details" />
        </p>

        <Row>
          <Col lg={6} style={{ marginLeft: "25%" }}>
            <Form
              onSubmit={handleSubmit}
              name="Contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="Contact" />
              <Form.Group controlId="name" style={{ marginBottom: "30px" }}>
                <Form.Control
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formState.name}
                  placeholder="Nom ou raison social"
                  style={{ borderRadius: "0px" }}
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
                  style={{ borderRadius: "0px" }}
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
                  style={{ borderRadius: "0px" }}
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
                  style={{ borderRadius: "0px" }}
                />
              </Form.Group>
              <Button
                type="submit"
                style={{
                  marginBottom: "50px",
                  width: "200px",
                  marginLeft: "200px",
                  borderRadius: "0px",
                  backgroundColor: "#A5B800",
                  border: "0px solid white",
                }}
              >
                <FormattedMessage id="envoyer" />
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allContentfulEntry(filter: { node_locale: { eq: "$locale" } }) {
      nodes {
        contentful_id
      }
    }

    indexImage: file(relativePath: { eq: "teamWork.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

// Step 3: Export your component
export default injectIntl(IndexPage);
