import express from "express";
import {graphqlHTTP} from "express-graphql";

import resolvers from "./resolvers.js";
import schema from "./schema.js";

const app = express();

app.get("/", (req, res, next) => {
    res.status(200).send("Welcome to homepage");
});

const root = resolvers;

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root
}));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

/* Sample Query and Mutations
        mutation {
        createCourse(input: {
            name: "Course Name"
            language: [En]
            email: "email@courses.com"
            teachingAssists: [{
            experience: 2
            name: "TEacher 1"
            }]
        }) {
            id
            name
        }
        }


        query {
        getCourseDetails(id: "VN2s99tMBCyA5qAUXj6Tw") {
            id
            name
            email
            price
            teachingAssists {
            name
            }
        }
        }
*/