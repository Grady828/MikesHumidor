using System;
using System.Collections.Generic;

namespace MikesHumidor.Models
{
    public class Cigar
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Length { get; set; }
        public int Gauge { get;set; }
        public int Price { get; set; }

        public string Wrapper { get;set; }
        public string Filler { get;set; }
        public string Binder { get;set; }
        public int InStock { get; set; }
        public DateTime DateBought { get; set; } = DateTime.Now;
        public string Strength { get; set; }
        public string Notes { get; set; }
        public int BrandId {get;set;}
        
        public Brand Brand { get; set; }
        

    }
}