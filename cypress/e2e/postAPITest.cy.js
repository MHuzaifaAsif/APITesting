import { getallPost,getpostById,getallComment,getcommentById,createPost,updatePost,deletePost } from "../pages/postAPIcall";

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

  it('POST create a new post', () => {
    const newpost = {
      title: 'New Post',
      body: 'Post ad by huzaifa',
      userId: 1,
    };
    createPost(newpost).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.include(newpost);
    });
  });


  it('PUT update post', () => {
    const updatedPost = {
      id: 2,
      title: 'New',
      body: 'Updated',
      userId: 2,
    };
    updatePost(2, updatedPost).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include(updatedPost);
    });
  });

  it('DELETE post', () => {
    deletePost(1).then((response) => {
      expect([200]).to.include(response.status);
    });
  });

})
