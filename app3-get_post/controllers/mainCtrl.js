const items = require('../itemsData.js');

module.exports = {
    getItems: function(req, res, next){
        
        res.status(200).send(items);
    },

    postItems: function(req, res, next){
        // added item to array
        items.push(req.body);

        // return added item
        res.status(200).send(items[items.length-1])
    }
}