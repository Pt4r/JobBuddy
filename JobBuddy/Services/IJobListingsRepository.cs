using JobBuddy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Services
{
    interface IJobListingsRepository
    {
        public IEnumerable<JobListing> GetJobListings();
        public void AddJobListing(JobListing jobListing);
        public void UpdateJobListing(JobListing jobListing);        
        public void DeleteJobListing(Guid id);
        public JobListing GetJobListing(Guid id);
        public ICollection<ClientUserDetails> GetClientsFromJobListing(Guid clientId);
        public HrUserDetails GetHrUserFromJobListing(Guid id);
    }
}
