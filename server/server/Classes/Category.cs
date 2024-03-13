namespace server.Classes
{
    public class Category
    {
        private static int id = 0;
        public int CategoryId { get; }
        public string Name { get; set; }
        public string IconPath { get; set; }
        public Category(string name, string iconPath)
        {
            id++;
            CategoryId = id;
            Name = name;
            IconPath = iconPath;
        }
    }
}
