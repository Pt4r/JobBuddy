using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace JobBuddy.Models
{

    public class JobCategory
    {   [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        [Required]
        public enumJobCategoryTitle JobCategoryTitle { get; set; }
        [Required]
        [Display(Name = "Category")]
        public string Subcategory_1 { get; set; }
        [Required]
        [Display(Name = "SubCategory")]
        public string Subcategory_2 { get; set; }
        
    }
}