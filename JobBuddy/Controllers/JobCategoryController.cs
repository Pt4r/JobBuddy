using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobBuddy.Controllers
{
    [Route("api/[jobcategory]")]
    [ApiController]
    public class JobCategoryController : ControllerBase
    {
        private IJobCategoriesRepository _jobCategoryRepository;
        public JobCategoryController(IJobCategoriesRepository jobCategoryRepository)
        {
            _jobCategoryRepository = jobCategoryRepository;
        }

        [HttpGet]
        public IActionResult GetJobCat()
        {
            var jobcategories = _jobCategoryRepository.GetJobCategories().ToList();
            return Ok(jobcategories);
        }
        
        [HttpPost]
        public IActionResult CreateJobCat([FromBody]JobCategory jobcategorycreated)
        {
             _jobCategoryRepository.CreateJobCategory(jobcategorycreated);
            return Ok();
        }

        [HttpPost]
        public IActionResult UpdateJobCat([FromBody]JobCategory jobcategorycreated)
        {
            _jobCategoryRepository.UpdateJobCategory(jobcategorycreated);
            return Ok();
        }

        [HttpPost]
        public IActionResult DeleteJobCat([FromBody]JobCategory jobcategorycreated)
        {
            _jobCategoryRepository.DeleteJobCategory(jobcategorycreated);
            return Ok();
        }

    }
}