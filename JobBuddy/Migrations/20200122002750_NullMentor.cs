using Microsoft.EntityFrameworkCore.Migrations;

namespace JobBuddy.Migrations
{
    public partial class NullMentor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte>(
                name: "Rating",
                table: "Mentors",
                nullable: true,
                oldClrType: typeof(byte),
                oldType: "tinyint");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Mentors",
                maxLength: 2000,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(2000)",
                oldMaxLength: 2000);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte>(
                name: "Rating",
                table: "Mentors",
                type: "tinyint",
                nullable: false,
                oldClrType: typeof(byte),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Mentors",
                type: "nvarchar(2000)",
                maxLength: 2000,
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 2000,
                oldNullable: true);
        }
    }
}
