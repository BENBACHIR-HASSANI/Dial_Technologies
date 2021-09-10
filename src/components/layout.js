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
            <Link
              to="#"
              style={{
                color: "#3f4d96",
                textDecoration: "none",
                marginLeft: "535px",
              }}
            >
              <StaticImage
                src="../images/usa-flag.png"
                alt="USA"
                style={{
                  width: "18px",
                  marginTop: "3px",
                  marginRight: "5px",
                }}
              />
              EN
            </Link>
          </div>

          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="../#services" className={navLinkText}>
                Nos Services
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="../#clients" className={navLinkText}>
                Nos Clients
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="#" className={navLinkText}>
                Blog
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="../#contact" className={navLinkText}>
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
