db.inventory.find()  // - fetch all document
db.inventory.find({item:"canvas"})  

db.inventory.find({tags: { $in: ["wollen", "blue"]}})

//And 
db.inventory.find({tags:"wollen",qty: {$lt: 200 }})
db.inventory.find({tags:"cotton",qty: {$lt: 150 }})

// OR
db.inventory.find ({$or: [{genres:"Action"} , {rated :"Y"}]})
db.inventory.find ({$or: [{genres:"Horror"} , {rated :"R"}]})

db.inventory.findOne ({$or: [{genres:"Action"} , {rated :"Y"}]})




