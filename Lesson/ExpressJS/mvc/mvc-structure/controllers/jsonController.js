const { get } = require("../routes/math")

const characters = [
    {
        id: 101,
        name: "Spiderman",
        universe: "Marvel",
        powers: "Human-Arachnid Hybrid"
    },
    {
        id: 102,
        name: "The Hulk",
        universe: "Marvel",
        powers: "Super-strength"
    },
    {
        id: 103,
        name: "Jean Grey",
        universe: "Marvel",
        powers: "Omega-level Telepath"
    },
    {
        id: 201,
        name: "Superman",
        universe: "DC Comics",
        powers: "Kryptonian"
    },
    {
        id: 202,
        name: "Supergirl",
        universe: "DC Comics",
        powers: "Kryptonian"
    },
    {
        id: 203,
        name: "Batman",
        universe: "DC Comics",
        powers: "Rich"
    }
]

const getAllCharacters = (req, res) => {
    res.json(characters)
}

exports.getAllCharacters = getAllCharacters

const getCharacterById = (req, res) => {
    const character = characters.find(char => char.id == req.params.id)
    // Without this code below, Postman will just render a blank json page with 200 Ok status
    // So in that case we add the error text on our own
    if(!character){
        res.status(404).json({ result: "No character with this ID found!" })
    }
    res.json(character)
}
exports.getCharacterById = getCharacterById