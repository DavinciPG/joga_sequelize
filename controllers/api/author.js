const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://user:pass@localhost:PORT/joga_sequelize');

// read model data for table representation
const models = require('../../models');

// show author by name or id
const getAuthor = (req, res) => {
	let queryElement = Object.keys(req.query)
	if(Object.keys(req.query).length === 0){
		return res.status(400).json({ 'error': 'Invalid request'});
	}else if(req.query.author_name === ''){
		return res.status(400).json({ 'error': 'Invalid request'});
	}else if(req.query.id === ''){
		return res.status(400).json({ 'error': 'Invalid request'});
	} else {
	 if(queryElement[0] === 'author_name') {
		models.Author.findOne({
			where: {
				name: req.query.author_name
			},
			include: [{
				model: models.Article
			}],
		})
		.then(article => {
			return res.status(200).json({ article });
		})
		.catch (error => {
			return res.status(500).send(error.message);
		})
	} if(queryElement[0] === 'id') {
		models.Author.findByPk(req.query.id, {
		include: [{
			model: models.Article
		}],
	})
	.then(author => {
		return res.status(200).json({ author });
	})
	.catch (error => {
		return res.status(500).send(error.message);
	})
	}
	}
};

// export
module.exports = {
	getAuthor
}