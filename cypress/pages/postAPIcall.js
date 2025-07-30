export const getallPost = () => {
  return cy.request('/posts');
};

export const getpostById = (id) => {
  return cy.request(`/posts/${id}`);
};
export const getpostInvalidId = (id) => {
  return cy.request({
    url: `/posts/${id}`,
    failOnStatusCode: false
  });
};
export const getallComment = (id) =>
{
    return cy.request('/comments');
}
export const getcommentById = (id) => {
  return cy.request(`/comments/${id}`);
};
export const createPost = (postbody) => {
  return cy.request({
    method: 'POST',
    url: '/posts',
    body: postbody,
  });
};

export const updatePost = (id, postbody) => {
  return cy.request({
    method: 'PUT',
    url: `/posts/${id}`,
    body: postbody,
  });
};

export const deletePost = (id) => {
  return cy.request({
    method: 'DELETE',
    url: `/posts/${id}`,
  });
}