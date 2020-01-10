using JobBuddy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Repositories
{
    public interface IMentorRepository
    {
        public IEnumerable<MentorUserDetails> GetAllMentorDetails();

        public bool AddMentorDetails(MentorUserDetails mentorUser);

        public bool UpdateMentorDetails(MentorUserDetails mentorUser);

        public bool DeleteMentorDetails(Guid id);

        public MentorUserDetails FindMentorDetailsbyId(Guid id);

        //public IEnumerable<MentorOffer> GetMentorOffersFromMentor(Guid id);
    }
}
