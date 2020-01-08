using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Models;

namespace JobBuddy.Repositories
{
    public interface IMentorOfferRepository
    {
        public IEnumerable<MentorOffer> GetMentorOffers(Guid Id);

        public bool AddMentorOffer(MentorOffer mentorUser);

        public bool UpdateMentorOffer(MentorOffer mentorUser);

        public bool DeleteMentorOffer(Guid id);

        //public MentorOffer FindMentorOfferbyId(Guid id);

       

    }
}
