using System;
using System.Collections.Generic;
using JobBuddy.Models.UserDetails;

namespace JobBuddy.Data.Repositories.IRepositories
{
    public interface IAdministratorDetailsRepository
    {
        ICollection<AdministratorDetails> GetAll();

        AdministratorDetails GetAdministrator(Guid id);

        bool AddAdministrator(AdministratorDetails administratorUser);

        bool UpdateAdministrator(AdministratorDetails administratorUser);

        bool DeleteAdministrator(AdministratorDetails admin);

        AdministratorDetails FindMentorbyId(Guid id);
        bool Save();


    }
}
