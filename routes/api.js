const express = require('express');
const router = express.Router();

const apiArticleController = require('../controllers/api/article');
const apiAuthorController = require('../controllers/api/author');

router.get('/article', apiArticleController.getArticle);
router.get('/author', apiAuthorController.getAuthor);

module.exports = router;