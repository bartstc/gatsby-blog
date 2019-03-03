const path = require(`path`);
const { slugify } = require('./src/utils/slugify');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const templates = {
    singlePost: path.resolve(`src/templates/blog-post.js`),
    tagPosts: path.resolve(`src/templates/tag-posts.js`),
    categoryPosts: path.resolve(`src/templates/category-posts.js`),
    postList: path.resolve(`src/templates/post-list.js`)
  }

  // fetching data from contentful
  return graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              slug
              tags
              categories
            }
          }
        }
      }
    `
  ).then(res => {
    if (res.errors) {
      throw res.errors;
    }

    const posts = res.data.allContentfulPost.edges;

    posts.forEach(post => {
      const mainTag = post.node.tags[0];
      const mainCategory = post.node.categories[0];

      // generate page for each post
      // all values which we have in context object we can use in fetching data in blog-post as required variables ($slug) or display as content on page
      createPage({
        path: post.node.slug,
        component: templates.singlePost,
        context: {
          slug: post.node.slug,
          mainTag,
          mainCategory
        },
      })
    })

    // Get all tags
    let tags = [];
    posts.forEach(post => {
      tags = tags.concat(post.node.tags);
    });

    tags = tags.filter((v, i, a) => a.indexOf(v) === i); // tags does not be duplicate

    // Create tag posts pages
    tags.forEach(tag => {
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.tagPosts,
        context: {
          tag
        }
      })
    })

    // Get all categories
    let categories = [];
    posts.forEach(post => {
      categories = categories.concat(post.node.categories);
    });

    categories = categories.filter((v, i, a) => a.indexOf(v) === i); // categories does not be duplicate

    // Create tag posts pages
    categories.forEach(category => {
      createPage({
        path: `/category/${slugify(category)}`,
        component: templates.categoryPosts,
        context: {
          category
        }
      })
    });

    // pagination
    const postsPerPage = 5;
    const numberOfPages = Math.ceil(posts.length / postsPerPage); // number of pages with limited amount of pages

    // Array.from - create array and fill it with elements
    const pagesWithLimitedPosts = Array.from({ length: numberOfPages });
    pagesWithLimitedPosts.forEach((item, index) => {
      const isFirstPage = index === 0; // true/false
      const currentPage = index + 1;

      if (isFirstPage) return; // becouse we dont want to create second page of index (index.js is the first page of posts)

      createPage({
        path: `/page/${currentPage}`,
        component: templates.postList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage, // how many posts we must skip to correctly fill next page
          currentPage,
          numberOfPages
        }
      })
    })
  })
}

