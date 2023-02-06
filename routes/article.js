const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const adminController = require('../controllers/admin/article');

router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);

router.post('/admin/article/create', adminController.createArticle);
router.post('/admin/article/edit/:id', adminController.updateArticle);
router.post('/admin/article/delete/:id', adminController.deleteArticle);

module.exports = router;