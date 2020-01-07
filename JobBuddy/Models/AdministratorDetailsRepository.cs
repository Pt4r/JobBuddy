using JobBuddy.Data;
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
        public ICollection<AdministratorDetails> GetAdministrators()
        {
            return _administratorDetailsContext.Administrators.OrderBy(j => j.ApplicationUser1.LastName).ToList();
        }

        public AdministratorDetails GetOneAdministrator(Guid adminId)
        {
            return _administratorDetailsContext.Administrators.Where(j => j.AdminId==adminId).FirstOrDefault();
        }

        public void CreateAdmin(AdministratorDetails administratorDetails)
        {
            _administratorDetailsContext.AddAsync(administratorDetails);
        }

        public bool DeleteAdmin(AdministratorDetails administratorDetails)
        {
            _administratorDetailsContext.Remove(administratorDetails);
            return SaveAdmin();
        }



        public bool UpdateAdmin(AdministratorDetails administratorDetails)
        {
            _administratorDetailsContext.Update(administratorDetails);
            return SaveAdmin();
        }

       
        public bool SaveAdmin()
        {
            var saved = _administratorDetailsContext.SaveChanges();
            return saved >= 0 ? true : false;
        }

    }
}
