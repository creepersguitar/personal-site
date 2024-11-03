using System.ComponentModel.DataAnnotations;

namespace YourNamespace.Models
{
    public class Lore
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Title { get; set; }

        [Required]
        [StringLength(1000)]
        public string Description { get; set; }

        [StringLength(50)]
        public string Faction { get; set; }
    }
}
