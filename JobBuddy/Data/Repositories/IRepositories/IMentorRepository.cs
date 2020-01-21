using JobBuddy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Models.UserDetails;

namespace JobBuddy.Data.Repositories.IRepositories
{
    public interface IMentorRepository
    {
        ICollection<MentorUserDetails> GetAll();
        MentorUserDetails GetMentor(Guid Id);

        bool AddMentor(MentorUserDetails mentorUser);

        bool UpdateMentor(MentorUserDetails mentorUser);

        bool DeleteMentor(MentorUserDetails mentorUser);

        MentorUserDetails FindMentorbyId(Guid id);

        //public IEnumerable<MentorOffer> GetMentorOffersFromMentor(Guid id);
    }
}
