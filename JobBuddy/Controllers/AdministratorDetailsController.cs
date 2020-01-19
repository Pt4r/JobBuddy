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

    [Authorize(Roles = "Admin")]
    [Route("api/[controller]")]
    [ApiController]
    public class AdministratorDetailsController : ControllerBase
    {
        private IAdministratorDetailsRepository _administratorDetailsRepository;
        public AdministratorDetailsController(IAdministratorDetailsRepository administratorDetailsRepository)
        {
            _administratorDetailsRepository = administratorDetailsRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var admins = _administratorDetailsRepository.GetAll();

            if (admins == null)
            {
                return NotFound();
            }

            return Ok(admins);
        }


        [HttpGet("{id}", Name = "Admin")]
        public IActionResult GetAdmin(Guid id)
        {
            var admin = _administratorDetailsRepository.GetAdministrator(id);
            if (admin == null)
                return NotFound();

            return Ok(admin);
        }


        [HttpPost("Create")]
        [ProducesResponseType(201, Type = typeof(AdministratorDetails))]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult Create([FromBody]AdministratorDetails adminCreated)
        {
            if (adminCreated == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest();

            if (!_administratorDetailsRepository.AddAdministrator(adminCreated))
            {
                ModelState.AddModelError("", "Something went wrong.");
                return StatusCode(500, ModelState);
            }

            return CreatedAtRoute("Admin", new { id = adminCreated.Id }, adminCreated);
        }


        [HttpDelete("Delete/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult DeleteAdmin(Guid id)
        {
            var adminToDelete = _administratorDetailsRepository.GetAdministrator(id);
            
            if (adminToDelete == null)
            {
                ModelState.AddModelError("", "Can't find admin.");
                return StatusCode(500, ModelState);
            }

            if (!_administratorDetailsRepository.DeleteAdministrator(adminToDelete))
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
        public IActionResult UpdateAdmin(Guid id, [FromBody]AdministratorDetails adminCreated)
        {
            if (adminCreated == null)
                return BadRequest(ModelState);

            if (id != adminCreated.Id)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_administratorDetailsRepository.UpdateAdministrator(adminCreated))
            {
                ModelState.AddModelError("", "Something went wrong updating Admin.");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
    }

}