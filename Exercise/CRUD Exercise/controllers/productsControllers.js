let products = [
    { id: 101, name: "Wireless Mouse", price: 79.9, stock: 25 },
    { id: 102, name: "Mechanical Keyboard", price: 199.0, stock: 10 },
    { id: 103, name: "USB-C Hub", price: 59.5, stock: 0 },
];
// QUICK NOTE: Your data arrays or objects SHOULDN'T be const, use let so your data can be change in the results

// GET ALL PRODUCT
exports.getAllProducts = (req, res) => {
    res.json(products);
};

// GET ONE PRODUCT
exports.getOneProduct = (req, res) => {
    const product = products.find((pro) => pro.id == req.params.id);
    if (!product) {
        return res.status(404).json({ result: "No product with this ID found!" });
    }
    res.json(product);
};

// ADD NEW PRODUCT
exports.addNewProduct = (req, res) => {
    products.push(req.body);
    res.json(products);
};

// UPDATE PRODUCT NAME
exports.updateProductName = (req, res) => {
    const updatedProduct = req.body;
    console.log({ ...updatedProduct });
    const updatedProducts = products.map((product) => {
        id = product.id;
        return product.id === Number(req.params.id) ? { id, ...product, ...updatedProduct } : product;
    });
    res.json(updatedProducts);
};

// REMOVE PRODUCT
exports.removeProduct = (req, res) => {
    const newProducts = products.filter(product => product.id !== Number(req.params.id));
    products = newProducts;
    res.json(products);
};
