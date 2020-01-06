using JobBuddy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Services
{
    public interface IHrDetailsRepository
    {
        public HrUserDetails GetHr(Guid id);
        public ICollection<HrUserDetails> GetHrs(string id);
        public bool AddHr(HrUserDetails hrDetail);
        public bool UpdateHr(HrUserDetails hrDetail);
        public bool DeleteHr(HrUserDetails hrDetail);
        public bool Save();
        public ICollection<JobListing> GetJobListingsFromHr(Guid id);
        //public ICollection<JobListing> GetJobListingsFromLoggedInHr(string id);

    }
}
