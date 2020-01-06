using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
//using Microsoft.AspNetCore.Identity;

namespace JobBuddy.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit https://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class oldApplicationUser //: IdentityUser
    {
        //[Required]
        //[MaxLength(50)]
        //public string FirstName { get; set; }

        //[Required]
        //[MaxLength(50)]
        //public string LastName { get; set; }


        //[NotMapped]
        //public string FullName
        //{
        //    get
        //    {
        //        return FirstName + " " + LastName;
        //    }
        //}

        //public string ProfilePicture { get; set; }
        //public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        //{
        //    // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
        //    var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
        //    // Add custom user claims here
        //    return userIdentity;
        //}
    }

}
