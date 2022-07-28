import {buildSchema} from "graphql";

const schema = buildSchema(`
    type Course {
        id: ID
        name: String
        category: String
        price: Int
        language: [Language]
        email: String
        stack: Stack
        teachingAssists: [TeachingAssist]
    }

    type TeachingAssist {
        name: String
        experience: Int
    }

    enum Language {
        En
        Hi
        Pa
        La
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }

    type Query {
        getCourseDetails(id: ID): Course
    }

    input CourseInput {
        id: ID
        name: String!
        category: String
        price: Int
        language: [Language]!
        email: String!
        stack: Stack
        teachingAssists: [TeachingAssistInput]!
    }

    input TeachingAssistInput {
        name: String!
        experience: Int
    }

    type Mutation {
        createCourse(input: CourseInput): Course
    }
`);

export default schema;