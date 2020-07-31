const Notice = require('../models/Notice');

module.exports = {
    async index(req,res){
        const notices = await Notice.find();
        return res.json(notices);
    },

    async store(req,res){
        const {filename} = req.file;
        const {title, text, source} = req.body;

        const notices = await Notice.create({
            thumbnail: filename,
            title,
            text,
            source
        })

        return res.json(notices);
    }
};