using JobBuddy.Data;
using JobBuddy.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;

namespace JobBuddy.Repositories
{
    //Na tsekaroume me michali ton kodika.. Prepei na anoigokleinoume tin sindesi i oxi? kai an nai pws?

    public class MentorRepository:IMentorRepository
    {
        private ApplicationDbContext _db;
        public MentorRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public MentorRepository()
        {
        }

        //prostheto parametro to id tou Aspnetuser

        public IEnumerable<MentorUserDetails> GetMentors(/*string Id*/)
        {
            IEnumerable<MentorUserDetails> mentors;

            
                //Allazw to search me basi to Id tou Logged in user ...Wste na fortwnw se kathe login mono ta dedomena tou xristi//
                mentors = _db.Mentors.Include(m => m.ApplicationUser)/*.Where(m => m.ApplicationUserId == Id)*/.ToList();
            

            return mentors;
        }

        public void AddMentor(MentorUserDetails mentorUser)
        {
            if (mentorUser == null)
            {
                throw new ArgumentNullException();
            }
           
                mentorUser.MentorId = Guid.NewGuid();
                _db.Mentors.Add(mentorUser);
                _db.SaveChanges();
            
        }


        public bool UpdateMentor(MentorUserDetails mentorUser)
        {
            if (mentorUser == null)
            {
                return false;
            }
           
                _db.Mentors.Attach(mentorUser);
                _db.Entry(mentorUser).State = EntityState.Modified;
                _db.SaveChanges();
            return true;
            
        }

        public bool DeleteMentor(Guid id)
        {
              var deletedMentor = _db.Mentors.SingleOrDefault(m => m.MentorId == id);
                if (deletedMentor == null)
                {
                    
                    return false;
                }
                else
                {
                    _db.Mentors.Remove(deletedMentor);
                    _db.SaveChanges();
                    return true;
                }

            

        }

        public MentorUserDetails FindMentorbyId(Guid id)
        {
            MentorUserDetails mentorUserFound;

            
                mentorUserFound = _db.Mentors.SingleOrDefault(m => m.MentorId == id);

            

            return mentorUserFound;
        }

    }

}

