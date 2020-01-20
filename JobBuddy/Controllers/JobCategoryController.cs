using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobBuddy.Controllers
{
    
    [ApiController]
    public class JobCategoryController : ControllerBase
    {
        private IJobCategoriesRepository _jobCategoryRepository;
        public JobCategoryController(IJobCategoriesRepository jobCategoryRepository)
        {
            _jobCategoryRepository = jobCategoryRepository;
        }

        //api/JobCategory
        [HttpGet]
        [Route("api/JobCategories")]
        public IActionResult GetJobCategory(string id)
        {
            var jobcategories = _jobCategoryRepository.GetJobCategories().ToList();
            return Ok(jobcategories);
        }

        ////api/JobCategory/id
        //[HttpPost]
        //public IActionResult CreateJobCat([FromBody]JobCategory jobcategorycreated)
        //{
        //     _jobCategoryRepository.AddJobCategory(jobcategorycreated);
        //    return Ok();
        //}

        //api/JobCategory
        [HttpPost]
        [Route("api/JobCategories/Create")]
        //[ValidateAntiForgeryToken]
        public IActionResult CreateJobCategory([FromBody]JobCategory jobcategorycreated)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            _jobCategoryRepository.AddJobCategory(jobcategorycreated);
            return Ok();
        }

        //api/JobCategory/id
        [HttpDelete]
        [ValidateAntiForgeryToken]
        [Route("api/JobCategories/Delete/{id}")]
        public IActionResult DeleteJobCategory(Guid id)
        {
            bool removed = _jobCategoryRepository.DeleteJobCategory(id);
            if (!removed)
            {
                return NotFound();
                
            }

            return Ok();

        }
        //api/JobCategory/id
        [HttpPut, HttpPatch]
        [ValidateAntiForgeryToken]
        [Route("api/JobCategories/Update")]
        public IActionResult UpdateJobCategory([FromBody]JobCategory jobcategorycreated)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            _jobCategoryRepository.UpdateJobCategory(jobcategorycreated);
            return Ok();
        }
    }
}