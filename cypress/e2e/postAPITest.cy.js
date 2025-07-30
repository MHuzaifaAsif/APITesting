import { getallPost,getpostById,getpostInvalidId,getallComment,getcommentById,createPost,updatePost,deletePost } from "../pages/postAPIcall";

describe('JSONPlaceholder /posts API Testing', () => {

  it('get all posts', () => {
    getallPost().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it('get single post by ID', () => {
    getpostById(1).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
    });
  });
  it('get single post by invalid ID', () => {
    getpostInvalidId(3333).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('get all comments', () => {
    getallComment().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('get comment by ID', () => {
    getcommentById(3).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 3);
    });
  });

  it('create a new post', () => {
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

  it('create post with empty body', () => {
    createPost({}).then((response) => {
      expect(response.status).to.eq(201);
    }); 
  });
  it('update post', () => {
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
