using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace JobBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetClientsFromJobListingController : Controller
    {
        private readonly IJobListingsRepository _jobListings;

        public GetClientsFromJobListingController(IJobListingsRepository jl)
        {
            _jobListings = jl;
        }

        //api/GetClientsFromJobListing/Id
        [HttpGet("{Id}", Name = "GetClientsFromJobListing")]
        [Route("api/GetClientsFromJobListing/{id}")]
        public IActionResult GetClientsFromJobListing(Guid jlId)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var clients = _jobListings.GetClientsFromJobListing(jlId).ToList();
            return Ok(clients);
        }
    }
}