using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using JobBuddy.Models;
using Microsoft.EntityFrameworkCore;

namespace JobBuddy.Data.Repositories.IRepositories
{
    public interface IJobCategoriesRepository
    {
        IEnumerable<JobCategory> GetAll();
        JobCategory GetJobCategory(Guid id);
        bool AddJobCategory(JobCategory jobCategory);
        bool UpdateJobCategory(JobCategory jobCategory);
        bool DeleteJobCategory(JobCategory jobCategory);
        JobCategory FindJobCategoryId(Guid id);
        bool Save();
    }
}