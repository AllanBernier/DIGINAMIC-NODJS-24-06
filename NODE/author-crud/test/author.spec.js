const request = require('supertest');
const app = require("../index")
const Author = require("../model/Author")


describe('Testing author crud', () => {
  test('create author', async () => {
    const authorData = {
      "firstName": "Jhon",
      "lastName": 545,
      "nbPublication": "51",
      "birthDate": "05-05-1995"
    }

    const res = await request(app)
      .post('/author')
      .send(authorData)
      .set('Accept', 'application/json')
    const author = await Author.findByPk(res.body.author.id)

    expect(author.firstName).toBe(authorData.firstName)
    expect(res.body.author.nbPublication).toBe(51)
    expect(res.status).toBe(201)
  });


  test("Delete Author", async () => {
    const author = await Author.create({
      "firstName": "Jhon",
      "lastName": 545,
      "nbPublication": 51,
      "birthDate": "05-05-1995"
    })

    const res = await request(app)
      .delete(`/author/${author.id}`)

    const author_db = await Author.findByPk(author.id)
    
    expect(res.status).toBe(200)
    expect(author_db).toBe(null)

  })


});
