let items = []

module.exports = {
    getItems: function (req, res) {
        res.status(200).send( items );
    },

    postItems: function (req, res) {
        const { items } 
    }
}