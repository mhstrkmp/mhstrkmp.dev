import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const FourOFourPage = () => {
  return (
    <main className="container mx-auto prose text-center">
      <h1>Error 404</h1>
      <picture>
        <StaticImage
          src="../images/muhammad-ali.jpeg"
          alt=""
          width={600}
          placeholder="blurred"
        />
      </picture>
      <h2>Congratulations, you broke the Internet.</h2>
      <p>
        The Page you're after no longer exists. Use the navigation above to find
        something else ...
      </p>
    </main>
  );
};

export default FourOFourPage;
