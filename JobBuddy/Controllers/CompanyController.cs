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
    public class CompanyController : ControllerBase
    {
        private ICompanyRepository _companyRepository;
        public CompanyController(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }

        //api/JobCategory
        [HttpGet]
        [Route("api/Companies")]
        public IActionResult GetCompany(string id)
        {
            var companies = _companyRepository.GetCompanies().ToList();
            return Ok(companies);
        }

        
        //api/Company
        [HttpPost]
        [Route("api/Companies/Create")]
        [ValidateAntiForgeryToken]
        public IActionResult CreateCompany([FromBody]Company companycreated)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            _companyRepository.AddCompany(companycreated);
            return Ok();
        }

        //api/Company/id
        [HttpDelete]
        [ValidateAntiForgeryToken]
        [Route("api/Companies/Delete/{id}")]
        public IActionResult DeleteJobCategory(Guid id)
        {
            bool removed = _companyRepository.DeleteCompany(id);
            if (!removed)
            {
                return NotFound();

            }

            return Ok();

        }
        //api/Company/id
        [HttpPut, HttpPatch]
        [ValidateAntiForgeryToken]
        [Route("api/JobCategories/Update")]
        public IActionResult UpdateJobCategory([FromBody]Company companycreated)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            _companyRepository.UpdateCompany(companycreated);
            return Ok();
        }
    }
}