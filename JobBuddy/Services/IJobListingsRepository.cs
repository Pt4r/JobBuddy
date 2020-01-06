using JobBuddy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Services
{
    public interface IJobListingsRepository
    {
        public ICollection<JobListing> GetJobListings();
        public bool AddJobListing(JobListing jobListing);
        public bool UpdateJobListing(JobListing jobListing);        
        public bool DeleteJobListing(JobListing jobListing);
        public JobListing GetJobListing(Guid id);
        //public ICollection<ClientUserDetails> GetClientsFromJobListing(Guid clientId);
        //public HrUserDetails GetHrUserFromJobListing(Guid id);
    }
}
