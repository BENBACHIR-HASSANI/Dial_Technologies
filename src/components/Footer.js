import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "../utils/font-awesome";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#282828",
        color: "#B5B5B5",
        width: "  1519px",
        marginLeft: "-152px",
        height: "450px",
        marginBottom: "0px",
        paddingBottom: "0px",
        minHeight: "80vh",
      }}
    >
      <Container>
        <Row>
          <Col lg={6}>
            <div
              style={{
                marginLeft: "52px",
                marginTop: "28px",
              }}
            >
              <br />
              <br />

              <h4 style={{ color: "white", marginBottom: "80px" }}>
                Contactez-nous
              </h4>
              <h5 className="icons" style={{ color: "#00b3b8", float: "left" }}>
                <FontAwesomeIcon icon={"phone-alt"} />
              </h5>
              <h5 style={{ float: "left", marginLeft: "10px" }}>
                +212 (0) 5 22 23 54 00
              </h5>
              <br />
              <br />
              <h5 className="icons" style={{ color: "#00b3b8", float: "left" }}>
                <FontAwesomeIcon icon={"envelope"} />
              </h5>
              <h5 style={{ marginLeft: "30px" }}>contact@dialy.net</h5>
              <br />
              <h5 className="icons" style={{ color: "#00b3b8", float: "left" }}>
                <FontAwesomeIcon icon={"map-marker-alt"} />
              </h5>
              <h5 style={{ float: "left", marginLeft: "10px" }}>
                74, Bd Abdelmoumen 6éme étage, Casablanca, Maroc
              </h5>
              <br />
              <br />
              <br />
              <h4 style={{ color: "white" }}>Suivez-nous</h4>
              <Link to="https://www.facebook.com/dialtechnologies.net/">
                <StaticImage
                  src="../images/facebook.png"
                  alt="Facebook"
                  style={{
                    width: "30px",
                    marginRight: "10px",
                    borderRadius: "4px",
                  }}
                />
              </Link>
              <Link to="https://twitter.com/dialtech0">
                <StaticImage
                  src="../images/twitter.png"
                  alt="Facebook"
                  style={{
                    width: "30px",
                    marginRight: "10px",
                    borderRadius: "4px",
                  }}
                />
              </Link>
              <Link to="https://www.linkedin.com/company/dial-technologies/">
                <StaticImage
                  src="../images/linkedin.png"
                  alt="Facebook"
                  style={{
                    width: "30px",
                    marginRight: "10px",
                    borderRadius: "4px",
                  }}
                />
              </Link>
              <Link to="https://www.youtube.com/channel/UCbbPs60X6h97VxpLyTJ-6ow">
                <StaticImage
                  src="../images/youtube.png"
                  alt="Facebook"
                  style={{
                    width: "30px",
                    marginRight: "10px",
                    borderRadius: "4px",
                  }}
                />
              </Link>
              {/* <p>&copy;</p> */}
            </div>
          </Col>
        </Row>

        <div
          class="mapouter"
          style={{
            position: "relative",
            textAlign: "right",
            height: "500px",
            width: "600px",
            marginLeft: "650px",
            marginTop: "-350px",
          }}
        >
          <div
            class="gmap_canvas"
            style={{
              background: "none!important",
              height: "500px",
              width: "600px",
            }}
          >
            <iframe
              width="550"
              height="350"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=dial%20technologies&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
