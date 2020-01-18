using JobBuddy.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Models
{
    public class AdministratorDetailsRepository : IAdministratorDetailsRepository
    {
        private ApplicationDbContext _administratorDetailsContext;
        public AdministratorDetailsRepository(ApplicationDbContext administratorDetailsContext)
        {
            _administratorDetailsContext = administratorDetailsContext;
        }

        public void AddAdministrator(AdministratorDetails administratorUser)
        {
            if (administratorUser == null)
            {
                throw new ArgumentNullException();
            }

            administratorUser.AdminId = Guid.NewGuid();
            _administratorDetailsContext.Administrators.Add(administratorUser);
            _administratorDetailsContext.SaveChanges();

        }

        public bool DeleteAdministrator(Guid id)
        {
            var deletedAdministrator = _administratorDetailsContext.Administrators.SingleOrDefault(m => m.AdminId == id);
            if (deletedAdministrator == null)
            {

                return false;
            }
            else
            {
                _administratorDetailsContext.Administrators.Remove(deletedAdministrator);
                _administratorDetailsContext.SaveChanges();
                return true;
            }
        }

        public AdministratorDetails FindMentorbyId(Guid id)
        {
            AdministratorDetails administratorFound;


            administratorFound = _administratorDetailsContext.Administrators.SingleOrDefault(m => m.AdminId == id);



            return administratorFound;
        }

        public IEnumerable<AdministratorDetails> GetAdministrator()
        {
            IEnumerable<AdministratorDetails> administrators;


            //Allazw to search me basi to Id tou Logged in user ...Wste na fortwnw se kathe login mono ta dedomena tou xristi//
            administrators = _administratorDetailsContext.Administrators.Include(m => m.ApplicationUser)/*.Where(m => m.ApplicationUserId == Id)*/.ToList();


            return administrators;
        }

        public bool UpdateAdministrator(AdministratorDetails administratorUser)
        {
            if (administratorUser == null)
            {
                return false;
            }

            _administratorDetailsContext.Administrators.Attach(administratorUser);
            _administratorDetailsContext.Entry(administratorUser).State = EntityState.Modified;
            _administratorDetailsContext.SaveChanges();
            return true;
        }
    }

}