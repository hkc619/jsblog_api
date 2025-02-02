https://roadmap.sh/projects/blogging-platform-api

### Requirements

You should create a RESTful API for a personal blogging platform. The API should allow users to perform the following operations:

- Create a new blog post
- Update an existing blog post
- Delete an existing blog post
- Get a single blog post
- Get all blog posts
- Filter blog posts by a search term
- Given below are the details for each API operation.

### Properties

#### Example

- "id": 1,
- "title": "My First Blog Post",
- "content": "This is the content of my first blog post.",
- "category": "Technology",
- "tags": ["Tech", "Programming"],
- "createdAt": "2021-09-01T12:00:00Z",
- "updatedAt": "2021-09-01T12:00:00Z"

```json
{
  "id": 1,
  "title": "Test Post 0119",
  "content": "lorem",
  "category": "Test",
  "tags": ["Test"]
}
```

### Appendix

#### Docker

- Docker MongoDB 操作: https://hackmd.io/@SuFrank/BJOe3Fi3c#%E6%93%B4%E5%85%85%E5%85%A7%E5%AE%B9
- Docker, MongoDB, and Node.js: https://ithelp.ithome.com.tw/articles/10201657

#### MongoDB

- MongoDB 基本指令操作: https://hackmd.io/@WL-WTIRiRlOr-R2wORqerA/Hkn_1AHvs
- MongoDB 資料庫與 Collection: https://ithelp.ithome.com.tw/articles/10260011
- Node.JS 串接 MongoDB (含 CRUD): https://ithelp.ithome.com.tw/m/articles/10186483

#### Mongoose

- Mongoose 入門（簡介、CRUD、實例&靜態方法、中介軟體）: https://medium.com/@ralph-tech/mongoose-%E5%85%A5%E9%96%80-%E7%B0%A1%E4%BB%8B-crud-%E5%AF%A6%E4%BE%8B-%E9%9D%9C%E6%85%8B%E6%96%B9%E6%B3%95-%E4%B8%AD%E4%BB%8B%E8%BB%9F%E9%AB%94-6e54fb192b2b
- MongoDB and Mongoose schema: https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/
- Mongoose 是什麼: https://linyencheng.github.io/2019/09/07/tool-mongoose-mongo/#Mongoose-%E5%B0%88%E6%A1%88%E6%9E%B6%E6%A7%8B
