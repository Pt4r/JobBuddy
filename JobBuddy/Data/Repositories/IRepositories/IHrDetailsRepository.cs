using System;
using System.Collections.Generic;
using JobBuddy.Models;
using JobBuddy.Models.UserDetails;

namespace JobBuddy.Data.Repositories.IRepositories
{
    public interface IHrDetailsRepository
    {
        HrUserDetails GetHr(Guid id);
        ICollection<HrUserDetails> GetAll(Guid id);
        bool AddHr(HrUserDetails hrDetail);
        bool UpdateHr(HrUserDetails hrDetail);
        bool DeleteHr(HrUserDetails hrDetail);
        bool Save();
        ICollection<JobListing> GetJobListingsFromHr(Guid id);
        //public ICollection<JobListing> GetJobListingsFromLoggedInHr(string id);

    }
}
