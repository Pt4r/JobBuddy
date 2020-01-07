using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using JobBuddy.Data;
using JobBuddy.Models;
using JobBuddy.Services;

namespace JobBuddy.Repositories
{
    public class ClientRepository :IClientRepository
    {
        private readonly ApplicationDbContext db;

        public ClientRepository(ApplicationDbContext db)
        {
            this.db = db;
        }


        //prostheto parametro to id tou Aspnetuser
        public ICollection<ClientUserDetails> GetClients(string Id)
        {
            ICollection<ClientUserDetails> clients;

            //Allazw to search me basi to Id tou Logged in user ...Wste na fortwnw se kathe login mono ta dedomena tou xristi//
            clients = db.Clients/*.Where(c => c.ApplicationUserId == Id)*/.ToList();

            return clients;
        }

        //public IEnumerable<ClientUserDetails> GetClients(IEnumerable<Guid> ids)
        //{
        //    List<ClientUserDetails> clients = new List<ClientUserDetails>();

        //    clients = db.Clients.Where(client => ids.Contains(client.Id)).ToList();

        //    return clients;
        //}

        public bool AddClient(ClientUserDetails client)
        {
            if (client == null)
            {
                throw new ArgumentNullException();
            }

            client.Id = Guid.NewGuid();
            db.Clients.Add(client);
            return Save();
        }

        public bool DeleteClient(ClientUserDetails client)
        {
            db.Clients.Remove(client);
            return Save();
        }

        public bool UpdateClient(ClientUserDetails client)
        {
            if (client == null)
            {
                throw new ArgumentNullException();
            }
            //db.Clients.Attach(vm.Client);
            //// it should be vm (not vm.Client)
            //db.Entry(vm.Client).State = EntityState.Modified;
            //db.SaveChanges();
            db.Clients.Update(client);
            return Save();
        }

        public ClientUserDetails GetClient(Guid id)
        {
            ClientUserDetails client;

            client = db.Clients
                //                    .Include("Artist")
                //                    .Include("Genre")
                .SingleOrDefault(i => i.Id == id);
            return client;
        }

        public bool Save()
        {
            var saved = db.SaveChanges();
            return saved > 0 ? true : false;
        }

        public ICollection<ClientUserDetails> GetClientsFromJobListing(Guid jlId)
        {
            return db.ClientJobListings.Where(c => c.JobListing.Id == jlId).Select(i => i.Client).ToList();
        }
    }
}