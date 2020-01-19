using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobBuddy.Models.UserDetails
{
    public class AdministratorDetails : ApplicationUser
    {
        
        [Key]
        public Guid Id { get; set; }

        //Προσθέτω Foreign key se ola ta details APP USER

        [ForeignKey("ApplicationUserId")]
        public ApplicationUser ApplicationUser { get; set; }
        public string ApplicationUserId { get; set; }


    }
}
