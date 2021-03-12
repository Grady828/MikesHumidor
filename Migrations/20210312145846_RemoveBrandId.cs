using Microsoft.EntityFrameworkCore.Migrations;

namespace MikesHumidor.Migrations
{
    public partial class RemoveBrandId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BrandId",
                table: "Cigars");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BrandId",
                table: "Cigars",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
