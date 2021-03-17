using Microsoft.EntityFrameworkCore.Migrations;

namespace MikesHumidor.Migrations
{
    public partial class addsbrandstocigars : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Brands_Cigars_CigarId",
                table: "Brands");

            migrationBuilder.DropIndex(
                name: "IX_Brands_CigarId",
                table: "Brands");

            migrationBuilder.DropColumn(
                name: "CigarId",
                table: "Brands");

            migrationBuilder.AddColumn<int>(
                name: "BrandId",
                table: "Cigars",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Cigars_BrandId",
                table: "Cigars",
                column: "BrandId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cigars_Brands_BrandId",
                table: "Cigars",
                column: "BrandId",
                principalTable: "Brands",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cigars_Brands_BrandId",
                table: "Cigars");

            migrationBuilder.DropIndex(
                name: "IX_Cigars_BrandId",
                table: "Cigars");

            migrationBuilder.DropColumn(
                name: "BrandId",
                table: "Cigars");

            migrationBuilder.AddColumn<int>(
                name: "CigarId",
                table: "Brands",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Brands_CigarId",
                table: "Brands",
                column: "CigarId");

            migrationBuilder.AddForeignKey(
                name: "FK_Brands_Cigars_CigarId",
                table: "Brands",
                column: "CigarId",
                principalTable: "Cigars",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
