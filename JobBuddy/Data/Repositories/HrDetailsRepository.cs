using JobBuddy.Data;
using JobBuddy.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Data.Repositories.IRepositories;
using JobBuddy.Models.UserDetails;
using Microsoft.Extensions.Options;

namespace JobBuddy.Data.Repositories
{
    public class HrDetailsRepository : IHrDetailsRepository
    {
        private readonly ApplicationDbContext _db;

        public HrDetailsRepository(ApplicationDbContext db)
        {
            _db = db;
        }


        //prostheto parametro to id tou Aspnetuser

        public ICollection<HrUserDetails> GetAll(Guid Id)
        {
            //Allazw to search me basi to Id tou Logged in user ...Wste na fortwnw se kathe login mono ta dedomena tou xristi//
            //            hrDetails = _db.HRs.Where(m => m.ApplicationUserId == Id).ToList();

            ICollection<HrUserDetails> hrDetails = _db.HRs.Include("ApplicationUser").ToList();
            return hrDetails;
        }

        public HrUserDetails GetHr(Guid id)
        {
            HrUserDetails hrDetail;

            hrDetail = _db.HRs.Include("ApplicationUser").SingleOrDefault(i => i.Id == id);

            return hrDetail;
        }

        public bool AddHr(HrUserDetails hrDetail)
        {
            if (hrDetail == null)
            {
                throw new ArgumentNullException();
            }
            hrDetail.Id = Guid.NewGuid();
            _db.HRs.AddAsync(hrDetail);
            return Save();

        }

        public bool DeleteHr(HrUserDetails hrDetail)
        {
            //var hrId = _db.HRs.Find(hrDetail.Id);
            //_db.HRs.Remove(hrID);
            //_db.SaveChanges();
            _db.HRs.Remove(hrDetail);
            return Save();
        }

        public bool UpdateHr(HrUserDetails hrDetail)
        {
            if (hrDetail == null)
            {
                throw new ArgumentNullException();
            }

            //_db.HRs.Attach(hrDetail);
            //_db.Entry(hrDetail).State = EntityState.Modified;
            //_db.SaveChanges();

            _db.HRs.Update(hrDetail);
            return Save();

        }

        public ICollection<JobListing> GetJobListingsFromHr(Guid id)
        {
            return _db.JobListings.Include("ApplicationUser").Where(h => h.HrUserId == id).ToList();
        }

        //public ICollection<JobListing> GetJobListingsFromLoggedInHr(string id)
        //{
        //    HrUserDetails h1 = _db.HRs.Where(m => m.ApplicationUserId == id).FirstOrDefault();
        //    return _db.JobListings.Where(h => h.HrUserId == h1.Id).ToList();
        //}

        public bool Save()
        {
            var saved = _db.SaveChanges();
            return saved > 0 ? true : false;
        }
    }

}