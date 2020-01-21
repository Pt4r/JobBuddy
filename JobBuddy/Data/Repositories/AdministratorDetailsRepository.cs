using System;
using System.Collections.Generic;
using System.Linq;
using JobBuddy.Data.Repositories.IRepositories;
using JobBuddy.Models.UserDetails;
using Microsoft.EntityFrameworkCore;

namespace JobBuddy.Data.Repositories
{
    public class AdministratorDetailsRepository : IAdministratorDetailsRepository
    {
        private readonly ApplicationDbContext _db;
        public AdministratorDetailsRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public ICollection<AdministratorDetails> GetAll()
        {
           ICollection<AdministratorDetails> admins = _db.Administrators.Include("ApplicationUser").ToList();
            return admins;
        }

        public AdministratorDetails GetAdministrator(Guid id)
        {
            AdministratorDetails administrator;

            administrator = _db.Administrators.Include("ApplicationUser").SingleOrDefault(i => i.Id == id);

            return administrator;
        }

        public bool AddAdministrator(AdministratorDetails administratorUser)
        {
            if (administratorUser == null)
            {
                throw new ArgumentNullException();
            }

            administratorUser.Id = Guid.NewGuid();
            _db.Administrators.Add(administratorUser);
            return Save();
        }

        public bool DeleteAdministrator(AdministratorDetails admin)
        {
//            Auto einai gia kanoume delete me vash to Id tou

//            var deletedAdministrator = _db.Administrators.SingleOrDefault(m => m.AdminId == id);
//            if (deletedAdministrator == null)
//            {
//
//                return false;
//            }
//            else
//            {
//                _db.Administrators.Remove(deletedAdministrator);
//                return Save();
//            }

            _db.Administrators.Remove(admin);
            return Save();
        }

        public bool UpdateAdministrator(AdministratorDetails administratorUser)
        {
            if (administratorUser == null)
            {
                return false;
            }

            _db.Administrators.Update(administratorUser);
            return Save();
        }

        public AdministratorDetails FindMentorbyId(Guid id)
        {
            AdministratorDetails administratorFound;

           administratorFound = _db.Administrators.Include("ApplicationUser").SingleOrDefault(m => m.Id == id);

            return administratorFound;
        }

        public bool Save()
        {
            var saved = _db.SaveChanges();
            return saved > 0 ? true : false;
        }
    }

}