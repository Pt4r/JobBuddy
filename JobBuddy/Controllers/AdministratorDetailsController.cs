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
    public class AdministratorDetailsController : ControllerBase
    {
        private IAdministratorDetailsRepository _administratorDetailsRepository;
        public AdministratorDetailsController(IAdministratorDetailsRepository administratorDetailsRepository)
        {
            _administratorDetailsRepository = administratorDetailsRepository;
        }

        [HttpGet]
        [Route("api/Administrators")]
        public IActionResult GetAdmin(string id)
        {
            var admins = _administratorDetailsRepository.GetAdministrator.ToList();
            return Ok(admins);
        }

        [HttpPost]
        [Route("api/Administrators/Create")]
        [ValidateAntiForgeryToken]
        public IActionResult CreateAdmin([FromBody]AdministratorDetails administratorcreated)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            _administratorDetailsRepository.AddAdministrator(administratorcreated);
            return Ok();
        }

        [HttpPut, HttpPatch]
        [ValidateAntiForgeryToken]
        [Route("api/Mentors/Update")]
        public IActionResult UpdateAdmin([FromBody]AdministratorDetails administratorcreated)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            _administratorDetailsRepository.UpdateAdministrator(administratorcreated);
            return Ok();
        }

        [HttpDelete]
        [ValidateAntiForgeryToken]
        [Route("api/Administrators/Delete/{id}")]
        public IActionResult DeleteAdmin(Guid id)
        {
            bool removed = _administratorDetailsRepository.DeleteAdministrator(id);
            if (!removed)
            {
                return NotFound();
                //return BadRequest
            }

            return Ok();

        }
    }

}