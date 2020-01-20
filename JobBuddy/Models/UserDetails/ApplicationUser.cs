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
        
        [Display(Name = "Profile Picture")]
        [DataType(DataType.Upload)]
        public string? ProfilePicture { get; set; }

        /// Πρόσθεσα λίστες μαζί με Details και UserRole ===> από αυτό θα πάρει το ViewModel....Spyros
        public string UserRole { get; set; }

    }
}
