const User = require('../models/User');

module.exports = {
    async store(req,res){
        const {nome, email} = req.body;

        let user = await User.findOne({ email : email });

        if (!user){
            user = await User.create({nome, email});
        }

        return res.json(user);
    }
};