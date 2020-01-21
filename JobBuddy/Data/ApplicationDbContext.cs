using JobBuddy.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobBuddy.Models.UserDetails;

namespace JobBuddy.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
       

        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        
        public virtual DbSet<JobCategory> JobCategories { get; set; }
        public virtual DbSet<AdministratorDetails> Administrators { get; set; }
        public virtual DbSet<ClientUserDetails> Clients { get; set; }
        public virtual DbSet<HrUserDetails> HRs { get; set; }
        public virtual DbSet<MentorUserDetails> Mentors { get; set; }
        public virtual DbSet<Company> Companies { get; set; }
        public virtual DbSet<MentorOffer> MentorOffers { get; set; }
        public virtual DbSet<JobListing> JobListings { get; set; }
        public virtual DbSet<ClientJobListing> ClientJobListings { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //eixa kanei kapoies allages sto fluent pou den eixan perastei

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<JobCategory>().HasKey(i => i.Id);
            modelBuilder.Entity<JobCategory>().Property(i => i.JobCategoryTitle).IsRequired();
            modelBuilder.Entity<JobCategory>().Property(i => i.Subcategory_1).IsRequired();
            modelBuilder.Entity<JobCategory>().Property(i => i.Subcategory_2).IsRequired();
            

            modelBuilder.Entity<AdministratorDetails>().HasKey(a => a.Id);

            modelBuilder.Entity<MentorUserDetails>()
                      .HasKey(m => m.Id);

            //Πρέπει να δω πώς θα μπει το Rating ..Προς το παρόν μόνο Required
            modelBuilder.Entity<MentorUserDetails>()
                      .Property(m => m.Rating)
                      .IsRequired();


            modelBuilder.Entity<MentorUserDetails>()
                      .Property(m => m.Gender)
                      .IsRequired();

            modelBuilder.Entity<MentorUserDetails>()
                        .Property(m => m.Description)
                        .IsRequired()
                        .HasMaxLength(2000);

            //Company-Mentor relationship
            modelBuilder.Entity<MentorUserDetails>()
                     .HasOne(m => m.Company)
                     .WithMany(c => c.Mentors)
                     .HasForeignKey(m => m.CompanyId);
                        //.OnDelete(DeleteBehavior.SetNull);

            //Mentor-MentorOffer Relationship
            modelBuilder.Entity<MentorOffer>()
                        .HasOne(mo => mo.Mentor)
                        .WithMany(m => m.OffersReceived)
                        .HasForeignKey(mo => mo.MentorId);
                        

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
            modelBuilder.Entity<HrUserDetails>().Property(m => m.Gender);
            modelBuilder.Entity<HrUserDetails>().HasOne(I => I.Company).WithMany(C => C.HrUsers).HasForeignKey(I => I.CompanyId).OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<HrUserDetails>().HasMany(i => i.JobListings).WithOne(c => c.HrUser).HasForeignKey(c => c.HrUserId).OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<JobListing>().ToTable("JobListing");
            modelBuilder.Entity<JobListing>().HasKey(i => i.Id);
            modelBuilder.Entity<JobListing>().Property(i => i.Title).IsRequired().HasMaxLength(250);
            modelBuilder.Entity<JobListing>().Property(i => i.Info).HasMaxLength(1000);
            modelBuilder.Entity<JobListing>().HasOne(i => i.HrUser).WithMany(j => j.JobListings).HasForeignKey(c => c.HrUserId).OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<ClientJobListing>().HasKey(sc => new { sc.ClientId, sc.JobListingId });
            modelBuilder.Entity<ClientJobListing>().HasOne(j => j.JobListing).WithMany(i => i.Clients).HasForeignKey(j => j.JobListingId);
            modelBuilder.Entity<ClientJobListing>().HasOne(c => c.Client).WithMany(j => j.JobListings).HasForeignKey(c => c.ClientId);



             modelBuilder.Entity<JobListing>().HasOne(i => i.JobCategory).WithMany(c => c.JobListings).HasForeignKey(i => i.JobCategoryId).OnDelete(DeleteBehavior.NoAction);

        }
    }
}
