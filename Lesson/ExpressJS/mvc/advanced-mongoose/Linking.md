# 1 Hard-Coded
You straight up type in the comment in the Blog data which is both Stupid and doesn't really linked the comments and blog

# 2 Virtual
In your blog schema you tell Mongoose to include virtual fields when converting data to JSON as such:
const BlogSchema = new Schema({
    title: String,
    author: String,
    content: String,
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

BlogSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'blog_id'
})
In this way in your Postman you can see the related comments that are linked to the blog's id
In simple words : You've created a field virtually for the comments to stand in(If the comment is linked to the Blog's id)

# 3 Standard Way
const BlogSchema = new Schema({
    title: String,
    author: String,
    content: String,
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
})
Basically you save the comments in the Comment database and when you finally added a comment, the Blog will be .populate with the comment