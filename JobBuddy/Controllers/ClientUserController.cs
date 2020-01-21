using JobBuddy.Data.Repositories.IRepositories;
using JobBuddy.Models.UserDetails;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Controllers
{
    [Authorize(Roles = "Admin, Client, Mentor, HR")]
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
        public IActionResult GetAll()
        {
            var clients = _client.GetAll();

            if (clients == null)
                return NotFound();

            return Ok(clients);
        }

        
        [HttpGet("{id}", Name = "Client")]
        public IActionResult Get(Guid id)
        {
            var client = _client.GetClient(id);

            if (client == null)
                return NotFound();

            return Ok(client);
        }

        
        [HttpPost("Create")]
        [ProducesResponseType(201, Type = typeof(ClientUserDetails))]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult Create([FromBody]ClientUserDetails ClientUserDetails)
        {
            if (ClientUserDetails == null)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_client.AddClient(ClientUserDetails))
            {
                ModelState.AddModelError("", "Something went wrong.");
                return StatusCode(500, ModelState);
            }

            return CreatedAtRoute("Client", new { id = ClientUserDetails.Id }, ClientUserDetails);

        }


        [HttpDelete("Delete/{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult DeleteClient([FromBody]ClientUserDetails clientToDelete)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (clientToDelete == null)
            {
                ModelState.AddModelError("", "Can't find client.");
                return StatusCode(500, ModelState);
            }

            if (!_client.DeleteClient(clientToDelete))
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
        public IActionResult UpdateClient(Guid id, [FromBody]ClientUserDetails updatedClientUserDetails)
        {
            if (updatedClientUserDetails == null)
                return BadRequest(ModelState);

            if (id != updatedClientUserDetails.Id)
                return BadRequest(ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_client.UpdateClient(updatedClientUserDetails))
            {
                ModelState.AddModelError("", "Something went wrong updating client.");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
    }
}