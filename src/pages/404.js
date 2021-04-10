import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";

const FourOFourPage = () => {
  return (
    <>
      <Seo title="Page not found" />
      <main className="container mx-auto prose text-center mt-6">
        <h1>Error 404</h1>
        <picture>
          <StaticImage
            imgClassName="shadow-xl"
            src="../images/muhammad-ali.jpeg"
            alt=""
            width={600}
            placeholder="blurred"
          />
        </picture>
        <h2>Congratulations, you broke the Internet.</h2>
        <p>
          The Page you're after no longer exists. Use the navigation above to
          find something else ...
        </p>
      </main>
    </>
  );
};

export default FourOFourPage;
