const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
    thumbnail: String,
    title: String,
    text: String,
    source: String,
},{
    toJSON: {
        virtuals: true,
    },
});

NoticeSchema.virtual('thumbnail_url').get(function(){
    return `http://192.168.1.103:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Notice',NoticeSchema);