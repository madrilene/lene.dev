/** Returns all blog posts as a collection. */
const getAllPosts = (collection) => {
  const posts = collection.getFilteredByGlob('./src/posts/*.md');
  return posts.reverse();
};


module.exports = {
  getAllPosts,
};
