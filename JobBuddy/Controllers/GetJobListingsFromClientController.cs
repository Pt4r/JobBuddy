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
    public class GetJobListingsFromClientController : ControllerBase
    {
        private readonly IClientRepository _client;

        public GetJobListingsFromClientController(IClientRepository client)
        {
            _client = client;
        }

        //api/GetJobListingsFromClient/Id
        [HttpGet("{Id}", Name = "GetJobListingsFromClient")]
        [Route("api/GetJobListingsFromClient/{id}")]
        public IActionResult GetJobListingsFromClient(Guid clId)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var jobListing = _client.GetJobListingsFromClient(clId).ToList();
            return Ok(jobListing);
        }
        //
    }
}