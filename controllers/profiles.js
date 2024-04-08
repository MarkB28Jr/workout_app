const Profile = require('../models/exercise');

// index 
const index = async (req, res) => {
    try {
        const profile = await Profile.find({})
        if (!profile) {
            return res.status(404).send('Profiles not found');
        }
        res.render('profiles/index', { title: 'Profiles List', profile })
    } catch (err) {
        console.log(err)
        res.status(500).send('Error Finding  Profiles')
    }
}

// Show all Data
const show = async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id).exec()
        if (!profile) {
            return res.status(404).send('profile not found');
        }
        res.render('profiles/show', { title: 'Profile Data', profile });
    } catch (err) {
        console.error('Error finding Profiles:', err);
        res.status(500).send('Internal Server Error');
    }
}

// NEW EXERCISES
const newExercise = (req, res) => {
    try {
        const profile = new Profile();
        res.render('profiles/new', { title: 'Create Your Profile', profile })
    } catch (err) {
        console.log(err)
        res.status(500).send('Error Creating Your profile')
    }
}

// CREATE EXERCISES IN Create PAGE
const create = async (req, res) => {
    try {
        const profile = await Profile.create(req.body);
        res.render('profiles/new', { title: 'Create Your exercise', profile })
    } catch (err) {
        console.log(err)
        res.status(500).send('Failed to make Execise')
    }
}

module.exports = {
    index,
    show,
    create,
    new: newExercise,
}