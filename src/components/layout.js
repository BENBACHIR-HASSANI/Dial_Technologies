import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  logo,
  header,
} from "./layout.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import { StaticImage } from "gatsby-plugin-image";
import { FormattedMessage, changeLocale } from "gatsby-plugin-intl";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <div className={header}>
        <title>{data.site.siteMetadata.title}</title>
        <nav>
          <div style={{ marginTop: "-30px" }}>
            <a
              onClick={() => changeLocale("en")}
              style={{
                color: "#3f4d96",
                textDecoration: "none",
              }}
            >
              <a
                onClick={() => changeLocale("fr")}
                style={{
                  color: "#3f4d96",
                  textDecoration: "none",
                  marginLeft: "555px",
                }}
              >
                {/* <StaticImage
                  src="../images/usa-flag.png"
                  alt="USA"
                  style={{
                    width: "18px",
                    marginTop: "3px",
                    marginRight: "5px",
                  }}
                /> */}
                <FormattedMessage id="lang" />
              </a>
            </a>
          </div>

          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/en/#services" className={navLinkText}>
                <FormattedMessage id="Nos_services" />
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/en/#clients" className={navLinkText}>
                <FormattedMessage id="Nos_clients" />
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="#" className={navLinkText}>
                Blog
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/en/#contact" className={navLinkText}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <main style={{ marginTop: "60px" }}>
          <img className={logo} alt="" />
          {children}
        </main>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Layout;
