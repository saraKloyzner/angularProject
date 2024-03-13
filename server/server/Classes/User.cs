namespace server.Classes
{
    public class User//לא בדוק
    {
        private static int id = 0;
        public  int UserId { get; } 
        public string UserName { set; get; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public User( string address, string email, string password,string name)
        {
            id++;
            UserId = id;
            Address = address;
            Email = email;
            Password = password;
            UserName=name;
        }
    }
}
