using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Data.Repositories.IRepositories;
using JobBuddy.Models;
using JobBuddy.Models.UserDetails;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobBuddy.Controllers
{

    [Authorize(Roles = "Admin, Client, Mentor, HR")]
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private ICompanyRepository _companyRepository;
        public CompanyController(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var companies = _companyRepository.GetAll();

            if (companies == null)
            {
                return NotFound();
            }

            return Ok(companies);
        }


        [HttpGet("{id}", Name = "Company")]
        public IActionResult GetCompany(Guid id)
        {
            var companies = _companyRepository.GetCompany(id);
            if (companies == null)
            {
                return NotFound();
            }
            return Ok(companies);
        }

        
        [HttpPost("Create")]
        [ProducesResponseType(201, Type = typeof(Company))]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult Create([FromBody]Company companyCreated)
        {
            if (companyCreated == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (!_companyRepository.AddCompany(companyCreated))
            {
                ModelState.AddModelError("", "Something went wrong on creating a Company.");
                return StatusCode(500, ModelState);
            }
            
            return CreatedAtRoute("Company", new { id = companyCreated.Id }, companyCreated);
        }


        [HttpDelete("Delete/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult DeleteJobCategory([FromBody]Company company)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            if (company == null)
            {
                ModelState.AddModelError("", "Can't find Company.");
                return StatusCode(500, ModelState);
            }

            if (!_companyRepository.DeleteCompany(company))
            {
                ModelState.AddModelError("", "Something went wrong deleting Company.");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }

        [HttpPut("Update/{Id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult UpdateJobCategory(Guid id, [FromBody]Company companyCreated)
        {
            if (companyCreated == null)
            {
                return BadRequest();
            }

            if (id != companyCreated.Id)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (!_companyRepository.UpdateCompany(companyCreated))
            {
                ModelState.AddModelError("", "Something went wrong updating Company.");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
    }
}