using JobBuddy.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
       

        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        //public DbSet<ClientUserDetails> Clients { get; set; }
        //public DbSet<HrUserDetails> HRs { get; set; }
        public DbSet<MentorUserDetails> Mentors { get; set; }
        public DbSet<Company> Companies { get; set; }

        public DbSet<MentorOffer> MentorOffers { get; set; }
        //public DbSet<JobCategory> JobCategories { get; set; }
        //public DbSet<JobListing> JobListings { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //eixa kanei kapoies allages sto fluent pou den eixan perastei

            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<MentorUserDetails>()
                      .HasKey(m => m.MentorId);

            modelBuilder.Entity<MentorUserDetails>()
                     .Property(m => m.PhoneNumber)
                     .HasMaxLength(25)
                     .IsRequired();

            //Πρέπει να δω πώς θα μπει το Rating ..Προς το παρόν μόνο Required
            modelBuilder.Entity<MentorUserDetails>()
                      .Property(m => m.Rating)
                      .IsRequired();
            //episis na doume pws mpainei kai ti length...
            modelBuilder.Entity<MentorUserDetails>()
                      .Property(m => m.ProfilePicture)
                      .HasColumnName("[Profile Picture]");


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

        }
    }
}
