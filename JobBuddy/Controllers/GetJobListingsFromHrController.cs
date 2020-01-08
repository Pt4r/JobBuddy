using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetJobListingsFromHrController : ControllerBase
    {
        private readonly IJobListingsRepository _jobListings;

        public GetJobListingsFromHrController(IJobListingsRepository jl)
        {
            _jobListings = jl;
        }

        //api/GetJobListingsFromHr/Id
        [HttpGet("{Id}", Name = "GetJobListingsFromHr")]
        [Route("api/GetJobListingsFromHr/{id}")]
        public IActionResult GetJobListingsFromHr(Guid hrId)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var jls = _jobListings.GetJobListings().Where(h => h.HrUserId == hrId).ToList();
            return Ok(jls);
        }
    }
}