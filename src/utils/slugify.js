const slugify = function (text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w-]+/g, '')    // Remove all non-word chars
    .replace(/--+/g, '-')       // Replace multiple - with single -
    .replace(/^-+/, '')         // Trim - from start of text
    .replace(/-+$/, '')         // Trim - from end of text
}

// Web Design -> web-design

// node syntax becouse it will be used in gatsby-node.js file
module.exports = { slugify }