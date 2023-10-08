import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";

export const query = graphql`
  query {
    allContentfulRecipe(sort: { title: ASC }, filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default function About({ data }) {
  const recipes = data.allContentfulRecipe.nodes
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
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
}
