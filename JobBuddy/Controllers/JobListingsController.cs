using JobBuddy.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Data.Repositories.IRepositories;
using Microsoft.AspNetCore.Authorization;

namespace JobBuddy.Controllers
{
    [Authorize(Roles = "Admin, Client, Mentor, HR")]
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(Roles = "Admin")]
    public class JobListingsController : ControllerBase
    {
        private readonly IJobListingsRepository _jobListings;

        public JobListingsController(IJobListingsRepository jobListingsRepository)
        {
            _jobListings = jobListingsRepository;
        }


        [HttpGet]
        public IActionResult GetAll()
        {
            var jobListings = _jobListings.GetJobListings().ToList();
            return Ok(jobListings);
        }


        [HttpGet("{id}", Name = "JobListing")]
        public IActionResult Get(Guid id)
        {
            var jobListing = _jobListings.GetJobListing(id);

            if (jobListing == null)
            {
                return NotFound();
            }

            return Ok(jobListing);
        }
        

        [HttpPost("Create")]
        [ProducesResponseType(201, Type = typeof(JobListing))]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult Create([FromBody]JobListing jobListing)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_jobListings.AddJobListing(jobListing))
            {
                ModelState.AddModelError("", $"Something went wrong with saving {jobListing.Title}");
                return StatusCode(500, ModelState);
            }

            return CreatedAtRoute(routeName:"JobListing",routeValues: new { id = jobListing.Id },value: jobListing);

        }


        [HttpPut("Update/{Id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult Update(Guid Id, [FromBody]JobListing updatedJobListing)
        {
            if (Id != updatedJobListing.Id)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_jobListings.UpdateJobListing(updatedJobListing))
            {
                ModelState.AddModelError("", $"Something went wrong updating {updatedJobListing.Title}");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }


        [HttpDelete("Delete/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult Delete([FromBody]JobListing jobListing)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            if (!_jobListings.DeleteJobListing(jobListing))
            {
                ModelState.AddModelError("", $"Something went wrong deleting {jobListing.Title}");
                return StatusCode(500, ModelState);
            }
            return Ok();
        }

        
        [HttpGet("HrJobListings/{Id}")]
        public IActionResult HrJobListings(Guid Id)
        {
            var jobListings = _jobListings.GetJobListingsFromHr(Id).ToList();
            return Ok(jobListings);
        }

        
        [HttpGet("ClientJobListings/{Id}")]
        public IActionResult ClientJobListings(Guid Id)
        {
            var jobListing = _jobListings.GetJobListingsFromClient(Id).ToList();
            return Ok(jobListing);
        }
    }
}