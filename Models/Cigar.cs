using System;
using System.Collections.Generic;

namespace MikesHumidor.Models
{
    public class Cigar
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Size { get; set; }
        public int Price { get; set; }
        public int InStock { get; set; }
        public DateTime DateBought { get; set; } = DateTime.Now;
        public string Strength { get; set; }
        public string Notes { get; set; }
        public List<Brand> Brands { get; set; }
        

    }
}