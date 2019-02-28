const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);

  // fetching data from contentful
  return graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              title
              date
              slug
              description
              tags
              categories
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulPost.edges;

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.slug,
        component: blogPost,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })
  })
}

// all values which we have in context object we can use in fetching data in blog-post as required variables ($slug)