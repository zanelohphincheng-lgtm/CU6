// BOOKS
let books = [
  { id: 'b1', title: 'Book One', description: 'Description of book one', authorId: 'a1' },
  { id: 'b2', title: 'Book Two', description: 'Description of book two', authorId: 'a2' },
];

const getAllBooks = (req, res) => {
    res.json(books)
}
exports.getAllBooks = getAllBooks

const booksById = (req, res) => {
    const book = books.find(boo => boo.id == req.params.id)
    if(!book){
        return res.status(404).json({ result: "No book with this ID found!" })
    }
    res.json(book)
}
exports.booksById = booksById



// REVIEWS
let reviews = [
  { id: 'r1', text: 'Amazing book!', bookId: 'b1' },
  { id: 'r2', text: 'Decent read.', bookId: 'b2' },
];

const getAllReviews = (req, res) => {
    res.json(reviews)
}
exports.getAllReviews = getAllReviews

const reviewsById = (req, res) => {
    const review = reviews.find(rev => rev.id == req.params.id)
    if(!review){
        return res.status(404).json({ result: "No review with this ID found!" })
    }
    res.json(review)
}
exports.reviewsById = reviewsById // Fixed export name




// AUTHORS
let authors = [
  { id: 'a1', name: 'Author One', bio: 'Bio of Author One' },
  { id: 'a2', name: 'Author Two', bio: 'Bio of Author Two' },
];

const getAllAuthors = (req, res) => {
    res.json(authors)
}
exports.getAllAuthors = getAllAuthors

const authorsById = (req, res) => {
    const author = authors.find(aut => aut.id == req.params.id)
    if(!author){
        return res.status(404).json({ result: "No author with this ID found!" })
    }
    res.json(author)
}
exports.authorsById = authorsById