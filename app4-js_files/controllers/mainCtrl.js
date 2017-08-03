const data = require('../data');

module.exports = {
    getData: (req, res) => {
        res.status(200).send(data)
    },
    postData: (req, res) => {
        console.log(req.body);
        data.push(req.body);

        res.status(200).send(data[data.length - 1]);
    }


}