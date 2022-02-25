class controller {
  static async products(req, res) {
    console.log(req.query);
    var products = [
      { id: "1", product: "Chair" },
      { id: "2", product: "Dell Laptop" },
      { id: "3", product: "Microsoft Azure", price: 500 },
    ];

    res.send(products);
  }
}

module.exports = controller;
