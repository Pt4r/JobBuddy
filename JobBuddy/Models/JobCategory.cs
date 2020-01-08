using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JobBuddy.Models
{
    
    public class JobCategory
    {   
        public Guid Id { get; set; }
        public enumJobCategoryTitle JobCategoryTitle { get;  }
        public string Subcategory_1 { get; set; }
        public string Subcategory_2 { get; set; }
        public List<JobListing> JobListings { get; set; } 

    }
}