using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Models.ManyToMany
{
    public class ClientJobListing
    {
        public Guid ClientId { get; set; }
        public Guid JobListingId { get; set; }
        public ClientUserDetails Client { get; set; }
        public JobListing JobListing { get; set; }

    }
}
