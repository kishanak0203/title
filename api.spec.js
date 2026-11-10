import { test, expect } from '@playwright/test';
// get method is used to fetch the data
test('get method', async ({ request }) => {
const response=await request.get('https://api.restful-api.dev/objects')
console.log(response.status())
expect(response.status()).toBe(200)
const body= await response.json()
console.log("count of data: ",body.length)
expect(body.length).toBeGreaterThan(0)
console.log(body)
})
// post method is used to create new data or add new data
test('post method', async ({ request }) => {
const response=await request.post('https://reqres.in/api/users',{
data:{
    "id":14,
    "name": "kishan",
    "data": {
      "course": "API Testing",
      "language": "Javascript",
      "status": "Learning"
    }
  }
})
console.log(response.status())
expect(response.status()).toBe(201)
const body= await response.json()
console.log("count of data: ",body.length)
console.log(body)
expect(body).toHaveProperty('id')
console.log("name present in data: ",body.name)
expect(body.data.course).toBe("API Testing")
})
// put method is used to update or replace data
test('put method', async ({ request }) => {

const response=await request.put('https://reqres.in/api/users/5',{
data:{
    "id": 5,
        "email": "kishan.ak@reqres.in",
        "first_name": "kishan",
        "last_name": "AK"
  }
})
console.log(response.status())
expect(response.status()).toBe(200)
const body= await response.json()
console.log("count of data: ",body.length)
console.log(body)
expect(body).toHaveProperty('id')
console.log("name present in data: ",body.email)
expect(body.first_name).toBe("kishan")
})
// patch method is used to update partial data
test('patch method', async ({ request }) => {
const response=await request.patch('https://jsonplaceholder.typicode.com/posts/1',{
data:{
     "title": "web Testing"
  }
})
console.log(response.status())
expect(response.status()).toBe(200)
const body= await response.json()
console.log("count of data: ",body.length)
console.log(body)
expect(body).toHaveProperty('id')
console.log("title present in data: ",body.title)
expect(body.title).toBe("web Testing")
})
// delete method is used to delete the data
test('delete method', async ({ request }) => {
const response=await request.delete('https://jsonplaceholder.typicode.com/posts/1')
console.log(response.status())
expect(response.status()).toBe(200)
const body= await response.json()
console.log(body)
})