using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobBuddy.Controllers
{
    [Route("api/[administratorDetails]")]
    [ApiController]
    public class AdministratorDetailsController : ControllerBase
    {
        private IAdministratorDetailsRepository _administratorDetailsRepository;
        public AdministratorDetailsController(IAdministratorDetailsRepository administratorDetailsRepository)
        {
            _administratorDetailsRepository = administratorDetailsRepository;
        }

        [HttpGet]
        public IActionResult GetAdmin()
        {
            var admins = _administratorDetailsRepository.GetAdministrators().ToList();
            return Ok(admins);
        }

        [HttpPost]
        public IActionResult CreateAdmin([FromBody]AdministratorDetails administratorcreated)
        {
            _administratorDetailsRepository.CreateAdmin(administratorcreated);
            return Ok();
        }

        [HttpPost]
        public IActionResult UpdateAdmin([FromBody]AdministratorDetails administratorcreated)
        {
            _administratorDetailsRepository.UpdateAdmin(administratorcreated);
            return Ok();
        }

        [HttpPost]
        public IActionResult DeleteAdmin([FromBody]AdministratorDetails administratorcreated)
        {
            _administratorDetailsRepository.DeleteAdmin(administratorcreated);
            return Ok();
        }
    }
}