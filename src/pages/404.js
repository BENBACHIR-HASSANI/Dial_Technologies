import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

// styles
const pageStyles = {
  color: "#232129",
  padding: "160px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  marginLeft: "80px",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  const title = "Not found - Dial Technologies (Dialy)";
  return (
    <main style={pageStyles}>
      <Helmet defaultTitle="Dial Technologies (Dialy)" title={title} />
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
