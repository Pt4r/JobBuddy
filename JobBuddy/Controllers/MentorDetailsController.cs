using JobBuddy.Models;
using JobBuddy.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Controllers
{
    [Route("api/Mentors")]
    [ApiController]
    public class MentorDetailsController : Controller
    {
        private IMentorRepository _mentorRepository;


        public MentorDetailsController(IMentorRepository mentorRepository)
        {
            _mentorRepository = mentorRepository;
        }


        [HttpGet]
        [Route("GetMentors")]
        public IActionResult GetMentors()
        {
            try
            {
                var mentors = _mentorRepository.GetAllMentorDetails().ToList();
                if (mentors==null)
                {
                    return NotFound();
                }

                return Ok(mentors);

            }
            catch (Exception)
            {

                return BadRequest();
            }
            


           
        }


        [HttpGet]
        [Route("GetMentors/{id}")]
        public IActionResult GetMentorsById(Guid id)
        {

            try
            {
                var mentor = _mentorRepository.FindMentorDetailsbyId(id);

                if (mentor == null)
                {
                    return NotFound();
                }

                return Ok(mentor);
            }
            catch (Exception)
            {

                return BadRequest();
            }
            

         


        }


        [HttpPost]

        [Route("CreateMentor")]

        public IActionResult Create([FromBody]MentorUserDetails mentor)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            try
            {
                _mentorRepository.AddMentorDetails(mentor);

                return Ok();
            }
            catch (Exception)
            {

                return BadRequest();
            }
            
        }

        [HttpDelete]


        [Route("DeleteMentor/{id}")]



        public IActionResult Delete(Guid id)

        {

            bool removed = _mentorRepository.DeleteMentorDetails(id);

            try
            {
                if (!removed)
                {
                    return NotFound();
                    //return BadRequest
                }

                return Ok();
            }
            catch (Exception)
            {

                return BadRequest();
            }
           


        }


        [HttpPut, HttpPatch]

        [Route("UpdateMentor")]
        public IActionResult Update([FromBody]MentorUserDetails mentor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var updated = _mentorRepository.UpdateMentorDetails(mentor);
            try
            {
                if (!updated)
                {
                    return NotFound();
                }

                return Ok();

            }
            catch (Exception)
            {

                return BadRequest();
            }
           
        }




    }
}
