using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Data.Repositories.IRepositories;
using JobBuddy.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobBuddy.Controllers
{

    [Authorize(Roles = "Admin, Client, Mentor, HR")]
    [Route("api/[controller]")]
    [ApiController]
    public class JobCategoryController : ControllerBase
    {
        private IJobCategoriesRepository _jobCategoryRepository;
        public JobCategoryController(IJobCategoriesRepository jobCategoryRepository)
        {
            _jobCategoryRepository = jobCategoryRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var jobCategories = _jobCategoryRepository.GetAll();

            if (jobCategories == null)
                return NotFound();

            return Ok(jobCategories);
        }


        [HttpGet("{id}", Name = "JobCategory")]
        public IActionResult GetJobCategory(Guid id)
        {
            var jobCategories = _jobCategoryRepository.GetJobCategory(id);

            if (jobCategories == null)
                return NotFound();

            return Ok(jobCategories);
        }


        [HttpPost("Create")]
        [ProducesResponseType(201, Type = typeof(JobCategory))]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult CreateJobCategory([FromBody]JobCategory jobCategoryCreated)
        {
            if (jobCategoryCreated == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_jobCategoryRepository.AddJobCategory(jobCategoryCreated))
            {
                ModelState.AddModelError("", "Something went wrong.");
                return StatusCode(500, ModelState);
            }

            return CreatedAtRoute("JobCategory", new { id = jobCategoryCreated.Id }, jobCategoryCreated);
        }

        [HttpDelete("Delete/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult DeleteJobCategory([FromBody]JobCategory jobCategory)
        { 
            if (!ModelState.IsValid)
                return BadRequest();

            if (jobCategory == null)
            {
                ModelState.AddModelError("", "Can't find client.");
                return StatusCode(500, ModelState);
            }

            if (!_jobCategoryRepository.DeleteJobCategory(jobCategory))
            {
                ModelState.AddModelError("", "Something went wrong deleting client.");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }


        [HttpPut("Update/{Id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult UpdateJobCategory(Guid id, [FromBody]JobCategory jobCategoryCreated)
        {
            if (jobCategoryCreated == null)
                return BadRequest(ModelState);

            if (id != jobCategoryCreated.Id)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_jobCategoryRepository.UpdateJobCategory(jobCategoryCreated))
            {
                ModelState.AddModelError("", "Something went wrong updating client.");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
    }
}