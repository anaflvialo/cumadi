const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const NoticeController = require('./controllers/NoticeController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions',SessionController.store);
routes.post('/news', upload.single('thumbnail'),NoticeController.store);
routes.get('/news', NoticeController.index);
module.exports = routes;