using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Models.UserDetails;

namespace JobBuddy.Models
{
    public class Mentor_MentorOfferViewModel
    {
        public List<MentorUserDetails> Mentors { get; set; }

        public IEnumerable<MentorOffer> MentorOffers { get; set; }
    }
}
