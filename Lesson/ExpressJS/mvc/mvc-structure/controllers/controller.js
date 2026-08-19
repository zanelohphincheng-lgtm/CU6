exports.homePage = (req,res) => {
    res.send(`Welcome to the Home Page!`)
}

exports.aboutPage = (req,res) => {
    res.send(`Welcome to the About Page!`)
}

// Another way to write the function
// Also fun fact:       in this bracket the first variable is always request(req) and the second is always response(res) it's fixed which means req, res cannot be switched simply as the system will get res from the first place as the request key word and req as the response key word
const anotherHomePage = (req, res) => {
    res.send(`This is another home page using conventional arrow function`)
}

exports.anotherHomePage = anotherHomePage

const addTwoNumbers = (req, res) => {
    const total = Number(req.body.num1) + Number(req.body.num2)
    // res.send(`The total is ${total}`)

    // This is to render out in json form
    res.send({ status: "success", total: total })
}
exports.addTwoNumbers = addTwoNumbers

const multiplyTwoNumbers = (req, res) => {
    const multiplication = Number(req.body.num1) * Number(req.body.num2)
    res.send({ status: "success", product: multiplication })
}
exports.multiplyTwoNumbers = multiplyTwoNumbers