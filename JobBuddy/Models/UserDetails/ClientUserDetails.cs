using JobBuddy.Models.ManyToMany;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace JobBuddy.Models
{
    public class ClientUserDetails
    {
        [Key]
        public Guid Id { get; set; }

        [Display(Name = "Profile Picture")]
        [DataType(DataType.Upload)]
        public string ProfilePicture { get; set; }

        [Required]
        [Display(Name = "Phone Number")]
        [DataType(DataType.PhoneNumber)]
        public int PhoneNumber { get; set; }

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