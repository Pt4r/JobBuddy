﻿using JobBuddy.Models;
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
    public class JobListingsController : Controller
    {
        private readonly IJobListingsRepository _jobListings;

        public JobListingsController(IJobListingsRepository jl)
        {
            _jobListings = jl;
        }




        [HttpGet]
        [Route("api/JobListings/{id}")]
        public IActionResult GetJobListing(Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var jobListing = _jobListings.GetJobListing(id);

            if (jobListing == null)
            {
                return NotFound();
            }

            return Ok(jobListing);
        }


        //api/JobListings
        [HttpGet("{Id}", Name = "GetJobListings")]
        [Route("api/JobListings")]
        public IActionResult GetJobListings()
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var jls = _jobListings.GetJobListings().ToList();
            return Ok(jls);
        }

        //api/JobListings
        [HttpPost]
        [Route("api/JobListings/Create")]
        [ProducesResponseType(201, Type = typeof(JobListing))]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult CreateJobListing([FromBody]JobListing jobListing)
        {
            if (jobListing == null)
            {
                return BadRequest(ModelState);
            }

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_jobListings.AddJobListing(jobListing))
            {
                ModelState.AddModelError("", $"Something went wrong with saving {jobListing.Title}");
                return StatusCode(500, ModelState);
            }

            return CreatedAtRoute("GetJobListing", new { id = jobListing.Id }, jobListing);

        }

        //api/JobListings/Id
        [HttpPut("{Id}")]
        [Route("api/JobListings/Update")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult UpdateJobListing(Guid jlId, [FromBody]JobListing updatedJobListing)
        {
            if (updatedJobListing == null)
                return BadRequest(ModelState);

            if (jlId != updatedJobListing.Id)
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

        //api/JobListings/Id
        [HttpDelete("{Id}")]
        [Route("api/JobListings/Delete/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult DeleteJobListing(Guid jlId)
        {
            var jlToDelete = _jobListings.GetJobListing(jlId);


            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_jobListings.DeleteJobListing(jlToDelete))
            {
                ModelState.AddModelError("", $"Something went wrong deleting {jlToDelete.Title}");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }


 

        //api/JobListings/JobListingId/ClientUsers
        [HttpGet("{Id}", Name = "GetClientsFromJobListing")]
        [Route("api/JobListings/{id}/ClientUsers")]
        public IActionResult GetClientsFromJobListing(Guid jlId)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var clients = _jobListings.GetClientsFromJobListing(jlId).ToList();
            return Ok(clients);
        }




        [HttpGet("{Id}", Name = "GetJobListingsFromHr")]
        public IActionResult GetJobListingsFromHr(Guid hrId)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var jls = _jobListings.GetJobListings().Where(h=>h.HrUserId == hrId).ToList();
            return Ok(jls);
        }
              
    }
}