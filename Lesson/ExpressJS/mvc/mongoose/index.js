const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Article = require("./models/Articles");

const createNewArticle = async () => {
    const article = new Article({
        title: "New Article from Mongoose",
        content: "New Content from Mongoose",
        author: "New Author from Mongoose",
        publishedDate: "2026-08-20",
    });
    // Insert the Article into your MongoDB Database
    await article.save();
};

const readOneArticle = async () => {
    const firstArticle = await Article.findOne({});
    console.log(firstArticle);
};

const readLastArticle = async () => {
    const firstArticle = await Article.findOne().sort({ _id: -1 });
    console.log(firstArticle);
};
const updateArticle = async () => {
    const article = await Article.findOne({})
    console.log(article)
    article.title = "Changed Article Title from Mongoose!"
    await article.save()
    console.log(article)
}
const deleteArticle = async() => {
    const article = await Article.deleteOne({ author: "John Doe" })
    console.log(article)
}


mongoose
    .connect("mongodb://localhost:27017/cms")
    .then(() => {
        console.log("MongoDB Connected");
        // createNewArticle(); // Everytime you refresh the app, there will be a new article
        // readLastArticle(); // Render out as JSON form whereby your frontend can take and use it
        updateArticle(); // This is to update the data, by stating a new value for specific fields
        // deleteArticle() // The best way to delete is by id but since the id is so damn long we can use other fields like title, or author
        // Fun Fact: the "__v:" is version, the point of it is to document whenever it has been updated? or Which version this data is
    })
    .catch((err) => console.log(err));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
