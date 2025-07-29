export const getallPost = () => {
  return cy.request('/posts');
};

export const getpostById = (id) => {
  return cy.request(`/posts/${id}`);
};
export const getallComment = (id) =>
{
    return cy.request('/comments');
}
export const getcommentById = (id) => {
  return cy.request(`/comments/${id}`);
};