const express = require('express');
const router = express.Router();

const apiArticleController = require('../controllers/api/article');
const apiAuthorController = require('../controllers/api/author');
const apiTagsController = require('../controllers/api/tags');

router.get('/article', apiArticleController.getArticle);
router.get('/author', apiAuthorController.getAuthor);
router.get('/tags', apiTagsController.getTags);

module.exports = router;