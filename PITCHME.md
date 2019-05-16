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
@code[graphql](assets/code/simple-schema.graphql)
@snapend

@snap[fragment]
@code[graphql](assets/code/simple-schema-request.graphql)
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
@code[graphql](assets/code/complex-schema.graphql)
@[2]
@[5-11]
@[6-6,9-10]
@[1-11]
@snapend

@snap[fragment]
@code[graphql](assets/code/complex-schema-request.graphql)
@[13]
@[14-18]
@snapend

@snapend

---

@code[json zoom-06 code-max code-noscroll](assets/code/complex-schema-response.json)
@[3]
@[5-9,12-16]

---

# @color[#DC143C](Resolvers)

---

@snap[fragment]
@code[graphql](assets/code/simple-schema.graphql)
@snapend

@snap[fragment]
@code[js](assets/code/simple-resolver.js)
@[5](Create the @color[#DC143C](Query) property)
@[6](Create the @color[#DC143C](function) to resolver the query)
@snapend

---

@snap[fragment west span-50]
@code[graphql](assets/code/complex-schema.graphql)
@snapend

@snap[fragment east span-50]
@code[js zoom-06](assets/code/complex-resolver.js)
@snapend

---

### You can
## @color[#DC143C](EXPLICITLY)
## @color[#DC143C](DEFINE)
### types

---

@code[js code-max code-noscroll](assets/code/complex-resolver-define-type.js)
@[7-13](Add the @color[#DC143C](type) to the resolver)
@[8-10](Attributes mapped explicitly to the object properties)
@[11](Attribute is transformed)
@[12](Attribute is the result of a condition against another property)

---

### @color[#DC143C](Queries)
#### with
## @color[#DC143C](PARAMETERS)

---

@code[graphql](assets/code/query-with-parameter.graphql)
@[2](We have an @color[#DC143C](id) parameter of the type @color[#DC143C](ID))
@[2](@color[#DC143C](ID!) means that the parameter is @color[#DC143C](required))

---

@code[js zoom-09 code-max code-noscroll](assets/code/resolver-with-parameter.js)
@[1-7](We have some mock products)
@[11](The second parameter is the @color[#DC143C](parameters) sent to the query)
@[11](We use destructuring to extract the @color[#DC143C](id) parameter)
@[12](Then we @color[#DC143C](return the product) with the passed in ID)

---

# @color[#DC143C](Mutations)

---

@code[graphql](assets/code/simple-mutation-schema.graphql)
@[2](We pass in a  @color[#DC143C](String) and return a  @color[#DC143C](String))

---

@code[js](assets/code/simple-mutation-resolver.js)
@[2](Create the @color[#DC143C](Mutation) property)
@[3](Create the @color[#DC143C](function) that runs the mutation)
@[4](This mutation @color[#DC143C](echos) what was passed in)
