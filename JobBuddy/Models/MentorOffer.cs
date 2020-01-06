using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace JobBuddy.Models
{
    public class MentorOffer
    {
        public Guid MentorOfferId { get; set; }

        public Guid ClientId { get; set; }
        public ClientUserDetails Client { get; set; }

        public Guid MentorId { get; set; }
        public MentorUserDetails Mentor { get; set; }

        public OfferStatus OfferStatus { get; set; }

        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime PostDate { get; set; }

        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime ExpirationDate { get; set; }


        public MentorOffer()
        {
            PostDate = DateTime.Today;
        }
    }
}