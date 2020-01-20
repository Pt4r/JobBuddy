using JobBuddy.Data;
using JobBuddy.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using JobBuddy.Data.Repositories.IRepositories;
using JobBuddy.Models.UserDetails;

namespace JobBuddy.Data.Repositories
{
    public class MentorRepository : IMentorRepository
    {
        private ApplicationDbContext _db;
        public MentorRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        //prostheto parametro to id tou Aspnetuser

        public MentorUserDetails GetMentor(Guid id)
        {
            //Allazw to search me basi to Id tou Logged in user ...Wste na fortwnw se kathe login mono ta dedomena tou xristi//
//            IEnumerable<MentorUserDetails> mentors = _db.Mentors.Include(m => m.ApplicationUser).Where(m => m.ApplicationUserId == Id).ToList();

            MentorUserDetails mentors = _db.Mentors
                .Include("ApplicationUser")
                //                    .Include("Artist")
                //                    .Include("Genre")
                .SingleOrDefault(i => i.Id == id);

            return mentors;
        }

        public ICollection<MentorUserDetails> GetAll()
        {
            ICollection<MentorUserDetails> mentors = _db.Mentors.Include("ApplicationUser").ToList();
            return mentors;
        }

        public bool AddMentor(MentorUserDetails mentorUser)
        {
            if (mentorUser == null)
            {
                throw new ArgumentNullException();
            }

            mentorUser.Id = Guid.NewGuid();
            _db.Mentors.Add(mentorUser);
            return Save();

        }

        public bool DeleteMentor(MentorUserDetails mentor)
        {
            _db.Mentors.Remove(mentor);
            return Save();
        }

        public bool UpdateMentor(MentorUserDetails mentorUser)
        {
            if (mentorUser == null)
            {
                throw new ArgumentNullException();
            }

            //_db.Mentors.Attach(mentorUser);
            //_db.Entry(mentorUser).State = EntityState.Modified;

            _db.Mentors.Update(mentorUser);
            return Save();
        }

        public MentorUserDetails FindMentorbyId(Guid id)
        {
            MentorUserDetails mentorUserFound;


            mentorUserFound = _db.Mentors.Include("ApplicationUser").SingleOrDefault(m => m.Id == id);



            return mentorUserFound;
        }

        public bool Save()
        {
            var saved = _db.SaveChanges();
            return saved > 0 ? true : false;
        }

    }

}

