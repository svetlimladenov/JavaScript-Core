using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly TodoContext context;

        public BooksController(TodoContext context)
        {
            this.context = context;
            if (!this.context.Books.Any())
            {
                var book = new Book()
                {
                    Author = "Ivan Vazov",
                    Title = "Under the Yoke"
                };
                var secondBook = new Book()
                {
                    Author = "Svetlin Mladenov",
                    Title = "Authobiography"
                };
                this.context.Books.Add(book);
                this.context.Books.Add(secondBook);
                this.context.SaveChanges();
            }
        }

        //GET api/books
        [HttpGet]
        public IEnumerable<Book> AllBooks()
        {
            return this.context.Books.ToArray();
        }

        // GET: api/Todo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            var book = await context.Books.FindAsync(id);

            if (book == null)        
            {
                return NotFound();
            }

            return book;
        }

        [HttpPost]
        public async Task<ActionResult<Book>> PostTodoItem(Book book)
        {
            this.context.Books.Add(book);
            await this.context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBook), new { id = book.Id }, book);
        }
    }
}