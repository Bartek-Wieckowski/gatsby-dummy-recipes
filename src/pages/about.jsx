import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function About() {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>JOMO mustache art party twee freegan yr sriracha vexillologist tonx food truck.</h2>
            <p>
              Deep v disrupt freegan lumbersexual kickstarter JOMO bespoke PBR&B tumeric. Beard leggings
              edison bulb YOLO heirloom. Put a bird on it iceland asymmetrical, salvia organic viral chillwave
              meditation gastropub bushwick kinfolk hella snackwave vegan.
            </p>
            <p>
              Enamel pin cornhole snackwave authentic drinking vinegar, la croix chartreuse salvia pickled
              tumblr live-edge palo santo.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="example about img"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  );
}
