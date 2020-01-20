using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Models;

namespace JobBuddy.Data.Repositories.IRepositories
{
    //** TODO **

    public interface IMentorOfferRepository
    {
        IEnumerable<MentorOffer> GetAll(Guid Id);

        bool AddMentorOffer(MentorOffer mentorUser);

        bool UpdateMentorOffer(MentorOffer mentorUser);

        bool DeleteMentorOffer(Guid id);

        //public MentorOffer FindMentorOfferbyId(Guid id);
        bool Save();
    }
}
