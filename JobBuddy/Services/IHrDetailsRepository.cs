using JobBuddy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Services
{
    public interface IHrDetailsRepository
    {
        public HrUserDetails FindHrById(Guid id);
        public IEnumerable<HrUserDetails> GetHrs(string id);
        public HrUserDetails AddHr(HrUserDetails hrDetail);
        public HrUserDetails UpdateHr(HrUserDetails hrDetailChanges);
        public HrUserDetails DeleteHr(Guid id);
        public ICollection<JobListing> GetJobListingsFromHr(Guid id);
        public ICollection<JobListing> GetJobListingsFromLoggedInHr(string id);

    }
}
