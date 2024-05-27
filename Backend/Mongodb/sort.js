// Building a database
db.inventory.find().sort({qty: 1}) //increasing order of qty
db.inventory.find().sort({qty: -1}) //decreasing order of qty

db.inventory.find().skip(1) // skip first document
db.inventory.find().skip(2) // skip first 2 document

db.inventory.find().limit(1) // limit the number of 
db.inventory.find().limit(2)