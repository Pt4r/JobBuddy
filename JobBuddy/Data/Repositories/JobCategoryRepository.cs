using JobBuddy.Data;
using JobBuddy.Data.Repositories.IRepositories;
using JobBuddy.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Data.Repositories
{
    public class JobCategoryRepository : IJobCategoriesRepository
    {
        private readonly ApplicationDbContext _db;
        public JobCategoryRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public IEnumerable<JobCategory> GetAll()
        {
            IEnumerable<JobCategory> jobCategories = _db.JobCategories.ToList();
            return jobCategories;
        }

        public JobCategory GetJobCategory(Guid id)
        {
            JobCategory jobCategory = _db.JobCategories.SingleOrDefault(i => i.Id == id);

            return jobCategory;
        }

        public bool AddJobCategory(JobCategory jobCategory)
        {

            if (jobCategory == null)
            {
                throw new ArgumentNullException();
            }

            jobCategory.Id = Guid.NewGuid();
            _db.JobCategories.Add(jobCategory);
            return Save();
        }

        public bool DeleteJobCategory(JobCategory jobCategory)
        {
            _db.JobCategories.Remove(jobCategory);
            return Save();
        }

        public bool UpdateJobCategory(JobCategory jobCategory)
        {
            if (jobCategory == null)
            {
                throw new ArgumentNullException();
            }

            _db.JobCategories.Update(jobCategory);
            return Save();
        }

        public JobCategory FindJobCategoryId(Guid id)
        {
            JobCategory jobCategoryFound;

            jobCategoryFound = _db.JobCategories.SingleOrDefault(m => m.Id == id);

            return jobCategoryFound;
        }

        public bool Save()
        {
            var saved = _db.SaveChanges();
            return saved > 0 ? true : false;
        }
    }

}
