db.inventory.find(
    {item:"paper"},
)
db.inventory.updateOne(
    {item:"paper"},
    {
        $set:{"h": "999", tags:"adobi"},
        $currentDate:{lastModified:true}
    }
)
// =============
db.inventory.find(
    {"qty": {$lt:300}}
)

db.inventory.updateMany(
    {"qty":{$lt:300}},
    {
        $set : {"qty":"1000"},
        $currentDate:{lastModified:true}
    }
)


//=========================

