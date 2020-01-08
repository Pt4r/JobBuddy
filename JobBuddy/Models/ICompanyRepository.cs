using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Models
{
    interface ICompanyRepository
    {
        IEnumerable<Company> GetCompanies();
        public void AddCompany(Company company);
        public bool UpdateCompany(Company company);
        public bool DeleteCompany(Guid Id);
        public Company FindCompanyId(Guid id);

    }
}
