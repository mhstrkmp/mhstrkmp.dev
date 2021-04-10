import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo";

const AboutPage = () => {
  return (
    <>
      <Seo title="About me" article={true} />
      <main className="flex justify-center items-center">
        <article className="prose">
          <h1>
            Hey there, I'm Matthias{" "}
            <span role="img" aria-label="waving hand emoji">
              👋
            </span>
          </h1>
          <p>
            Thanks for visiting my website!{" "}
            <strong>
              I'm a Web Developer from Germany creating websites &amp; apps
              using React and the Jamstack.
            </strong>
          </p>
          <p>
            Before becoming a Web Developer I spent many years in craftsmanship.
            I worked as a plumbing and heating installer. In the last few years
            my focus was about planning and organizing a huge variety of
            projects.
          </p>
          <p>
            I got more and more frustrated about the lack of great software for
            businesses in craftsmanship. Therefore, I decided to follow my
            passion a become a Web Developer.
          </p>
          <p>
            I took part at an outstanding Web Development Bootcamp at{" "}
            <a
              className="text-purple-800 hover:text-purple-700"
              href="https://www.neuefische.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              neue fische
            </a>{" "}
            where I learned the fundamentals to really keep going
            professionally.
          </p>
          <p>
            Currently, I'm working at,{" "}
            <a
              className="text-purple-800 hover:text-purple-700"
              href="https://plancraft.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plancraft
            </a>{" "}
            developing the software I missed for such a long time.
          </p>
          <p>
            If you want to take part at my journey take a look at my{" "}
            <Link to="/blog" className="text-purple-800 hover:text-purple-700">
              Blog
            </Link>
            , where I share my thoughts and learnings.
          </p>
        </article>
      </main>
    </>
  );
};

export default AboutPage;
