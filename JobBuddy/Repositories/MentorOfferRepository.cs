using JobBuddy.Data;
using JobBuddy.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Repositories
{
    public class MentorOfferRepository
    {
        private ApplicationDbContext _db;
        public MentorOfferRepository (ApplicationDbContext db)
        {
            _db = db;
        }
        public IEnumerable<MentorOffer> GetMentorOffers()
        {
            IEnumerable<MentorOffer> mentorOffers;

           
                mentorOffers = _db.MentorOffers.ToList();
            

            return mentorOffers;
        }

        public void AddMentorOffer(MentorOffer mentorOffer)
        {
            if (mentorOffer == null)
            {
                throw new ArgumentNullException();
            }
            
                mentorOffer.MentorOfferId = Guid.NewGuid();
                _db.MentorOffers.Add(mentorOffer);
                _db.SaveChanges();
            
        }


        public void UpdateMentorOffer(MentorOffer mentorOffer)
        {
            if (mentorOffer == null)
            {
                throw new ArgumentNullException();
            }
            
                _db.MentorOffers.Attach(mentorOffer);
                _db.Entry(mentorOffer).State = EntityState.Modified;
                _db.SaveChanges();
            
        }

        public void DeleteMentorOffer(Guid id)
        {
            
                var deletedMentorOffer = _db.MentorOffers.SingleOrDefault(m => m.MentorOfferId == id);
                if (deletedMentorOffer == null)
                {
                    throw new ArgumentNullException();
                }
                else
                {
                    _db.MentorOffers.Remove(deletedMentorOffer);
                    _db.SaveChanges();
                }

            

        }

        public MentorOffer FindMentorbyId(Guid id)
        {
            MentorOffer mentorOfferFound;

           
                mentorOfferFound = _db.MentorOffers.SingleOrDefault(m => m.MentorId == id);

            

            return mentorOfferFound;
        }


    }

}

