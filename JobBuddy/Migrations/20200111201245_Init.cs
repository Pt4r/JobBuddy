using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JobBuddy.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HrUser_Companies_CompanyId",
                table: "HrUser");

            migrationBuilder.DropForeignKey(
                name: "FK_JobListing_JobCategory_JobCategoryId",
                table: "JobListing");

            migrationBuilder.DropPrimaryKey(
                name: "PK_JobCategory",
                table: "JobCategory");

            migrationBuilder.RenameTable(
                name: "JobCategory",
                newName: "JobCategories");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Companies",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Address",
                table: "Companies",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<Guid>(
                name: "ApplicationUserId",
                table: "Companies",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "JobCategoryId",
                table: "Companies",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "AspNetUsers",
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "AspNetUsers",
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ProfilePicture",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Subcategory_2",
                table: "JobCategories",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Subcategory_1",
                table: "JobCategories",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "CompanyId",
                table: "JobCategories",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "JobCategoryTitle",
                table: "JobCategories",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_JobCategories",
                table: "JobCategories",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Administrators",
                columns: table => new
                {
                    AdminId = table.Column<Guid>(nullable: false),
                    ApplicationUserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Administrators", x => x.AdminId);
                    table.ForeignKey(
                        name: "FK_Administrators_AspNetUsers_ApplicationUserId",
                        column: x => x.ApplicationUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Companies_ApplicationUserId",
                table: "Companies",
                column: "ApplicationUserId");

            migrationBuilder.CreateIndex(
                name: "IX_JobCategories_CompanyId",
                table: "JobCategories",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_Administrators_ApplicationUserId",
                table: "Administrators",
                column: "ApplicationUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Companies_JobCategories_ApplicationUserId",
                table: "Companies",
                column: "ApplicationUserId",
                principalTable: "JobCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_HrUser_Companies_CompanyId",
                table: "HrUser",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_JobCategories_Companies_CompanyId",
                table: "JobCategories",
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Companies_JobCategories_ApplicationUserId",
                table: "Companies");

            migrationBuilder.DropForeignKey(
                name: "FK_HrUser_Companies_CompanyId",
                table: "HrUser");

            migrationBuilder.DropForeignKey(
                name: "FK_JobCategories_Companies_CompanyId",
                table: "JobCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_JobListing_JobCategories_JobCategoryId",
                table: "JobListing");

            migrationBuilder.DropTable(
                name: "Administrators");

            migrationBuilder.DropIndex(
                name: "IX_Companies_ApplicationUserId",
                table: "Companies");

            migrationBuilder.DropPrimaryKey(
                name: "PK_JobCategories",
                table: "JobCategories");

            migrationBuilder.DropIndex(
                name: "IX_JobCategories_CompanyId",
                table: "JobCategories");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "JobCategoryId",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ProfilePicture",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "CompanyId",
                table: "JobCategories");

            migrationBuilder.DropColumn(
                name: "JobCategoryTitle",
                table: "JobCategories");

            migrationBuilder.RenameTable(
                name: "JobCategories",
                newName: "JobCategory");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Companies",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Address",
                table: "Companies",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Subcategory_2",
                table: "JobCategory",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "Subcategory_1",
                table: "JobCategory",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AddPrimaryKey(
                name: "PK_JobCategory",
                table: "JobCategory",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_HrUser_Companies_CompanyId",
                table: "HrUser",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_JobListing_JobCategory_JobCategoryId",
                table: "JobListing",
                column: "JobCategoryId",
                principalTable: "JobCategory",
                principalColumn: "Id");
        }
    }
}
