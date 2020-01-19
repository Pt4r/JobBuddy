using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using JobBuddy.Models.enums;

namespace JobBuddy.Models.UserDetails
{
    public class ClientUserDetails : ApplicationUser
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [Display(Name = "Date of Birth")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime BirthDate { get; set; }

        [Required]
        public enumGender Gender { get; set; }

        [Required]
        [Display(Name = "Current Employment Status")]
        public CurrentStatus CurrentStatus { get; set; }

        [Required]
        [Display(Name = "Looking for")]
        public enumLookingForStatus LookingForStatus { get; set; }

        [DataType(DataType.Upload)]
        public string CV { get; set; }

        [Display(Name = "Cover Letter")]
        [DataType(DataType.Upload)]
        public string CoverLetter { get; set; }

        public ICollection<ClientJobListing> JobListings { get; set; }

        public IEnumerable<MentorOffer> OffersReceived { get; set; }

        public IEnumerable<MentorUserDetails> Mentors { get; set; }

        public IEnumerable<HrUserDetails> HRs { get; set; }

        //Προσθέτω Foreign key se ola ta details APP USER

        [ForeignKey("ApplicationUserId")]
        public ApplicationUser ApplicationUser { get; set; }
        public string ApplicationUserId { get; set; }

        public ClientUserDetails()
        {
            //            ProfilePicture = default pic path
            CurrentStatus = CurrentStatus.Unemployed;
            LookingForStatus = enumLookingForStatus.Full_Time;
            JobListings = new HashSet<ClientJobListing>();
            OffersReceived = new HashSet<MentorOffer>();

        }

        //FK List Job Interest

    }
}