//using System;
//using System.Collections.Generic;
//using System.Data.Entity;
//using System.Linq;
//using System.Web;
//using JobBuddy.Models;

//namespace JobBuddy.Repositories
//{
//    public class CompanyRepository
//    {
//        public IEnumerable<Company> GetCompanies()
//        {
//            IEnumerable<Company> companies;

//            using (var db = new AppDbContext())
//            {
//                companies = db.Companies.ToList();
//            }

//            return companies;
//        }

//        public IEnumerable<Company> GetCompanies(IEnumerable<Guid> ids)
//        {
//            List<Company> companies = new List<Company>();

//            using (var db = new AppDbContext())
//            {
//                companies = db.Companies.Where(company => ids.Contains(company.Id)).ToList();
//            }

//            return companies;
//        }

//        public void AddCompany(Company company)
//        {
//            if (company == null)
//            {
//                throw new ArgumentNullException();
//            }

//            using (var db = new AppDbContext())
//            {
//                company.Id = Guid.NewGuid();
//                db.Companies.Add(company);
//                db.SaveChanges();

//            }
//        }

//        public void DeleteCompany(Guid id)
//        {
//            using (var db = new AppDbContext())
//            {
//                var company = db.Companies.Find(id);
//                db.Companies.Remove(company);
//                db.SaveChanges();
//            }
//        }

//        public void UpdateCompany(Company vm)
//        {
//            if (vm == null)
//            {
//                throw new ArgumentNullException();
//            }

//            using (var db = new AppDbContext())
//            {
//                db.Companies.Attach(vm);
//                db.Entry(vm).State = EntityState.Modified;
//                db.SaveChanges();
//            }
//        }

//        public Company FindById(Guid id)
//        {
//            Company company;
//            using (AppDbContext db = new AppDbContext())
//            {
//                company = db.Companies
//                    //                    .Include("JobCategory")
//                    //                    .Include("Genre")
//                    .SingleOrDefault(i => i.Id == id);
//            }

//            return company;
//        }
//    }
//}