using Microsoft.EntityFrameworkCore.Migrations;

namespace MikesHumidor.Migrations
{
    public partial class AddPhotoURLToBrand : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PhotoURL",
                table: "Brands",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoURL",
                table: "Brands");
        }
    }
}
