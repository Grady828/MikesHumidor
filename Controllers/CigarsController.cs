using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MikesHumidor.Models;

namespace MikesHumidor.Controllers
{
    // All of these routes will be at the base URL:     /api/Cigars
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case CigarsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class CigarsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public CigarsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Cigars
        //
        // Returns a list of all your Cigars
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cigar>>> GetCigars(string filter)

        {
            // Find the cigar in the database using Include to ensure we have the associated reviews
            
            // Uses the database context in `_context` to request all of the Cigars, sort
            // them by row id and return them as a JSON array.
            return await _context.Cigars.Include(cigar => cigar.Brand).OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/Cigars/5
        //
        // Fetches and returns a specific cigar by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //

        
        [HttpGet("{id}")]
        public async Task<ActionResult<Cigar>> GetCigar(int id)
        {
            // Find the cigar in the database using `FindAsync` to look it up by id
            // var cigar = await _context.Cigars.FindAsync(id);
            var cigar = await _context.Cigars.Include(cigar => cigar.Brand).Where(cigar => cigar.Id == id).FirstOrDefaultAsync();

            // If we didn't find anything, we receive a `null` in return
            if (cigar == null)
            {
                // Return a `404` response to the client indicating we could not find a cigar with this id
                return NotFound("Cigar is not found.");
            }

            //  Return the cigar as a JSON object.
            return cigar;
        }

        // PUT: api/Cigars/5
        //
        // Update an individual cigar with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Cigar
        // variable named cigar. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Cigar POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCigar(int id, Cigar cigar)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != cigar.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in cigar to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from cigar
            _context.Entry(cigar).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!CigarExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(cigar);
        }

        // POST: api/Cigars
        //
        // Creates a new cigar in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Cigar
        // variable named cigar. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Cigar POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Cigar>> PostCigar(Cigar cigar)
        {
            // Indicate to the database context we want to add this new record
            _context.Cigars.Add(cigar);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetCigar", new { id = cigar.Id }, cigar);
        }

        // DELETE: api/Cigars/5
        //
        // Deletes an individual cigar with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCigar(int id)
        {
            // Find this cigar by looking for the specific id
            var cigar = await _context.Cigars.FindAsync(id);
            if (cigar == null)
            {
                // There wasn't a cigar with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Cigars.Remove(cigar);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(cigar);
        }

        // Private helper method that looks up an existing cigar by the supplied id
        private bool CigarExists(int id)
        {
            return _context.Cigars.Any(cigar => cigar.Id == id);
        }
    }
}
