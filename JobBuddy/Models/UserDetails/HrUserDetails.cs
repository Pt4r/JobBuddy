using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using JobBuddy.Models.enums;

namespace JobBuddy.Models.UserDetails
{

    public class HrUserDetails
    {
        [Key]
        public Guid Id { get; set; }

        public enumGender Gender { get; set; }

        [ForeignKey("CompanyId")]
        public Guid? CompanyId { get; set; }
        public Company Company { get; set; }

        public virtual ICollection<JobListing> JobListings { get; set; }

        //Προσθέτω Foreign key se ola ta details APP USER
        [ForeignKey("ApplicationUserId")]
        public ApplicationUser ApplicationUser { get; set; }
        public string ApplicationUserId { get; set; }


    }
}