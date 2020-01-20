using JobBuddy.Models.UserDetails;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Data.Repositories.IRepositories
{
    public interface IClientRepository
    {
        ICollection<ClientUserDetails> GetAll();
        ClientUserDetails GetClient(Guid id);
        bool AddClient(ClientUserDetails ClientDetail);
        bool UpdateClient(ClientUserDetails ClientDetail);
        bool DeleteClient(ClientUserDetails ClientDetail);
        ICollection<ClientUserDetails> GetClientsFromJobListing(Guid id);
        bool Save();

    }
}
