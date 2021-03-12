using System;

namespace MikesHumidor.Models
{
    public class Cigar
    {
        public int Id { get;set; }
        public string Name { get;set; }
        public int Size { get;set; }
        public int Price { get; set; }
        public int InStock { get;set; }
        public DateTime DateBought { get;set; }
        public string Strength { get;set; }
        public string Notes { get;set; }
        // public int BrandId { get;set; }

    }
}