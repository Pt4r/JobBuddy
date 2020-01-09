﻿using JobBuddy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Repositories
{
    public interface IMentorRepository
    {
        public IEnumerable<MentorUserDetails> GetMentors(string Id);

        public bool AddMentor(MentorUserDetails mentorUser);

        public bool UpdateMentor(MentorUserDetails mentorUser);

        public bool DeleteMentor(Guid id);

        public MentorUserDetails FindMentorbyId(Guid id);

        //public IEnumerable<MentorOffer> GetMentorOffersFromMentor(Guid id);
    }
}
