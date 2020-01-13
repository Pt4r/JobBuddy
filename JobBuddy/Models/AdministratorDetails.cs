using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Models
{
    public class AdministratorDetails
    {
        public Guid AdminId { get; set; }
        [ForeignKey("ApplicationUserId")]
        public ApplicationUser ApplicationUser1 { get; set; }
        public string ApplicationUserId { get; set; }


    }
}
