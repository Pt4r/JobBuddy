using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Models;
//using System.Web.Http;
using JobBuddy.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HrUserDeatailsController : Controller
    {
        private readonly IHrDetailsRepository _hrDetails;

        public HrUserDeatailsController(IHrDetailsRepository hr)
        {
            _hrDetails = hr;
        }

        //api/hrs
        [HttpGet("{Id}", Name = "GetHrs")]
        public IActionResult GetHrs(string hrId)
        {
            var hrs = _hrDetails.GetHrs(hrId).ToList();
            return Ok(hrs);
        }

        //api/hrUserDetails
        [HttpPost]
        [ProducesResponseType(201, Type = typeof(HrUserDetails))]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult CreateHr([FromBody]HrUserDetails hrUserDetails)
        {
            if (hrUserDetails == null)
            {
                return BadRequest(ModelState);
            }

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_hrDetails.AddHr(hrUserDetails))
            {
                ModelState.AddModelError("", $"Something went wrong with saving {hrUserDetails.ApplicationUser.FirstName} {hrUserDetails.ApplicationUser.LastName}");
                return StatusCode(500, ModelState);
            }

            return CreatedAtRoute("GetHr", new { id = hrUserDetails.Id }, hrUserDetails);

        }

        //api/hrUserDetails/Id
        [HttpPut("{Id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult UpdateHr(Guid hrId, [FromBody]HrUserDetails updatedHrUserDetails)
        {
            if (updatedHrUserDetails == null)
                return BadRequest(ModelState);

            if (hrId != updatedHrUserDetails.Id)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_hrDetails.UpdateHr(updatedHrUserDetails))
            {
                ModelState.AddModelError("", $"Something went wrong updating {updatedHrUserDetails.ApplicationUser.FirstName} {updatedHrUserDetails.ApplicationUser.LastName}");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }

        //api/hrUserDetails/Id
        [HttpDelete("{Id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(409)]
        [ProducesResponseType(500)]
        public IActionResult DeleteHr(Guid hrId)
        {
            var hrToDelete = _hrDetails.GetHr(hrId);

            if(_hrDetails.GetJobListingsFromHr(hrId).Count()>0 )
            {
                ModelState.AddModelError("", $"There are open Job Listing binded to this account. Delete them first if you want to proceed.");
                return StatusCode(409);
            }
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_hrDetails.DeleteHr(hrToDelete))
            {
                ModelState.AddModelError("", $"Something went wrong deleting {hrToDelete.ApplicationUser.FirstName} {hrToDelete.ApplicationUser.LastName}");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }












        //// GET: api/HrUserDeatails
        //[HttpGet]
        //public IHttpActionResult Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET: api/HrUserDeatails/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/HrUserDeatails
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT: api/HrUserDeatails/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
