using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Classes;
using server.NewClasses;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private static List<User> users = new List<User> { 
            new User("Ben Zcay 22","s0583213630@gmail.com","123","sara"),
            new User("Jerusalem 25", "s0548509507@gmail.com", "Golombek","sarale")
   
        };


        // GET: api/User
        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            return users;
        }

        // GET: api/User/{name}
        [HttpGet("{name}")]
        public ActionResult<User> Get(string name)
        {
            var user = users.Find(u => u.UserName == name);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }
        //// GET: api/User/{id}
        //[HttpGet("{id}")]
        //public ActionResult<User> Get(int id)
        //{
        //    var user = users.Find(u => u.UserId == id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }
        //    return user;
        //}

        // POST: api/User
        [HttpPost]
        public ActionResult<User> Post([FromBody] NewUser user)
        {
            User u = new User(user.Address, user.Email, user.Password, user.UserName);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            users.Add(u);

            return CreatedAtAction(nameof(Get), new { id = u.UserId }, user);
        }

        // PUT: api/User/{id}
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] User updatedUser)
        {
            if (id != updatedUser.UserId)
            {
                return BadRequest();
            }
            var user = users.Find(u => u.UserId == id);
            if (user == null)
            {
                return NotFound();
            }

            user.Address = updatedUser.Address;
            user.Email = updatedUser.Email;
            user.Password = updatedUser.Password;
            return NoContent();
        }

        // DELETE: api/User/{id}
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var user = users.Find(u => u.UserId == id);
            if (user == null)
            {
                return NotFound();
            }
            users.Remove(user);
            return NoContent();
        }
    }
}
