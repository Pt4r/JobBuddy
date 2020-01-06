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

        public IEnumerable<JobListing> GetJobListings()
        {
            IEnumerable<JobListing> jobListings;
            jobListings = db.JobListings.ToList();
            return jobListings;
        }

        public void AddJobListing(JobListing jobListing)
        {
            if (jobListing == null)
            {
                throw new ArgumentNullException();
            }
            jobListing.Id = Guid.NewGuid();
            db.JobListings.Add(jobListing);
            db.SaveChanges();
        }

        public void UpdateJobListing(JobListing jobListing)
        {
            db.JobListings.Attach(jobListing);
            db.Entry(jobListing).State = EntityState.Modified;
            db.SaveChanges();
        }

        public void DeleteJobListing(Guid id)
        {
            var jobListing = db.JobListings.Find(id);
            db.JobListings.Remove(jobListing);
            db.SaveChanges();
        }

        public JobListing GetJobListing(Guid id)
        {
            JobListing jobListing;
            jobListing = db.JobListings.Find(id);
            return jobListing;
        }

        public ICollection<ClientUserDetails> GetClientsFromJobListing(Guid clientId)
        {
            return db.ClientJobListings.Where(c => c.ClientId == clientId).Select(i => i.Client).ToList();
        }

        public HrUserDetails GetHrUserFromJobListing(Guid id)
        {
            return db.JobListings.Where(j => j.Id == id).Select(h => h.HrUser).SingleOrDefault();
        }
    }
}
