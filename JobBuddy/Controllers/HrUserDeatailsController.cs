using JobBuddy.Models;
using JobBuddy.Models.UserDetails;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Data.Repositories.IRepositories;


namespace JobBuddy.Controllers
{
    [Authorize(Roles = "Admin, HR")]
    [Route("api/[controller]")]
    [ApiController]
    public class HrUserController : Controller
    {
        private readonly IHrDetailsRepository _hrDetails;

        public HrUserController(IHrDetailsRepository hr)
        {
            _hrDetails = hr;
        }


        [HttpGet]
        public IActionResult GetAll(Guid id)
        {
            var hrs = _hrDetails.GetAll(id);

            if (hrs == null)
                return NotFound();

            return Ok(hrs);
        }

        [HttpGet("{id}", Name = "HR")]
        public IActionResult GetHr(Guid id)
        {
            var hr = _hrDetails.GetHr(id);

            if (hr == null)
                return NotFound();

            return Ok(hr);


        }

        [HttpPost("Create")]
        [ProducesResponseType(201, Type = typeof(HrUserDetails))]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult Create([FromBody]HrUserDetails hrUserDetails)
        {
            if (hrUserDetails == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_hrDetails.AddHr(hrUserDetails))
            {
                ModelState.AddModelError("", $"Something went wrong with saving ");
                return StatusCode(500, ModelState);
            }

            return CreatedAtRoute("HR", new { id = hrUserDetails.Id }, hrUserDetails);

        }

        [HttpDelete("Delete/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult DeleteHr([FromBody]HrUserDetails hrToDelete)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            if(_hrDetails.GetJobListingsFromHr(hrToDelete.Id).Any() )
            {
                ModelState.AddModelError("", $"There are open Job Listing binded to this account. Delete them first if you want to proceed.");
                return StatusCode(409);
            }

            if (!_hrDetails.DeleteHr(hrToDelete))
            {
                ModelState.AddModelError("", "Something went wrong deleting HR user");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }

        [HttpPut("Update/{Id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult UpdateHr(Guid id, [FromBody]HrUserDetails updatedHrUserDetails)
        {
            if (updatedHrUserDetails == null)
                return BadRequest(ModelState);

            if (id != updatedHrUserDetails.Id)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_hrDetails.UpdateHr(updatedHrUserDetails))
            {
                ModelState.AddModelError("", $"Something went wrong updating HR user");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
    }
}
