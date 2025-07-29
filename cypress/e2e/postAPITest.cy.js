import { getallPost,getpostById,getallComment,getcommentById } from "../pages/postAPIcall";

describe('JSONPlaceholder /posts API Testing', () => {

  it('GET all posts', () => {
    getallPost().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it('GET single post by ID', () => {
    getpostById(1).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
    });
  });

  it('GET all comments', () => {
    getallComment().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('GET comment by ID', () => {
    getcommentById(3).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 3);
    });
  });

})