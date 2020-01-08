using JobBuddy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Repositories
{
    public interface IClientRepository
    {
        public ClientUserDetails GetClient(Guid id);
        public ICollection<ClientUserDetails> GetClients(string id);
        public bool AddClient(ClientUserDetails ClientDetail);
        public bool UpdateClient(ClientUserDetails ClientDetail);
        public bool DeleteClient(ClientUserDetails ClientDetail);
        public ICollection<JobListing> GetJobListingsFromClient(Guid id);
        public bool Save();
        
    }
}
