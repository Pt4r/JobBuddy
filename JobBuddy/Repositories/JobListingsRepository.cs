using JobBuddy.Data;
using JobBuddy.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;

namespace JobBuddy.Repositories
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
            ICollection<JobListing> jobListings;
            jobListings = db.JobListings.ToList();
            return jobListings;
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

        public JobListing GetJobListing(Guid id)
        {
            JobListing jobListing;
            jobListing = db.JobListings.Find(id);
            return jobListing;
        }

        public ICollection<JobListing> GetJobListingsFromClient(Guid clId)
        {
            return db.ClientJobListings.Where(j => j.ClientId == clId).Select(c => c.JobListing).ToList();
        }


        //public HrUserDetails GetHrUserFromJobListing(Guid id)
        //{
        //    return db.JobListings.Where(j => j.Id == id).Select(h => h.HrUser).SingleOrDefault();
        //}

        public bool Save()
        {
            var saved = db.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
