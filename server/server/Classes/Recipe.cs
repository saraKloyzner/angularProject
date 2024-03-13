using Microsoft.VisualBasic;

namespace server.Classes
{
    public class Recipe//זה לא בדוק
    {
        //  public   static  int  = 0;

        private static int id = 0;
        public  int RecipeId { get; }//לבדוק אבטחה!
        public string RecipeName { get; set; }
        public int CategoryId { get; set; }
        public int PreparationTimeInMinutes { get; set; }
        public int DifficultyLevel { get; set; }
        public DateTime DateAdded { get; set; }
        public List<string> Ingredients { get; set; }//רכיבים
        public List<string> Instructions { get; set; }
        public int UserId { get; set; }
        public string ImagePath { get; set; }

        // ...

        //public Recipe()
        //{
        //    Ingredients = new List<string>();
        //    Instructions = new List<string>();
        //}
        public Recipe(string recipeName, int categoryId, int preparationTimeInMinutes, int difficultyLevel,
        DateTime dateAdded, List<string> ingredients, List<string> instructions, int userId,
        string imagePath)
        {
            id++;
            RecipeId = id;
            RecipeName = recipeName;
            CategoryId = categoryId;
            PreparationTimeInMinutes = preparationTimeInMinutes;
            DifficultyLevel = difficultyLevel;
            DateAdded = dateAdded;
            Ingredients = ingredients;
            Instructions = instructions;
            UserId = userId;
            ImagePath = imagePath;
        }


        // ...



    }
}
