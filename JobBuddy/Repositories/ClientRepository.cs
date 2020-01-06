//using System;
//using System.Collections.Generic;
//using System.Data.Entity;
//using System.Linq;
//using System.Web;
//using JobBuddy.Models;

//namespace JobBuddy.Repositories
//{
//    public class ClientRepository
//    {
//        //prostheto parametro to id tou Aspnetuser
//        public IEnumerable<ClientUserDetails> GetClients(string Id)
//        {
//            IEnumerable<ClientUserDetails> clients;

//            using (var db = new AppDbContext())
//            {
//                //Allazw to search me basi to Id tou Logged in user ...Wste na fortwnw se kathe login mono ta dedomena tou xristi//
//                clients = db.Clients.Where(c => c.ApplicationUserId == Id).ToList();
//            }

//            return clients;
//        }

//        public IEnumerable<ClientUserDetails> GetClients(IEnumerable<Guid> ids)
//        {
//            List<ClientUserDetails> clients = new List<ClientUserDetails>();

//            using (var db = new AppDbContext())
//            {
//                clients = db.Clients.Where(client => ids.Contains(client.Id)).ToList();
//            }

//            return clients;
//        }

//        public void AddClient(ClientUserDetails client)
//        {
//            if (client == null)
//            {
//                throw new ArgumentNullException();
//            }

//            using (var db = new AppDbContext())
//            {
//                client.Id = Guid.NewGuid();
//                db.Clients.Add(client);
//                db.SaveChanges();

//            }
//        }

//        public void DeleteClient(Guid id)
//        {
//            using (var db = new AppDbContext())
//            {
//                var client = db.Clients.Find(id);
//                db.Clients.Remove(client);
//                db.SaveChanges();
//            }
//        }

//        public void UpdateClient(ClientCreateViewModel vm)
//        {
//            if (vm == null)
//            {
//                throw new ArgumentNullException();
//            }

//            using (var db = new AppDbContext())
//            {
//                db.Clients.Attach(vm.Client);
//                // it should be vm (not vm.Client)
//                db.Entry(vm.Client).State = EntityState.Modified;
//                db.SaveChanges();
//            }
//        }

//        public ClientUserDetails FindById(Guid id)
//        {
//            ClientUserDetails client;
//            using (var db = new AppDbContext())
//            {
//                client = db.Clients
//                    //                    .Include("Artist")
//                    //                    .Include("Genre")
//                    .SingleOrDefault(i => i.Id == id);
//            }

//            return client;
//        }
//    }
//}