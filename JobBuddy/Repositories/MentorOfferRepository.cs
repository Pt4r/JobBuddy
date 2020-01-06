//using System;
//using System.Collections.Generic;
//using System.Data.Entity;
//using System.Linq;
//using System.Web;
//using JobBuddy.Models;

//namespace JobBuddy.Repositories
//{
//    public class MentorOfferRepository
//    {
//        public IEnumerable<MentorOffer> GetMentorOffers()
//        {
//            IEnumerable<MentorOffer> mentorOffers;

//            using (var db = new AppDbContext())
//            {
//                mentorOffers = db.MentorOffers.ToList();
//            }

//            return mentorOffers;
//        }

//        public void AddMentorOffer(MentorOffer mentorOffer)
//        {
//            if (mentorOffer == null)
//            {
//                throw new ArgumentNullException();
//            }
//            using (var db = new AppDbContext())
//            {
//                mentorOffer.MentorOfferId = Guid.NewGuid();
//                db.MentorOffers.Add(mentorOffer);
//                db.SaveChanges();
//            }
//        }


//        public void UpdateMentorOffer(MentorOffer mentorOffer)
//        {
//            if (mentorOffer == null)
//            {
//                throw new ArgumentNullException();
//            }
//            using (var db = new AppDbContext())
//            {
//                db.MentorOffers.Attach(mentorOffer);
//                db.Entry(mentorOffer).State = EntityState.Modified;
//                db.SaveChanges();
//            }
//        }

//        public void DeleteMentorOffer(Guid id)
//        {
//            using (var db = new AppDbContext())
//            {
//                var deletedMentorOffer = db.MentorOffers.SingleOrDefault(m => m.MentorOfferId == id);
//                if (deletedMentorOffer == null)
//                {
//                    throw new ArgumentNullException();
//                }
//                else
//                {
//                    db.MentorOffers.Remove(deletedMentorOffer);
//                    db.SaveChanges();
//                }

//            }

//        }

//        public MentorOffer FindMentorbyId(Guid id)
//        {
//            MentorOffer mentorOfferFound;

//            using (var db = new AppDbContext())
//            {
//                mentorOfferFound = db.MentorOffers.SingleOrDefault(m => m.MentorId == id);

//            }

//            return mentorOfferFound;
//        }


//    }
//}