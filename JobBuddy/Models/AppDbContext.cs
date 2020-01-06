﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using JobBuddy.Models.ManyToMany;
using Microsoft.EntityFrameworkCore;

namespace JobBuddy.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<ClientUserDetails> Clients { get; set; }
        public DbSet<HrUserDetails> HRs { get; set; }
        public DbSet<MentorUserDetails> Mentors { get; set; }
        public DbSet<Company> Companies { get; set; }

        public DbSet<MentorOffer> MentorOffers { get; set; }
        public DbSet<JobCategory> JobCategories { get; set; }
        public DbSet<JobListing> JobListings { get; set; }
        public DbSet<ClientJobListing> ClientJobListings { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) 
            : base(options)
        {
        }
        
        //public static AppDbContext Create()
        //{
        //    return new AppDbContext();
        //}


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<MentorUserDetails>()
                        .HasKey(m => m.MentorId);



            modelBuilder.Entity<MentorUserDetails>()
                        .Property(m => m.Description)
                        .IsRequired()
                        .HasMaxLength(1000);

            modelBuilder.Entity<MentorUserDetails>()
                       .Property(m => m.PhoneNumber)
                       .IsRequired();

            modelBuilder.Entity<MentorUserDetails>()
                      .Property(m => m.Gender)
                      .IsRequired();

            modelBuilder.Entity<MentorOffer>()
                        .HasOne(mo => mo.Mentor)
                        .WithMany(m => m.OffersReceived)
                        .HasForeignKey(mo => mo.MentorId)
                        .OnDelete(DeleteBehavior.NoAction);


            modelBuilder.Entity<MentorOffer>()
                        .HasKey(mo => mo.MentorOfferId);

            modelBuilder.Entity<MentorOffer>()
                        .Property(mo => mo.OfferStatus)
                        .IsRequired();

            modelBuilder.Entity<MentorOffer>()
                     .Property(mo => mo.ExpirationDate)
                     .IsRequired();

            modelBuilder.Entity<MentorOffer>()
                     .Property(mo => mo.PostDate)
                     .IsRequired();

            modelBuilder.Entity<MentorOffer>()
                    .Property(mo => mo.MentorId)
                    .IsRequired();


            modelBuilder.Entity<HrUserDetails>().ToTable("HrUser");
            modelBuilder.Entity<HrUserDetails>().HasKey(i => i.Id);
            modelBuilder.Entity<HrUserDetails>().Property(m => m.Gender).IsRequired();
            modelBuilder.Entity<HrUserDetails>().Property(i => i.PhoneNumber).IsRequired();
            modelBuilder.Entity<HrUserDetails>().HasOne(i => i.Company).WithMany(c => c.HrUser).HasForeignKey(i => i.CompanyId).OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<HrUserDetails>().HasMany(i => i.JobListings).WithOne(c => c.HrUser).HasForeignKey(c => c.HrUserId).OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<JobListing>().ToTable("JobListing");
            modelBuilder.Entity<JobListing>().HasKey(i => i.Id);
            modelBuilder.Entity<JobListing>().Property(i => i.Title).IsRequired().HasMaxLength(250);
            modelBuilder.Entity<JobListing>().Property(i => i.Info).IsRequired().HasMaxLength(1000);

            modelBuilder.Entity<ClientJobListing>().HasKey(sc => new { sc.ClientId, sc.JobListingId });



            // 1. Does not work, just for referanec
            //modelBuilder.Entity<JobListing>().HasMany<ClientUserDetails>(c => c.SubmittedClients).WithMany(j => j.JobListings)
            //    .Map(
            //        jc =>
            //        {
            //            jc.MapLeftKey("FK_JobListingId");
            //            jc.MapRightKey("FK_ClientId");
            //            jc.ToTable("ClientSubmittedJobListings");
            //        });

            modelBuilder.Entity<JobListing>().HasOne(i => i.JobCategory).WithMany(c => c.JobListings).HasForeignKey(i => i.JobCategoryId).OnDelete(DeleteBehavior.NoAction);


            // Pws tha paroume tin etairia tou HrDetail User na tin kanoume assign sto jobListing??

            base.OnModelCreating(modelBuilder);
        }
    }
}


    