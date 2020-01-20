using System;
using System.Collections.Generic;
using System.Linq;
using JobBuddy.Data.Repositories.IRepositories;
using JobBuddy.Models;

namespace JobBuddy.Data.Repositories
{
    public class JobListingsRepository : IJobListingsRepository
    {
        private readonly ApplicationDbContext db;

        public JobListingsRepository(ApplicationDbContext db)
        {
            this.db = db;
        }

        public ICollection<JobListing> GetJobListings()
        {
            ICollection<JobListing> jobListings = db.JobListings.ToList();
            return jobListings;
        }


        public JobListing GetJobListing(Guid id)
        {
            JobListing jobListing;
            jobListing = db.JobListings.Find(id);
            return jobListing;
        }

        public bool AddJobListing(JobListing jobListing)
        {
            if (jobListing == null)
            {
                throw new ArgumentNullException();
            }
            jobListing.Id = Guid.NewGuid();
            db.JobListings.AddAsync(jobListing);
            return Save();
        }

        public bool UpdateJobListing(JobListing jobListing)
        {
            db.JobListings.Attach(jobListing);
            db.Update(jobListing);
            return Save();
        }

        public bool DeleteJobListing(JobListing jobListing)
        {
            db.JobListings.Remove(jobListing);
            return Save();
        }

        public ICollection<JobListing> GetJobListingsFromClient(Guid Id)
        {
            return db.ClientJobListings.Where(j => j.ClientId == Id).Select(c => c.JobListing).ToList();
        }

        public ICollection<JobListing> GetJobListingsFromHr(Guid Id)
        {
            return db.JobListings.Where(h => h.HrUserId == Id).ToList();
        }


        public bool Save()
        {
            var saved = db.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
