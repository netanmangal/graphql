import { nanoid } from "nanoid";

class Course {
    constructor(id, {
        name, category, price, language, email, stack, teachingAssists
    }) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.language = language;
        this.email = email;
        this.stack = stack;
        this.teachingAssists = teachingAssists;
    }
}

let courseHolder = {};

const resolvers = {
    getCourseDetails: ({ id }) => {
        return new Course(id, courseHolder[id]);
    },
    createCourse: ({ input }) => {
        const id = nanoid();
        courseHolder[id] = input;
        return new Course(id, input);
    }
};

export default resolvers;