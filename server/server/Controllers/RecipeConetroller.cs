using Microsoft.AspNetCore.Mvc;
using server.Classes;
using System.Collections.Generic;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {


        private static readonly List<Recipe> _recipes = new List<Recipe> {
        new Recipe(
        "Chocolate Chip Cookies",
            1, // Baking category ID (replace with actual ID)
        30,
            2, // Medium difficulty level
            DateTime.Now,
        new List<string>() { "2 cups all-purpose flour", "1 teaspoon baking soda", "1/2 teaspoon salt", "1 cup (2 sticks) unsalted butter, softened", "1 cup granulated sugar", "1 cup packed light brown sugar", "2 large eggs", "2 teaspoons pure vanilla extract", "2 cups semisweet chocolate chips" },
        new List<string>() { "Preheat oven to 375 degrees F (190 degrees C).", "... (remaining instructions)" },
        userId: 1, // Replace with actual user ID
        imagePath: "../../assets/ChocolateCookeis.jpg"

    ),new Recipe(
  "Creamy Tomato Soup",
  3, // Soup category ID
  30,
  2, // Medium difficulty level
  DateTime.Now,
  new List<string>() { "1 tablespoon olive oil", "1 onion, chopped", "2 cloves garlic, minced", "4 cups canned diced tomatoes", "4 cups vegetable broth", "1 cup heavy cream", "Salt and pepper to taste" },
  new List<string>() { "Heat olive oil in a pot over medium heat.", "... (remaining instructions)" },
  userId: 1, // Replace with actual user ID
  imagePath: "../../assets/soup.jpg"
)
,new Recipe(
  "Greek Salad",
  7, // Salad category ID
  15,
  1, // Easy difficulty level
  DateTime.Now,
  new List<string>() { "4 cups chopped romaine lettuce", "1 cucumber, chopped", "1 tomato, chopped", "1/2 red onion, sliced", "1/2 cup crumbled feta cheese", "1/4 cup Kalamata olives", "1/4 cup olive oil", "Red wine vinegar to taste", "Dried oregano to taste" },
  new List<string>() { "Combine all ingredients in a large bowl.", "... (remaining instructions)" },
  userId: 1, // Replace with actual user ID
  imagePath: "../../assets/GreekSalad.jpg"
)
,new Recipe(
  "Salmon with Lemon and Dill",
  5, // Fish category ID
  20,
  2, // Medium difficulty level
  DateTime.Now,
  new List<string>() { "2 salmon fillets", "1 tablespoon olive oil", "1 lemon, sliced", "1/4 cup fresh dill, chopped", "Salt and pepper to taste" },
  new List<string>() { "Preheat oven to 400 degrees F (200 degrees C).", "... (remaining instructions)" },
  userId: 1, // Replace with actual user ID
  imagePath: "../../assets/Salamon.jpg"
)
,new Recipe(
  "Banana Bread",
  1, // Baking category ID
  60,
  1, // Easy difficulty level
  DateTime.Now,
  new List<string>() { "3 ripe bananas, mashed", "1 1/2 cups all-purpose flour", "1 teaspoon baking soda", "1/2 teaspoon salt", "1/2 cup unsalted butter, softened", "1 cup granulated sugar", "2 large eggs", "1/2 cup milk" },
  new List<string>() { "Preheat oven to 350 degrees F (175 degrees C).", "... (remaining instructions)" },
  userId: 1, // Replace with actual user ID
  imagePath: "../../assets/BananaBread.jpg"
),
    new Recipe(
        "Classic Hummus",
        4, // Category ID for Dips & Spreads
        15,
        1, // Easy difficulty level
        DateTime.Now,
        new List<string>() { "1 can (15 ounces) chickpeas, drained and rinsed", "1/4 cup fresh lemon juice (about 1 large lemon)", "1/4 cup tahini", "1 small garlic clove, minced", "2 tablespoons extra-virgin olive oil", "1/2 teaspoon ground cumin", "Salt to taste", "2 to 3 tablespoons water", "Dash of paprika, for serving", "Extra virgin olive oil, for serving" },
        new List<string>() { "In a food processor, combine tahini and lemon juice. Process for 1 minute.", "Add olive oil, minced garlic, cumin, and a pinch of salt to the whipped tahini and lemon juice mixture.", "Process for 30 seconds, scrape the sides and bottom of the bowl then process another 30 seconds or until well blended.", "... (remaining instructions)" },
        userId: 1, // Replace with actual user ID
        imagePath: "../../assets/ClassicHummus.jpg"
    ),
    new Recipe(
        "Chicken Alfredo Pasta",
        5, // Category ID for Pasta
        40,
        3, // Advanced difficulty level
        DateTime.Now,
        new List<string>() { "8 ounces fettuccine pasta", "2 boneless, skinless chicken breasts, cut into bite-sized pieces", "2 tablespoons olive oil", "2 cloves garlic, minced", "1 cup heavy cream", "1 cup grated Parmesan cheese", "Salt and black pepper to taste", "Fresh parsley, chopped, for garnish" },
        new List<string>() { "Cook pasta according to package directions.", "In a large skillet, heat olive oil over medium-high heat. Add chicken and cook until browned and cooked through.", "Add minced garlic and cook until fragrant.", "Reduce heat to medium-low. Stir in heavy cream and Parmesan cheese until sauce is smooth and thickened.", "... (remaining instructions)" },
        userId: 3, // Replace with actual user ID
        imagePath: "../../assets/Chiken.jpg"
    ),
    new Recipe(
        "Tomato Basil Bruschetta",
        2, // Category ID for Appetizers
        15,
        1, // Easy difficulty level
        DateTime.Now,
        new List<string>() { "4 ripe tomatoes, diced", "1/4 cup fresh basil leaves, chopped", "2 cloves garlic, minced", "2 tablespoons extra virgin olive oil", "1 tablespoon balsamic vinegar", "Salt and black pepper to taste", "1 French baguette, sliced", "1 clove garlic, peeled" },
        new List<string>() { "In a mixing bowl, combine diced tomatoes, chopped basil, minced garlic, olive oil, and balsamic vinegar.", "Season with salt and black pepper to taste. Let the mixture sit for at least 10 minutes to allow flavors to meld.", "Preheat oven broiler. Place baguette slices on a baking sheet and toast until golden brown on both sides.", "... (remaining instructions)" },
        userId: 4, // Replace with actual user ID
        imagePath: "../../assets/TomatoBasil.jpg"
    ),
    // Adding more recipes...





    };
        // GET: api/recipes - קבלת כל המתכונים
        [HttpGet]
        public ActionResult<IEnumerable<Recipe>> Get()
        {
            return Ok(_recipes);
        }

        // GET: api/recipes/{id} - קבלת מתכון לפי מזהה
        [HttpGet("{id}")]
        public ActionResult<Recipe> Get(int id)
        {
            var recipe = _recipes.Find(r => r.RecipeId == id);
            if (recipe == null)
            {
                return NotFound();
            }
            return Ok(recipe);
        }

        // POST: api/recipes - הוספת מתכון חדש
        [HttpPost]
        public ActionResult<Recipe> Post([FromBody] Recipe recipe)
        {
            Recipe r = new Recipe(recipe.RecipeName, recipe.CategoryId, recipe.PreparationTimeInMinutes, recipe.DifficultyLevel, recipe.DateAdded, recipe.Ingredients, recipe.Instructions, recipe.UserId, recipe.ImagePath);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _recipes.Add(r);
            // return CreatedAtAction(nameof(Get), new { id = r.RecipeId }, r);
            return r;
        }

        // PUT: api/recipes/{id} - עדכון מתכון קיים
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Recipe updatedRecipe)
        {
            //if (id != updatedRecipe.RecipeId)
            //{
            //    return BadRequest();
            //}

            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            var recipe = _recipes.Find(r => r.RecipeId == id);
            if (recipe == null)
            {
                return NotFound();
            }

            recipe.RecipeName = updatedRecipe.RecipeName;
            recipe.CategoryId = updatedRecipe.CategoryId;
            recipe.PreparationTimeInMinutes = updatedRecipe.PreparationTimeInMinutes;
            recipe.DifficultyLevel = updatedRecipe.DifficultyLevel;
            recipe.Ingredients = updatedRecipe.Ingredients;
            recipe.Instructions = updatedRecipe.Instructions;
            recipe.UserId = updatedRecipe.UserId;
            recipe.ImagePath = updatedRecipe.ImagePath;

            return NoContent();
        }

        // DELETE: api/recipes/{id} - מחיקת מתכון
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var recipe = _recipes.Find(r => r.RecipeId == id);
            if (recipe == null)
            {
                return NotFound();
            }

            _recipes.Remove(recipe);
            return NoContent();
        }
    }
}
