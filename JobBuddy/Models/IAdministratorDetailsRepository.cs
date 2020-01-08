using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Models
{
    public interface IAdministratorDetailsRepository
    {
        public IEnumerable<AdministratorDetails> GetAdministrator(/*string Id*/);

        public void AddAdministrator(AdministratorDetails administratorUser);

        public bool UpdateAdministrator(AdministratorDetails administratorUser);

        public bool DeleteAdministrator(Guid id);

        public AdministratorDetails FindMentorbyId(Guid id);

    }
}
