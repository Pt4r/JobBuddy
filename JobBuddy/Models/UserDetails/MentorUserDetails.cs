using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JobBuddy.Models
{
    public class MentorUserDetails
    {
        public Guid  MentorId { get; set; }

        public int PhoneNumber { get; set; }

        //fk user
        //fk job categories
       

        public byte? Rating { get; set; }

        public string ProfilePicture { get; set; }

        public enumGender Gender { get; set; }

        public string Description { get; set; }

        public ICollection<MentorOffer> OffersReceived { get; set; }

        //enas mentorUser mporei na douleuei se company optional 1-many rel.
        public Company Company { get; set; }

        public MentorUserDetails()
        {
//            ProfilePicture = default pic path
            OffersReceived = new HashSet<MentorOffer>();
        }
    }
}