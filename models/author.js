import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100 },
    family_name: { type: String, required: true, maxLength: 100 },
    date_of_birth: {type:Date},
    date_of_death: {type:Date},
})

//virtual for author's full name

AuthorSchema.virtual("name").get(function () {
    //to avoid errors in case no first or family name
    let fullname = "";
    if (this.first_name && this.family_name) {
        fullname = `${this.family_name}, ${this.first_name}`;
    }
    return fullname
});

// virtual for author's url
AuthorSchema.virtual("url").get(function () {
    return `/catalog/author/${this._id}`;
})

const Author = mongoose.model("Author", AuthorSchema);
export default Author;