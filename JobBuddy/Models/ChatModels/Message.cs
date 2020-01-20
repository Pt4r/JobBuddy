using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Models
{
    public class Message
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string SenderName { get; set; }

        [Required]
        public string Text { get; set; }

        [Required]
        public DateTimeOffset SentAt { get; set; }



    }
}
