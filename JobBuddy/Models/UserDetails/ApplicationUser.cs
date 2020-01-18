﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Models
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

        


        public string ProfilePicture { get; set; }

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
