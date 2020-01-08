using JobBuddy.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Models
{
    public class CompanyRepository : ICompanyRepository
    {
        private ApplicationDbContext _companyContext;
        public CompanyRepository(ApplicationDbContext companyContext)
        {
            _companyContext = companyContext;

        }
        public void AddCompany(Company company)
        {
            if (company == null)
            {
                throw new ArgumentNullException();
            }

            company.Id = Guid.NewGuid();
            _companyContext.Companies.Add(company);
            _companyContext.SaveChanges();
        }

        public bool DeleteCompany(Guid id)
        {
            var deletedCompany = _companyContext.Companies.SingleOrDefault(m => m.Id == id);
            if (deletedCompany == null)
            {

                return false;
            }
            else
            {
                _companyContext.Companies.Remove(deletedCompany);
                _companyContext.SaveChanges();
                return true;
            }
        }

        public Company FindCompanyId(Guid id)
        {
            Company companyFound;


            companyFound = _companyContext.Companies.SingleOrDefault(m => m.Id == id);



            return companyFound;
        }   

        public IEnumerable<Company> GetCompanies()
        {

            IEnumerable<Company> companies;
            return companies = _companyContext.Companies.ToList();
        }

        public bool UpdateCompany(Company company)
        {
            if (company == null)
            {
                return false;
            }

            _companyContext.Companies.Attach(company);
            _companyContext.Entry(company).State = EntityState.Modified;
            _companyContext.SaveChanges();
            return true;
        }
    }
}
