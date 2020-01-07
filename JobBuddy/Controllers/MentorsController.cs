using JobBuddy.Models;
using JobBuddy.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Controllers
{
    
    [ApiController]
    public class MentorsController : Controller
    {
        private IMentorRepository _mentorRepository;


        public MentorsController(IMentorRepository mentorRepository)
        {
            _mentorRepository = mentorRepository;
        }


        [HttpGet]
        [Route("api/Mentors")]
        public IActionResult GetMentors(/*string id*/)
        {
            var mentors = _mentorRepository.GetMentors(/*id*/).ToList();

            if (mentors.Count == 0)
            {
                return NotFound();
            }

            return Ok(mentors);
        }

       
        [HttpGet]
        [Route("api/Mentors/{id}")]
        public IActionResult GetMentorsById(Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var mentor = _mentorRepository.FindMentorbyId(id);

            if (mentor == null)
            {
                return NotFound();
            }

            return Ok(mentor);


        }


        [HttpPost]
        [Route("api/Mentors/Create")]
        [ValidateAntiForgeryToken]
        public IActionResult Create([FromBody]MentorUserDetails mentor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            _mentorRepository.AddMentor(mentor);
            return Ok();
        }

        [HttpDelete]

        [ValidateAntiForgeryToken]

        [Route("api/Mentors/Delete/{id}")]
        public IActionResult Delete(Guid id)

        {

            bool removed = _mentorRepository.DeleteMentor(id);

            if (!removed)
            {
                return NotFound();
                //return BadRequest
            }

            return Ok();


        }


        [HttpPut,HttpPatch]

        [ValidateAntiForgeryToken]

        [Route("api/Mentors/Update")]

        public IActionResult Update([FromBody]MentorUserDetails mentor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var updated = _mentorRepository.UpdateMentor(mentor);

            if (!updated)
            {
                return BadRequest();
            }

            return Ok();
        }




    }
}
