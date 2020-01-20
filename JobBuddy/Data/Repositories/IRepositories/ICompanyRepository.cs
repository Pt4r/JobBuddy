using System;
using System.Collections.Generic;
using JobBuddy.Models;

namespace JobBuddy.Data.Repositories.IRepositories
{
    public interface ICompanyRepository
    {
        IEnumerable<Company> GetAll();
        Company GetCompany(Guid id);
        bool AddCompany(Company company);
        bool UpdateCompany(Company company);
        bool DeleteCompany(Company company);
        Company FindCompanyId(Guid id);
        bool Save();
    }
}
