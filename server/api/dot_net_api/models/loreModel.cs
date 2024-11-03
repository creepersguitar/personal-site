using System;
using System.ComponentModel.DataAnnotations;

namespace YourNamespace.Models
{
    public class Lore
    {
        // Primary key for the Lore entry
        public int Id { get; set; }

        // Title of the lore entry, required with a max length for validation
        [Required]
        [StringLength(100, ErrorMessage = "Title cannot exceed 100 characters.")]
        public string Title { get; set; }

        // Main description of the lore, required with a larger max length
        [Required]
        [StringLength(2000, ErrorMessage = "Description cannot exceed 2000 characters.")]
        public string Description { get; set; }

        // Faction or group associated with the lore entry, optional
        [StringLength(50, ErrorMessage = "Faction name cannot exceed 50 characters.")]
        public string Faction { get; set; }

        // Optional date representing when this lore entry was added or discovered
        [DataType(DataType.Date)]
        public DateTime? DateDiscovered { get; set; }

        // Additional tags or keywords for categorization
        [StringLength(200, ErrorMessage = "Tags cannot exceed 200 characters.")]
        public string Tags { get; set; }

        // Reference link, for example, to the original lore source or an image
        [Url]
        [StringLength(250, ErrorMessage = "URL cannot exceed 250 characters.")]
        public string SourceUrl { get; set; }
    }
}
