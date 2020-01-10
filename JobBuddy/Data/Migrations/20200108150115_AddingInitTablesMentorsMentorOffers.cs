using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JobBuddy.Data.Migrations
{
    public partial class AddingInitTablesMentorsMentorOffers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Companies",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: false),
                    Address = table.Column<string>(nullable: false),
                    PhoneNumber = table.Column<int>(nullable: false),
                    Email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companies", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Mentors",
                columns: table => new
                {
                    MentorId = table.Column<Guid>(nullable: false),
                    PhoneNumber = table.Column<string>(nullable: false),
                    Rating = table.Column<byte>(nullable: true),
                    ProfilePicture = table.Column<string>(nullable: true),
                    Gender = table.Column<int>(nullable: false),
                    Description = table.Column<string>(maxLength: 2000, nullable: false),
                    CompanyId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mentors", x => x.MentorId);
                    table.ForeignKey(
                        name: "FK_Mentors_Companies_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "MentorOffers",
                columns: table => new
                {
                    MentorOfferId = table.Column<Guid>(nullable: false),
                    ClientId = table.Column<Guid>(nullable: false),
                    MentorId = table.Column<Guid>(nullable: false),
                    OfferStatus = table.Column<int>(nullable: false),
                    PostDate = table.Column<DateTime>(nullable: false),
                    ExpirationDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MentorOffers", x => x.MentorOfferId);
                    table.ForeignKey(
                        name: "FK_MentorOffers_Mentors_MentorId",
                        column: x => x.MentorId,
                        principalTable: "Mentors",
                        principalColumn: "MentorId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_MentorOffers_MentorId",
                table: "MentorOffers",
                column: "MentorId");

            migrationBuilder.CreateIndex(
                name: "IX_Mentors_CompanyId",
                table: "Mentors",
                column: "CompanyId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MentorOffers");

            migrationBuilder.DropTable(
                name: "Mentors");

            migrationBuilder.DropTable(
                name: "Companies");
        }
    }
}
