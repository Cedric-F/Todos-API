const router = require('express').Router();
const Items = require('../models/models.items.js');

router.route('/').get((req, res, next) => {
    Items.find()
        .then(list => res.status(200).json(list))
        .catch(err => res.status(400).json(err));
});

router.route('/:id').get((req, res, next) => {
    Items.findById(req.params.id)
        .then(item => res.status(200).json(item))
        .catch(err => res.status(400).json(err));
});

router.route('/add').post((req, res, next) => {
    const title = req.body.title;
    const todo = new Items({ title });
    Items.findOne({title}, (err, item) => {
        if (err) {
            console.log('Add attempt.', err);
        }
        if (item) {
            res.status(400).json({error: 'This item already exists!'})
        } else {
            todo.save()
                .then(item => res.status(200).json(item))
                .catch(err => res.status(400).json(err));
        }
    });
});

router.route('/update/:id').post((req, res, next) => {
    Items.findById(req.params.id)
        .then(item => {
            item.title = req.body.title || item.title;
            item.completed = req.body.completed;
            item.save()
                .then(item => res.status(200).json(item))
                .catch(err => res.status(400).json(err));
        })
        .catch(err => res.status(400).json(err));
});

router.route('/:id').delete((req, res, next) => {
    Items.findByIdAndDelete(req.params.id)
        .then(item => res.status(200).json(`${item.title} deleted!`))
        .catch(err => res.status(400).json(err));
})

module.exports = router;