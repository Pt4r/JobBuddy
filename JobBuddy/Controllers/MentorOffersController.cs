using JobBuddy.Data.Repositories.IRepositories;
using JobBuddy.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace JobBuddy.Controllers
{
    //** TODO **

    [Authorize(Roles = "Admin, Client, Mentor, HR")]
    [Route("api/[controller]")]
    [ApiController]
    public class MentorOffersController:Controller
    {

       
            private IMentorOfferRepository _mentorOfferRepository;


            public MentorOffersController(IMentorOfferRepository mentorOfferRepository)
            {
                _mentorOfferRepository = mentorOfferRepository;
            }


            [HttpGet]
            [Route("api/MentorOffers")]
            public IActionResult GetMentorOffers(Guid id)
            {
                var mentors = _mentorOfferRepository.GetAll(id).ToList();


                return Ok(mentors);
            }


            //[HttpGet]
            //[Route("api/Mentors/{id}")]
            //public IActionResult GetMentorsById(Guid id)
            //{
            //    if (!ModelState.IsValid)
            //    {
            //        return BadRequest();
            //    }

            //    var mentor = _mentorOfferRepository.FindMentorbyId(id);

            //    if (mentor == null)
            //    {
            //        return NotFound();
            //    }

            //    return Ok(mentor);


      


            [HttpPost]

            [Route("api/MentorOffers/Create")]

            public IActionResult Create([FromBody]MentorOffer mentorOffer)
            {
                if (mentorOffer == null)
                {
                    return BadRequest(ModelState);
                }
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }
                _mentorOfferRepository.AddMentorOffer(mentorOffer);

                return Ok();
            }

            [HttpDelete]


            [Route("api/MentorOffers/Delete/{id}")]



            public IActionResult Delete(Guid id)

            {

                bool removed = _mentorOfferRepository.DeleteMentorOffer(id);

                if (!removed)
                {
                    return NotFound();
                    //return BadRequest
                }

                return Ok();


            }


            [HttpPut, HttpPatch]

            [Route("api/MentorOffers/Update")]

            public IActionResult Update([FromBody]MentorOffer mentorOffer)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }

                var updated = _mentorOfferRepository.UpdateMentorOffer(mentorOffer);

                if (!updated)
                {
                    return BadRequest();
                }

                return Ok();
            }




        
    }

}
