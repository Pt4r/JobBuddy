using JobBuddy.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using JobBuddy.Data.Repositories.IRepositories;
using JobBuddy.Models.UserDetails;

namespace JobBuddy.Data.Repositories
{
    public class ClientRepository : IClientRepository
    {
        private readonly ApplicationDbContext _db;

        public ClientRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public ICollection<ClientUserDetails> GetAll()
        {
            ICollection<ClientUserDetails> clients = _db.Clients.Include("ApplicationUser").ToList();
            return clients;
        }

        public ClientUserDetails GetClient(Guid id)
        {

            ClientUserDetails client = _db.Clients
                                          .Include("ApplicationUser")
                                            //                    .Include("Artist")
                                            //                    .Include("Genre")
                                          .SingleOrDefault(i => i.Id == id);
            return client;
        }

        public bool AddClient(ClientUserDetails client)
        {
            if (client == null)
            {
                throw new ArgumentNullException();
            }

            client.Id = Guid.NewGuid();
            _db.Clients.Add(client);
            return Save();
        }

        public bool DeleteClient(ClientUserDetails client)
        {
            _db.Clients.Remove(client);
            return Save();
        }

        public bool UpdateClient(ClientUserDetails client)
        {
            if (client == null)
            {
                throw new ArgumentNullException();
            }
            //_db.Clients.Attach(vm.Client);
            //// it should be vm (not vm.Client)
            //_db.Entry(vm.Client).State = EntityState.Modified;
            //_db.SaveChanges();
            _db.Clients.Update(client);
            return Save();
        }


        public ICollection<ClientUserDetails> GetClientsFromJobListing(Guid jlId)
        {
            return _db.ClientJobListings.Where(c => c.JobListingId == jlId).Select(i => i.Client).Include("ApplicationUser").ToList();
        }

        public bool Save()
        {
            var saved = _db.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}