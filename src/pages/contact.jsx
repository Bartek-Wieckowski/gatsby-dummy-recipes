import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
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

export default function Contact({ data }) {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Activated charcoal nostrud man bun, deep v chillwave hell of try-hard glossier. Pickled ex
              taiyaki mustache, schlitz sint neutra freegan non anim proident.
            </p>
            <p>Tacos kogi raw denim whatever prism 3 wolf moon. Woke iceland gorpcore drinking vinegar.</p>
            <p>
              Trust fund bitters ex duis bruh fanny pack ugh sartorial. Aute knausgaard quis anim messenger
              bag vinyl pork belly vape incididunt next level readymade cloud bread raclette banjo tofu. Blog
              succulents adipisicing street art chartreuse. XOXO everyday carry aliquip, jean shorts
              microdosing kitsch shabby chic banh mi.
            </p>
          </article>
          <article>
            <form className="contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
}
