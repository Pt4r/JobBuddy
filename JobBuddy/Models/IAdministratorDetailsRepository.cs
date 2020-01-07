using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Models
{
    public interface IAdministratorDetailsRepository
    {
        ICollection<AdministratorDetails> GetAdministrators();
        AdministratorDetails GetOneAdministrator(Guid adminId);
        //JobCategory GetJobCategoryFromJobListing(int joblistingId);
        //ICollection<JobListing> GetJobListingFromJobCategory(int jobcategoryId);

        void CreateAdmin(AdministratorDetails administratorDetails);
        bool UpdateAdmin(AdministratorDetails administratorDetails);

        bool DeleteAdmin(AdministratorDetails administratorDetails);
        bool SaveAdmin();
    }
}
