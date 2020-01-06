using JobBuddy.Data;
using JobBuddy.Models;
using JobBuddy.Services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

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

        //public ICollection<ClientUserDetails> GetClientsFromJobListing(Guid clientId)
        //{
        //    return db.ClientJobListings.Where(c => c.ClientId == clientId).Select(i => i.Client).ToList();
        //}

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
