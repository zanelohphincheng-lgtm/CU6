const TVShow = require("../models/TVShow");

// exports.addTVShow = async (req, res) => {
//     console.log("Reach here")
//     const tvShow = new TVShow({
//         title: req.body.title,
//         creator: req.body.creator,
//         premiere_year: req.body.premiere_year,
//         end_year: req.body.end_year,
//         seasons: req.body.seasons,
//         genre: req.body.genre,
//         rating: req.body.rating,
//     });
//     await tvShow.save();
//     res.json(tvShow)
// };
exports.addTVShow = async (req, res) => {
    console.log("Reach here");
    const tvShow = new TVShow(req.body);
    await tvShow.save();
    res.json(tvShow);
};

// exports.showAllTVShows = async (req, res) => {
//     const genre = req.query.genre
//     const rating = req.query.rating
//     const premiere_year = req.query.premiere_year
//     // This methods shows all the TV Shows first, THEN look if there's any genre or other things to look for
//     // But the problem of this code is that the genre, ratings and premiere_year can't be search together
//     let tvShows = await TVShow.find({})
//     if(genre){
//         tvShows = await TVShow.find({ genre: genre })
//     } else if(rating){
//         // tvShows = await TVShow.find({ rating: rating}) // This is to find specific rating
//         tvShows = await TVShow.find({ rating: {$gt: rating}}) // This is to find GREATER THAN($gt) the rating
//         // tvShows = await TVShow.find().where('rating').gt(rating) // This is to find GREATER THAN($gt) the rating
//     } else if(premiere_year){
//         tvShows = await TVShow.find({premiere_year: premiere_year})
//     }
//     res.json(tvShows)

//     // This is the "EASY" way to do it:
//     // if(genre){
//     //     const tvShows = await TVShow.find({ genre: genre });
//     //     res.json(tvShows)
//     // }else{
//     //     const tvShows = await TVShow.find({})
//     //     res.json(tvShows)
//     // }
// };

// (THIS ONE WILL COME OUT IN CU6 EXAM)
// By this way you can search out `http://localhost${PORT}/shows?genre=Sci-Fi&rating=6.7&premiere_year=2026`
exports.showAllTVShows = async (req, res) => {
    try {
        const {genre, rating, premiere_year} = req.query;
        const filter = {};
        if (genre) {
            filter.genre = { $regex: genre, $options: "i" };
            // regex : regular expression (Detect variantion in string), the 'i' stands for insensitive
        }
        if (rating) {
            filter.rating = { $gte: Number(rating) }; // $gt - greater than, $gte - greater or equal to
        }
        if (premiere_year) {
            filter.premiere_year = premiere_year;
        }
        const tvShows = await TVShow.find(filter);

        res.status(200).json(tvShows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    res.json(tvShows);
};

exports.showTVShowByID = async (req, res) => {
    const id = req.params.id;
    const tvShow = await TVShow.findOne({ _id: id });
    res.json(tvShow);
};

exports.updateTVShow = async (req, res) => {
    const id = req.params.id;
    const updatedTVShow = await TVShow.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
    });
    res.json(updatedTVShow);
};

// exports.removeTVShow = async (req, res) => {
//     const id = req.params.id
//     const newTVShows = await TVShow.findByIdAndDelete({_id: id}, req.body, {
//         new: true
//     })
//     res.json(newTVShows);
// };

// OTHER WAY FOR DELETE:
exports.removeTVShow = async (req, res) => {
    const id = req.params.id;
    await TVShow.findByIdAndDelete({ _id: id });
    // Status 204 means that won't be any content shown in Postman
    // res.status(204).send(`Deleted`)
    res.json({ status: "Deleted Succussful", deleted: true });
};
