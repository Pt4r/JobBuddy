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

        
        public virtual DbSet<JobCategory> JobCategories { get; set; }
        public virtual DbSet<AdministratorDetails> Administrators { get; set; }
        public virtual DbSet<Company> Companies { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<JobCategory>().HasKey(i => i.Id);
            modelBuilder.Entity<JobCategory>().Property(i => i.JobCategoryTitle).IsRequired();
            modelBuilder.Entity<JobCategory>().Property(i => i.Subcategory_1).IsRequired();
            modelBuilder.Entity<JobCategory>().Property(i => i.Subcategory_2).IsRequired();

            modelBuilder.Entity<AdministratorDetails>().HasKey(a => a.AdminId);
            modelBuilder.Entity<AdministratorDetails>().HasOne(a => a.ApplicationUser1).WithMany(a => a.Admins);
        }
    }
}
