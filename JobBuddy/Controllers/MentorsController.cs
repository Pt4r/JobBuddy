using JobBuddy.Data.Repositories.IRepositories;
using JobBuddy.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Models.UserDetails;

namespace JobBuddy.Controllers
{
    [Authorize(Roles = "Admin, Client, Mentor")]
    [Route("api/[controller]")]
    [ApiController]
    public class MentorsController : Controller
    {
        private readonly IMentorRepository _mentorRepository;

        public MentorsController(IMentorRepository mentorRepository)
        {
            _mentorRepository = mentorRepository;
        }


        [HttpGet]
        public IActionResult GetAll()
        {
            var mentors = _mentorRepository.GetAll();

            if (mentors == null)
                return NotFound();

            return Ok(mentors);
        }


        [HttpGet("{id}", Name = "Mentor")]
        public IActionResult Get(Guid id)
        {
            var mentor = _mentorRepository.GetMentor(id);

            if (mentor == null)
                return NotFound();

            return Ok(mentor);
        }


        [HttpPost("Create")]
        [ProducesResponseType(201, Type = typeof(MentorUserDetails))]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]

        public IActionResult Create([FromBody]MentorUserDetails mentor)
        {
            if (mentor == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_mentorRepository.AddMentor(mentor))
            {
                ModelState.AddModelError("", "Something went wrong.");
                return StatusCode(500, ModelState);
            }

            return CreatedAtRoute("Mentor", new { id = mentor.Id }, mentor);
        }


        [HttpDelete("Delete")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult Delete([FromBody]MentorUserDetails mentorToDelete)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            if (mentorToDelete == null)
            {
                ModelState.AddModelError("", "Can't find client.");
                return StatusCode(500, ModelState);
            }

            if (!_mentorRepository.DeleteMentor(mentorToDelete))
            {
                ModelState.AddModelError("", "Something went wrong deleting client.");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }


        [HttpPut("Update/{Id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult Update(Guid id, [FromBody]MentorUserDetails mentor)
        {
            if (mentor == null)
                return BadRequest(ModelState);

            if (id != mentor.Id)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_mentorRepository.UpdateMentor(mentor))
            {
                ModelState.AddModelError("", "Something went wrong updating client.");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
    }
}
