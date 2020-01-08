using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.EntityFrameworkCore;

namespace JobBuddy.Models
{
    public interface IJobCategoriesRepository
    {
        IEnumerable<JobCategory> GetJobCategories();
        public void AddJobCategory(JobCategory jobcategory);
        public bool UpdateJobCategory(JobCategory jobcategory);
        public bool DeleteJobCategory(Guid Id);
        public JobCategory FindJobCategoryId(Guid id);

    }
}