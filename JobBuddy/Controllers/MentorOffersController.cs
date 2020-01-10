using JobBuddy.Models;
using JobBuddy.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class MentorOffersController : Controller
    {


        private IMentorOfferRepository _mentorOfferRepository;


        public MentorOffersController(IMentorOfferRepository mentorOfferRepository)
        {
            _mentorOfferRepository = mentorOfferRepository;
        }


        [HttpGet]
        [Route("GetMentorOffers")]
        public IActionResult GetMentorOffers(Guid id)
        {
            var mentors = _mentorOfferRepository.GetMentorOffers(id).ToList();


            return Ok(mentors);
        }


        [HttpGet]
        [Route("GetMentorOffers/{id}")]
        public IActionResult GetMentorsById(Guid id)
        {
            try
            {
                var mentorOffer = _mentorOfferRepository.FindMentorOfferbyId(id);

                if (mentorOffer == null)
                {
                    return NotFound();
                }

                return Ok(mentorOffer);

            }
            catch (Exception)
            {

                return BadRequest();
            }

            

        }


        [HttpPost]

        [Route("CreateMentorOffer")]

        public IActionResult Create([FromBody]MentorOffer mentorOffer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            try
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
            catch (Exception)
            {

                return BadRequest();
            }
            
        }

        [HttpDelete]


        [Route("DeleteMentorOffer/{id}")]



        public IActionResult Delete(Guid id)

        {

            bool removed = _mentorOfferRepository.DeleteMentorOffer(id);
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

        [Route("UpdateMentorOffer")]

        public IActionResult Update([FromBody]MentorOffer mentorOffer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }


            var updated = _mentorOfferRepository.UpdateMentorOffer(mentorOffer);

            try
            {
                if (!updated)
                {
                    return BadRequest();
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
