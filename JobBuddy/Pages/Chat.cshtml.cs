﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace JobBuddy
{
    //[Authorize(Roles = "Admin,Client,HR,Mentor")]
    public class Chat : PageModel
    {
        public void OnGet()
        {

        }
    }
}