using JobBuddy.Models;
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
    public class ClientUserController : Controller
    {

        private readonly IClientRepository _client;

        public ClientUserController(IClientRepository client)
        {
            _client = client;
        }



        [HttpGet]
        [Route("api/ClientUser/{id}")]
        public IActionResult GetClient(Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var client = _client.GetClient(id);

            if (client == null)
            {
                return NotFound();
            }

            return Ok(client);
        }

        //api/clientuser
        [HttpGet("{Id}", Name = "GetClients")]
        [Route("api/ClientUser")]
        public IActionResult GetClients(string clientId)
        {
            var clients = _client.GetClients(clientId).ToList();
            return Ok(clients);
        }

        //api/ClientUser
        [HttpPost]
        [ProducesResponseType(201, Type = typeof(ClientUserDetails))]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [Route("api/ClientUser/Create")]
        public IActionResult CreateClient([FromBody]ClientUserDetails ClientUserDetails)
        {
            if (ClientUserDetails == null)
            {
                return BadRequest(ModelState);
            }

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_client.AddClient(ClientUserDetails))
            {
                ModelState.AddModelError("", $"Something went wrong with saving ");
                return StatusCode(500, ModelState);
            }

            return CreatedAtRoute("GetClient", new { id = ClientUserDetails.Id }, ClientUserDetails);

        }

        //api/ClientUser
        [HttpPut("{Id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [Route("api/ClientUser/Update")]
        public IActionResult UpdateClient(Guid clientId, [FromBody]ClientUserDetails updatedClientUserDetails)
        {
            if (updatedClientUserDetails == null)
                return BadRequest(ModelState);

            if (clientId != updatedClientUserDetails.Id)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_client.UpdateClient(updatedClientUserDetails))
            {
                ModelState.AddModelError("", $"Something went wrong updating ");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }

        //api/ClientUser/Id
        [HttpDelete("{Id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [Route("api/ClientUser/Delete/{id}")]
        public IActionResult DeleteClient(Guid clientId)
        {
            var clientToDelete = _client.GetClient(clientId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_client.DeleteClient(clientToDelete))
            {
                ModelState.AddModelError("", $"Something went wrong deleting ");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }




        //{updatedClientUserDetails.ApplicationUser.FirstName} {updatedClientUserDetails.ApplicationUser.LastName}
    }
}