using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using IdentityServer4.EntityFramework.Entities;
using Microsoft.AspNetCore.Identity;

namespace JobBuddy.Models.UserDetails
{
    public class ApplicationUser : IdentityUser
    {
        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }

        [NotMapped]
        public string Name
        {
            get
            {
                return FirstName + " " + LastName;
            }
        }

        [Required]
        [Display(Name = "Phone Number")]
        [DataType(DataType.PhoneNumber)]
        public string? PhoneNumber { get; set; }

        [Display(Name = "Profile Picture")]
        [DataType(DataType.Upload)]
        public string? ProfilePicture { get; set; }

        /// Πρόσθεσα λίστες μαζί με Details και UserRole ===> από αυτό θα πάρει το ViewModel....Spyros
        public string UserRole { get; set; }

        public List<AdministratorDetails> Admins {get; set;}

        public List<ClientUserDetails> ClientDetails { get; set; }

        public List<HrUserDetails> HrDetails { get; set; }

        public List<MentorUserDetails> MentorDetails { get; set; }




        //public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        //{
        //    // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
        //    var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
        //    // Add custom user claims here
        //    return userIdentity;
        //}
    }
}
