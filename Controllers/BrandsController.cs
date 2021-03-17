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
    // All of these routes will be at the base URL:     /api/Brands
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case BrandsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class BrandsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public BrandsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Brands
        //
        // Returns a list of all your Brands
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Brand>>> GetBrands()
        {
            // Uses the database context in `_context` to request all of the Brands, sort
            // them by row id and return them as a JSON array.
            return await _context.Brands.OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/Brands/5
        //
        // Fetches and returns a specific brand by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Brand>> GetBrand(int id)
        {
            // Find the brand in the database using `FindAsync` to look it up by id
            var brand = await _context.Brands.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (brand == null)
            {
                // Return a `404` response to the client indicating we could not find a brand with this id
                return NotFound();
            }

            //  Return the brand as a JSON object.
            return brand;
        }

        // PUT: api/Brands/5
        //
        // Update an individual brand with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Brand
        // variable named brand. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Brand POCO class. This represents the
        // new values for the record.
        //
        // [HttpPut("{id}")]
        // public async Task<IActionResult> PutBrand(int id, Brand brand)
        // {
        //     // If the ID in the URL does not match the ID in the supplied request body, return a bad request
        //     if (id != brand.Id)
        //     {
        //         return BadRequest();
        //     }

        //     // Tell the database to consider everything in brand to be _updated_ values. When
        //     // the save happens the database will _replace_ the values in the database with the ones from brand
        //     _context.Entry(brand).State = EntityState.Modified;

        //     try
        //     {
        //         // Try to save these changes.
        //         await _context.SaveChangesAsync();
        //     }
        //     catch (DbUpdateConcurrencyException)
        //     {
        //         // Ooops, looks like there was an error, so check to see if the record we were
        //         // updating no longer exists.
        //         if (!BrandExists(id))
        //         {
        //             // If the record we tried to update was already deleted by someone else,
        //             // return a `404` not found
        //             return NotFound();
        //         }
        //         else
        //         {
        //             // Otherwise throw the error back, which will cause the request to fail
        //             // and generate an error to the client.
        //             throw;
        //         }
        //     }

        //     // Return a copy of the updated data
        //     return Ok(brand);
        // }

        // POST: api/Brands
        //
        // Creates a new brand in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Brand
        // variable named brand. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Brand POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Brand>> PostBrand(Brand brand)
        {
            // Indicate to the database context we want to add this new record
            _context.Brands.Add(brand);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetBrand", new { id = brand.Id }, brand);
        }

        // DELETE: api/Brands/5
        //
        // Deletes an individual brand with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBrand(int id)
        {
            // Find this brand by looking for the specific id
            var brand = await _context.Brands.FindAsync(id);
            if (brand == null)
            {
                // There wasn't a brand with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Brands.Remove(brand);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(brand);
        }

        // Private helper method that looks up an existing brand by the supplied id
        private bool BrandExists(int id)
        {
            return _context.Brands.Any(brand => brand.Id == id);
        }
    }
}
