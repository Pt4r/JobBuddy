using System;
using System.Collections.Generic;
using System.Linq;
using JobBuddy.Models;
using JobBuddy.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

        //api/clientuser
        [HttpGet("{Id}", Name = "GetClients")]
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
                ModelState.AddModelError("", $"Something went wrong with saving {ClientUserDetails.ApplicationUser.FirstName} {ClientUserDetails.ApplicationUser.LastName}");
                return StatusCode(500, ModelState);
            }

            return CreatedAtRoute("GetClient", new { id = ClientUserDetails.Id }, ClientUserDetails);

        }

        //api/ClientUser/Id
        [HttpPut("{Id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
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
                ModelState.AddModelError("", $"Something went wrong updating {updatedClientUserDetails.ApplicationUser.FirstName} {updatedClientUserDetails.ApplicationUser.LastName}");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }

        //api/ClientUser/Id
        [HttpDelete("{Id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult DeleteClient(Guid clientId)
        {
            var clientToDelete = _client.GetClient(clientId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_client.DeleteClient(clientToDelete))
            {
                ModelState.AddModelError("", $"Something went wrong deleting {clientToDelete.ApplicationUser.FirstName} {clientToDelete.ApplicationUser.LastName}");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }

        [HttpGet("{Id}", Name = "GetClientsFromJobListing")]
        public IActionResult GetClientsFromJobListing(Guid jlId)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var clients = _client.GetClientsFromJobListing(jlId).ToList();
            return Ok(clients);
        }
    }
}