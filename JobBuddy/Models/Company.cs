using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Models
{
    public class Company
    {
        //[Key]
        public Guid Id { get; set; }
        //[Required]
        public string Title { get; set; }
        //[Required]
        public string Address { get; set; }
        //[Required]
        [Display(Name = "Phone Number")]
        //[DataType(DataType.PhoneNumber)]
        public int PhoneNumber { get; set; }
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }        ///anamoni apo spyroMisichtoni
        public virtual ICollection<HrUserDetails> HrUsers { get; set; }

        public virtual ICollection<JobListing> JobListings { get; set; }        //Lista me mentors 
        public virtual ICollection<MentorUserDetails> Mentors { get; set; }

        [ForeignKey("ApplicationUserId")]
        public JobCategory JobCategory1 { get; set; }
        public string JobCategoryId { get; set; }
        
        public virtual ICollection<JobCategory> JobCategories1 { get; set; }

    }
}
