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
    public class HrUserController : Controller
    {
        private readonly IHrDetailsRepository _hrDetails;

        public HrUserController(IHrDetailsRepository hr)
        {
            _hrDetails = hr;
        }



        //api/HrUser
        [HttpGet]
        [Route("api/HrUser/{id}")]
        public IActionResult GetHr(Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var hr = _hrDetails.GetHr(id);

            if (hr == null)
            {
                return NotFound();
            }

            return Ok(hr);


        }

        //api/hrs
        [HttpGet("{Id}", Name = "GetHrs")]
        [Route("api/HrUser")]
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
        [Route("api/HrUser/Create")]
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
                ModelState.AddModelError("", $"Something went wrong with saving ");
                return StatusCode(500, ModelState);
            }

            return CreatedAtRoute("GetHr", new { id = hrUserDetails.Id }, hrUserDetails);

        }

        //api/hrUserDetails/Id
        [HttpPut("{Id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [Route("api/HrUser/Update")]
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
                ModelState.AddModelError("", $"Something went wrong updating ");
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
        [Route("api/HrUser/Delete/{id}")]
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
                ModelState.AddModelError("", $"Something went wrong deleting ");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }


        //{hrUserDetails.ApplicationUser.FirstName} {hrUserDetails.ApplicationUser.LastName}









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
