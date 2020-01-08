using JobBuddy.Data;
using Microsoft.EntityFrameworkCore;
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

        public void AddJobCategory(JobCategory jobcategory)
        {

            if (jobcategory == null)
            {
                throw new ArgumentNullException();
            }

            jobcategory.Id = Guid.NewGuid();
            _jobCategoryContext.JobCategories.Add(jobcategory);
            _jobCategoryContext.SaveChanges();
        }

        public bool DeleteJobCategory(Guid id)
        {
            var deletedJobCategory = _jobCategoryContext.JobCategories.SingleOrDefault(m => m.Id == id);
            if (deletedJobCategory == null)
            {

                return false;
            }
            else
            {
                _jobCategoryContext.JobCategories.Remove(deletedJobCategory);
                _jobCategoryContext.SaveChanges();
                return true;
            }
        }

        public JobCategory FindJobCategoryId(Guid id)
        {
            JobCategory jobcategoryFound;


            jobcategoryFound = _jobCategoryContext.JobCategories.SingleOrDefault(m => m.Id == id);



            return jobcategoryFound;
        }

        public IEnumerable<JobCategory> GetJobCategories()
        {
            IEnumerable<JobCategory> jobcategories;
            return jobcategories = _jobCategoryContext.JobCategories.ToList();
        }

        public bool UpdateJobCategory(JobCategory jobcategory)
        {
            if (jobcategory == null)
            {
                return false;
            }

            _jobCategoryContext.JobCategories.Attach(jobcategory);
            _jobCategoryContext.Entry(jobcategory).State = EntityState.Modified;
            _jobCategoryContext.SaveChanges();
            return true;
        }
    }

}
