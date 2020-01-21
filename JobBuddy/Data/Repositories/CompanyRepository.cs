using JobBuddy.Data;
using JobBuddy.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Data.Repositories.IRepositories;

namespace JobBuddy.Data.Repositories
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly ApplicationDbContext _db;
        public CompanyRepository(ApplicationDbContext db)
        {
            _db = db;

        }

        public IEnumerable<Company> GetAll()
        {

            IEnumerable<Company> companies;
            return companies = _db.Companies.ToList();
        }

        public Company GetCompany(Guid id)
        {
            Company companies = _db.Companies.SingleOrDefault(i => i.Id == id);
            return companies;
        }

        public bool AddCompany(Company company)
        {
            if (company == null)
            {
                throw new ArgumentNullException();
            }

            company.Id = Guid.NewGuid();
            _db.Companies.Add(company);
            return Save();
        }

        public bool DeleteCompany(Company company)
        {
            _db.Companies.Remove(company);
            return Save();
        }


        public Company FindCompanyId(Guid id)
        {
            Company companyFound;

            companyFound = _db.Companies.SingleOrDefault(m => m.Id == id);

            return companyFound;
        }

        public bool UpdateCompany(Company company)
        {
            if (company == null)
            {
                return false;
            }

            _db.Companies.Attach(company);
            _db.Entry(company).State = EntityState.Modified;
            return Save();
        }

        public bool Save()
        {
            var saved = _db.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
