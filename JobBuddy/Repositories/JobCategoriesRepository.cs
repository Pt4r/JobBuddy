//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace JobBuddy.Models
//{
//    public class JobCategoriesRepository
//    {
//        public IEnumerable<JobCategory> GetJobCategory()
//        {
//            IEnumerable<JobCategory> jobCategories;

//            using (var db = new AppDbContext())
//            {
//                jobCategories = db.JobCategories.ToList();
//            }

//            return jobCategories;
//        }

//        public void AddJobCategory(JobCategory jobCategory)
//        {
//            if (jobCategory == null)
//            {
//                throw new ArgumentNullException();
//            }

//            using (var db = new AppDbContext())
//            {
//                jobCategory.Id = Guid.NewGuid();
//                db.JobCategories.Add(jobCategory); 
//                db.SaveChanges();
//            }
//        }

//        public void UpdateJobCategory(JobCategory jobCategory)
//        {
//            if (jobCategory == null)
//            {
//                throw new ArgumentNullException();
//            }

//            using (var db = new AppDbContext())
//            {
//                db.JobCategories.Attach(jobCategory);
//                db.Entry(jobCategory).State = System.Data.Entity.EntityState.Modified;
//                db.SaveChanges();
//            }
//        }

//        public void DeleteGenre(Guid id)
//        {
//            using (var db = new AppDbContext())
//            {
//                var jobcategory = db.JobCategories.Find(id);
//                db.JobCategories.Remove(jobcategory);
//                db.SaveChanges();
//            }
//        }

//        public JobCategory FindById(Guid id)
//        {
//            JobCategory jobCategory;
//            using (var db = new AppDbContext())
//            {
//                jobCategory = db.JobCategories.SingleOrDefault(i => i.Id == id);
//            }

//            return jobCategory;
//        }
//    }
//}