import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
})
// virtual for genre's url
GenreSchema.virtual("url").get(function () {
    return `/catalog/Genre/${this._id}`;
})

const Genre = mongoose.model("Genre", GenreSchema);
export default Genre;