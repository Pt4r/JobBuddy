using JobBuddy.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Models
{
    public class JobCategoryRepository : IJobCategoriesRepository
    {
        private ApplicationDbContext _jobCategoryContext;
        public JobCategoryRepository(ApplicationDbContext jobCategoryContext)
        {
            _jobCategoryContext = jobCategoryContext;
        }

        public ICollection<JobCategory> GetJobCategories()
        {
            return _jobCategoryContext.JobCategories.OrderBy(j => j.JobCategoryTitle).ToList();
        }

        public JobCategory GetJobCategory(Guid jobcategoryId)
        {
            return _jobCategoryContext.JobCategories.Where(j => j.Id == jobcategoryId).FirstOrDefault();
        }
        
        public void CreateJobCategory(JobCategory jobcategory)
        {
            _jobCategoryContext.AddAsync(jobcategory);
            
        }

        public bool DeleteJobCategory(JobCategory jobcategory)
        {
            _jobCategoryContext.Remove(jobcategory);
            return SaveJobCategory();
        }

        public bool SaveJobCategory()
        {
            var saved = _jobCategoryContext.SaveChanges();
            return saved >= 0 ? true : false;
        }

        public bool UpdateJobCategory(JobCategory jobcategory)
        {
            _jobCategoryContext.Update(jobcategory);
            return SaveJobCategory();
        }

        //public JobCategory GetJobCategoryFromJobListing(int joblistingId)
        //{
        //    throw new NotImplementedException();
        //}

        //public ICollection<JobListing> GetJobListingFromJobCategory(int jobcategoryId)
        //{
        //    throw new NotImplementedException();
        //}
    }
}
