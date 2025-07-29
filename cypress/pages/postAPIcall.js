export const getAllPosts = () => {
  return cy.request('/posts');
};

export const getPostById = (id) => {
  return cy.request(`/posts/${id}`);
};