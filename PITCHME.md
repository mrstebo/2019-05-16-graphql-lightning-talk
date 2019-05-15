# @color[#DC143C](GraphQL)
#### Lightning Talk

---

### What is @color[#DC143C](GraphQL)?

@emoji[thinking_face]

---

@ul

- A @color[#DC143C](query language) for APIs
- A @color[#DC143C](runtime) for fulfilling queries with your existing data
- A way for giving clients the power to ask for @color[#DC143C](exactly what they need) and nothing more!

@ulend

---

@snap[midpoint span-60]

#### @color[#DC143C](REST) vs @color[#DC143C](GraphQL)

![REST and GraphQL](assets/images/rest_and_graphql_side_by_side.png)

@snapend

---

### How do you use GraphQL?

@emoji[mag]

---

### Using
## @color[#DC143C](resolvers)
#### and
## @color[#DC143C](schemas)

---

# @color[#DC143C](Schemas)

---

@snap[west span-30]

### Queries

@snapend

@snap[east span-70]

@snap[fragment]
@code[ts](assets/code/simple-schema.graphql)
@snapend

@snap[fragment]
@code[json](assets/code/simple-schema-request.graphql)
@snapend

@snapend

---

@code[json](assets/code/simple-schema-response.json)

@[3](Returns the server time as a @color[#DC143C](string))

---

@snap[west span-30]

### Queries

@snapend

@snap[east span-70]

@snap[fragment]
@code[ts](assets/code/complex-schema-1.graphql)
@snapend

@snap[fragment]
@code[ts](assets/code/complex-schema-2.graphql)
@snapend

@snap[fragment]
@code[json](assets/code/complex-schema-request.graphql)
@snapend

@snapend

---

@code[json zoom-06](assets/code/complex-schema-response.json)

@[3]
@[5-9,12-16]

---

# @color[#DC143C](Resolvers)

---
