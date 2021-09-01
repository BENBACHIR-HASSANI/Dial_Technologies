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
const Layout = ({ pageTitle, children }) => {
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
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="#services" className={navLinkText}>
                Nos Services
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="#clients" className={navLinkText}>
                Nos Clients
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="#contact" className={navLinkText}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <img className={logo} alt="" />
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
