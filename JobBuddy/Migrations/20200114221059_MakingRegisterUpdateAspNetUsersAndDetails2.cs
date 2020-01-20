using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JobBuddy.Migrations
{
    public partial class MakingRegisterUpdateAspNetUsersAndDetails2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HrUser_Companies_CompanyId",
                table: "HrUser");

            migrationBuilder.DropForeignKey(
                name: "FK_JobListing_JobCategories_JobCategoryId",
                table: "JobListing");

            migrationBuilder.DropForeignKey(
                name: "FK_MentorOffers_Clients_ClientUserDetailsId",
                table: "MentorOffers");

            migrationBuilder.DropIndex(
                name: "IX_MentorOffers_ClientUserDetailsId",
                table: "MentorOffers");

            migrationBuilder.DropColumn(
                name: "ClientUserDetailsId",
                table: "MentorOffers");

            migrationBuilder.AddColumn<string>(
                name: "UserRole",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_MentorOffers_ClientId",
                table: "MentorOffers",
                column: "ClientId");

            migrationBuilder.AddForeignKey(
                name: "FK_HrUser_Companies_CompanyId",
                table: "HrUser",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_JobListing_JobCategories_JobCategoryId",
                table: "JobListing",
                column: "JobCategoryId",
                principalTable: "JobCategories",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MentorOffers_Clients_ClientId",
                table: "MentorOffers",
                column: "ClientId",
                principalTable: "Clients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HrUser_Companies_CompanyId",
                table: "HrUser");

            migrationBuilder.DropForeignKey(
                name: "FK_JobListing_JobCategories_JobCategoryId",
                table: "JobListing");

            migrationBuilder.DropForeignKey(
                name: "FK_MentorOffers_Clients_ClientId",
                table: "MentorOffers");

            migrationBuilder.DropIndex(
                name: "IX_MentorOffers_ClientId",
                table: "MentorOffers");

            migrationBuilder.DropColumn(
                name: "UserRole",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<Guid>(
                name: "ClientUserDetailsId",
                table: "MentorOffers",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_MentorOffers_ClientUserDetailsId",
                table: "MentorOffers",
                column: "ClientUserDetailsId");

            migrationBuilder.AddForeignKey(
                name: "FK_HrUser_Companies_CompanyId",
                table: "HrUser",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_JobListing_JobCategories_JobCategoryId",
                table: "JobListing",
                column: "JobCategoryId",
                principalTable: "JobCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MentorOffers_Clients_ClientUserDetailsId",
                table: "MentorOffers",
                column: "ClientUserDetailsId",
                principalTable: "Clients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
