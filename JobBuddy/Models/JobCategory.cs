using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace JobBuddy.Models
{

    public class JobCategory
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public string JobCategoryTitle { get; set; }

        [Display(Name = "Category")]
        public string Subcategory_1 { get; set; }

        [Display(Name = "SubCategory")]
        public string Subcategory_2 { get; set; }

        public virtual ICollection<JobListing> JobListings { get; set; }
           
    }
}