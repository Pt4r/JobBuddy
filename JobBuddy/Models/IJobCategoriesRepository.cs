using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.EntityFrameworkCore;

namespace JobBuddy.Models
{
    public interface IJobCategoriesRepository
    {
        ICollection<JobCategory> GetJobCategories();
        JobCategory GetJobCategory(Guid jobcategoryId);
        //JobCategory GetJobCategoryFromJobListing(int joblistingId);
        //ICollection<JobListing> GetJobListingFromJobCategory(int jobcategoryId);

        void CreateJobCategory(JobCategory jobcategory);
        bool UpdateJobCategory(JobCategory jobcategory);
        bool DeleteJobCategory(JobCategory jobcategory);
        bool SaveJobCategory();

    }
}