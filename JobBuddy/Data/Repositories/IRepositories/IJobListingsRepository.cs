using System;
using System.Collections.Generic;
using JobBuddy.Models;

namespace JobBuddy.Data.Repositories.IRepositories
{
    public interface IJobListingsRepository
    {
        ICollection<JobListing> GetJobListings();
        bool AddJobListing(JobListing jobListing);
        bool UpdateJobListing(JobListing jobListing);        
        bool DeleteJobListing(JobListing jobListing);
        JobListing GetJobListing(Guid id);
        ICollection<JobListing> GetJobListingsFromClient(Guid clId);

        ICollection<JobListing> GetJobListingsFromHr(Guid id);
    }
}
