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

        //api/AdministratorDetails
        [HttpGet]
        [Route("api/Administrators")]
        public IActionResult GetAdmin(string id)
        {
            var admins = _administratorDetailsRepository.GetAdministrator().ToList();
            return Ok(admins);
        }

        //api/AdministratorDetails
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

        //api/AdministratorDetails/id
        [HttpPut, HttpPatch]
        [ValidateAntiForgeryToken]
        [Route("api/Administrators/Update")]
        public IActionResult UpdateAdmin([FromBody]AdministratorDetails administratorcreated)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            _administratorDetailsRepository.UpdateAdministrator(administratorcreated);
            return Ok();
        }

        //api/AdministratorDetails/id
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