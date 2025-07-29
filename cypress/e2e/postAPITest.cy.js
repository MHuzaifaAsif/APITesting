import { getAllPosts,getPostById } from "../pages/postAPIcall";

describe('JSONPlaceholder /posts API Testing', () => {

  it('TC01 - GET all posts', () => {
    getAllPosts().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it('TC02 - GET single post by ID', () => {
    getPostById(1).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
    });
  });
})