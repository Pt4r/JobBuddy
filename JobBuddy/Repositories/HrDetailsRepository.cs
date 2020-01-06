using JobBuddy.Data;
using JobBuddy.Services;
using JobBuddy.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JobBuddy.Repositories
{
    public class HrDetailsRepository :IHrDetailsRepository
    {
        private readonly ApplicationDbContext db;

        public HrDetailsRepository(ApplicationDbContext db)
        {
            this.db = db;
        }
        //prostheto parametro to id tou Aspnetuser
        public IEnumerable<HrUserDetails> GetHrs(string Id)
        {
            IEnumerable<HrUserDetails> hrDetails;

            //Allazw to search me basi to Id tou Logged in user ...Wste na fortwnw se kathe login mono ta dedomena tou xristi//
            hrDetails = db.HRs.Where(m => m.ApplicationUserId == Id).ToList();

            return hrDetails;
        }

        public HrUserDetails AddHr(HrUserDetails hrDetail)
        {
            if (hrDetail == null)
            {
                throw new ArgumentNullException();
            }
            hrDetail.Id = Guid.NewGuid();
            db.HRs.Add(hrDetail);
            db.SaveChanges();
            return hrDetail;

        }

        public HrUserDetails UpdateHr(HrUserDetails hrDetail)
        {
            if (hrDetail == null)
            {
                throw new ArgumentNullException();
            }

            db.HRs.Attach(hrDetail);
            db.Entry(hrDetail).State = EntityState.Modified;
            db.SaveChanges();
            return hrDetail;

        }

        public HrUserDetails DeleteHr(Guid id)
        {
            var hrDetail = db.HRs.Find(id);
            db.HRs.Remove(hrDetail);
            db.SaveChanges();
            return hrDetail;

        }

        public HrUserDetails FindHrById(Guid id)
        {
            HrUserDetails hrDetail;

            hrDetail = db.HRs.Find(id);

            return hrDetail;
        }

        public ICollection<JobListing> GetJobListingsFromHr(Guid id)
        {
            return db.JobListings.Where(h => h.HrUserId == id).ToList();
        }

        public ICollection<JobListing> GetJobListingsFromLoggedInHr(string id)
        {
            HrUserDetails h1 = db.HRs.Where(m => m.ApplicationUserId == id).FirstOrDefault();
            return db.JobListings.Where(h => h.HrUserId == h1.Id).ToList();
        }
    }

}