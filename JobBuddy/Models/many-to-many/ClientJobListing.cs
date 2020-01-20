using System;
using JobBuddy.Models.UserDetails;

namespace JobBuddy.Models
{
    public class ClientJobListing
    {
        public Guid ClientId { get; set; }
        public Guid JobListingId { get; set; }
        public ClientUserDetails Client { get; set; }
        public JobListing JobListing { get; set; }

    }
}
