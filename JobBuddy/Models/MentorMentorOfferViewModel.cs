using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Models
{
    public class MentorMentorOfferViewModel
    {
        public MentorUserDetails Mentors { get; set; }

        public IEnumerable<MentorOffer> MentorOffers { get; set; }
    }
}
