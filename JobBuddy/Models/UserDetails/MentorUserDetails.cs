using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Models
{
    public class MentorUserDetails
    {
        //prosthetw application user Foreign key

        [ForeignKey("ApplicationUserId")]
        public ApplicationUser ApplicationUser { get; set; }

        public string ApplicationUserId { get; set; }
        public Guid MentorId { get; set; }

        public string PhoneNumber { get; set; }

        //fk user
        //fk job categories


        public byte? Rating { get; set; }

        public string ProfilePicture { get; set; }

        public enumGender Gender { get; set; }

        public string Description { get; set; }

        public ICollection<MentorOffer> OffersReceived { get; set; }

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

