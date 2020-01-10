using JobBuddy.Data;
using JobBuddy.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace JobBuddy.Repositories
{
    public class MentorOfferRepository : IMentorOfferRepository
    {
        private ApplicationDbContext _db;
        public MentorOfferRepository(ApplicationDbContext db)
        {
            _db = db;
        }


        // Otan o mentor pataei to offers tha ton pigainei se pinakaki..ekei me anonymous object tha pernaei to id tou mentor kai etsi ta antistoixa offers

        public IEnumerable<MentorOffer> GetMentorOffers(Guid id)
        {
            IEnumerable<MentorOffer> mentorOffers;


            mentorOffers = _db.MentorOffers.Where(mo => mo.MentorId == id).ToList();



            return mentorOffers;
        }

        public bool AddMentorOffer(MentorOffer mentorOffer)
        {
            ////tha prepei na bazoyme

            //mentorOffer.MentorId==id tou mentor pou tha einai logged in
            if (mentorOffer == null)
            {
                throw new ArgumentNullException();
            }

            mentorOffer.MentorOfferId = Guid.NewGuid();
            _db.MentorOffers.Add(mentorOffer);
            return Save();

        }


        public bool UpdateMentorOffer(MentorOffer mentorOffer)
        {
            if (mentorOffer == null)
            {
                throw new ArgumentNullException();
            }

            //_db.MentorOffers.Attach(mentorOffer);
            //_db.Entry(mentorOffer).State = EntityState.Modified;

            _db.MentorOffers.Update(mentorOffer);
            return Save();

        }

        public bool DeleteMentorOffer(Guid id)
        {

            var deletedMentorOffer = _db.MentorOffers.SingleOrDefault(m => m.MentorOfferId == id);
            if (deletedMentorOffer == null)
            {
                return false;
            }
            else
            {
                _db.MentorOffers.Remove(deletedMentorOffer);
                return Save();
            }



        }

 

        public MentorOffer FindMentorOfferbyId(Guid id)
        {
            MentorOffer mentorOfferFound;


            mentorOfferFound = _db.MentorOffers.SingleOrDefault(m => m.MentorOfferId == id);



            return mentorOfferFound;
        }


        public bool Save()
        {
            var saved = _db.SaveChanges();
            return saved > 0 ? true : false;
        }


    }

}
