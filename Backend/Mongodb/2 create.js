db.inventory.insertOne({
  item: "canvas",
  qty: 50,
  tags: ["shirt"],
  size: { h: 28, w: 35.5, uom: "cm" },
})

db.inventory.insertMany([
  {
    item: "canvas1",
    qty: 120,
    tags: ["fiber"],
    size: { h: 18, w: 35, uom: "cm" },
  },
  {
    item: "paper",
    qty: 150,
    tags: ["wollen"],
    size: { h: 38, w: 45.5, uom: "cm" },
  },
  {
    item: "canvas",
    qty: 200,
    tags: ["cotton3"],
    size: { h: 48, w: 95.5, uom: "cm" },
  },
  {
    item: "paper",
    qty: 500,
    tags: ["cotton5"],
    size: { h: 128, w: 35.5, uom: "cm" },
  }
]);

db.inventory.insertMany([
  {
    title: "Jurassic World: Fallen Kingdom",
    genres: [ "Action", "Sci-Fi" ],
    runtime: 130,
    rated: "PG-13",
    year: 2018,
    directors: [ "J. A. Bayona" ],
    cast: [ "Chris Pratt", "Bryce Dallas Howard", "Rafe Spall" ],
    type: "movie"
  },
  {
    title: "Tag",
    genres: [ "Comedy", "Action" ],
    runtime: 105,
    rated: "R",
    year: 2018,
    directors: [ "Jeff Tomsic" ],
    cast: [ "Annabelle Wallis", "Jeremy Renner", "Jon Hamm" ],
    type: "movie"
  }
])