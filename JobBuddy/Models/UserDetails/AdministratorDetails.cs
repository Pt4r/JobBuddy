using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobBuddy.Models.UserDetails
{
    public class AdministratorDetails : ApplicationUser
    {
        [Key]
        [ForeignKey("ApplicationUser")]
        public Guid Id { get; set; }

        //Προσθέτω Foreign key se ola ta details APP USER

        public virtual ApplicationUser ApplicationUser { get; set; }


    }
}
