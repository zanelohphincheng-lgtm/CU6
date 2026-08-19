const addAllNumbers = (req, res) => {
    let total = 0
    const allNumbers = req.body
    // Using array method (.map) to go through the number one-by-one as it adds it together
    allNumbers.map((number) => {
        total += Number(number) // Keep adding through all the numbers until the last
    })
    res.send(`The total of all numbers is ${total}`)
}

exports.addAllNumbers = addAllNumbers

const multiplyAllNumbers = (req, res) => {
    let total = 1
    const multiplyNumbers = req.body
    multiplyNumbers.map((number) => {
        total *= Number(number)
    })
    res.send(`The total of all numbers is ${total}`)
}

exports.multiplyAllNumbers = multiplyAllNumbers