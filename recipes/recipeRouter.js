const router = express.Router();

const Recipes = require('./recipe-model');

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes)
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "The recipes could not be retrieved."
      })
    })
})

module.exports = router;