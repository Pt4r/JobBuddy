using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using JobBuddy.Models.enums;

namespace JobBuddy.Models.UserDetails
{
    public class MentorUserDetails
    {
        [Key]
        public Guid Id { get; set; }

        //fk user
        //fk job categories


        public byte? Rating { get; set; }
        
        public enumGender Gender { get; set; }

        public string Description { get; set; }

        public ICollection<MentorOffer> OffersReceived { get; set; }

        //Προσθέτω Foreign key se ola ta details APP USER
        [ForeignKey("ApplicationUserId")]
        public ApplicationUser ApplicationUser { get; set; }
        public string ApplicationUserId { get; set; }

        //enas mentorUser mporei na douleuei se company optional 1-many rel.
        public Company Company { get; set; }

        //company foreign key ... to bazw etsi giati m xtupouse me fluent api

        public Guid? CompanyId { get; set; }
        public MentorUserDetails()
        {
            //            ProfilePicture = default pic path
            OffersReceived = new HashSet<MentorOffer>();
        }
    }

}

