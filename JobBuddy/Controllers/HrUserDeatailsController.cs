﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Models;
//using System.Web.Http;
using JobBuddy.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HrUserDeatailsController : Controller
    {
        private readonly IHrDetailsRepository _hrDetails;

        public HrUserDeatailsController(IHrDetailsRepository hr)
        {
            _hrDetails = hr;
        }

        //api/hrs
        [HttpGet("{hrId}")]
        public IActionResult GetHrs(string hrId)
        {
            var hrs = _hrDetails.GetHrs(hrId).ToList();
            return Ok(hrs);
        }

        //api/hrs
        [HttpPost]
        public IActionResult CreateHr([FromBody]HrUserDetails hrUserDetails)
        {
            if (hrUserDetails == null)
            {
                return BadRequest(ModelState);
            }


            return CreatedAtRoute("GetHr", new { id = hrUserDetails.Id}, hrUserDetails);

        }


        







        //// GET: api/HrUserDeatails
        //[HttpGet]
        //public IHttpActionResult Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET: api/HrUserDeatails/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/HrUserDeatails
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT: api/HrUserDeatails/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
