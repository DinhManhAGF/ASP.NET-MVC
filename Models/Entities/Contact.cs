using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace App.Models.Entities
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }
        
        [Display(Name = "Tên đầy đủ")]
        [Column(TypeName = "nvarchar")]
        [StringLength(50)]
        [Required(ErrorMessage = "{0} phải được nhập")]
        public string FullName { get; set; }

        [Required(ErrorMessage = "{0} phải được nhập")]
        [StringLength(100)]
        [EmailAddress(ErrorMessage = "Phải là địa chỉ email")]
        public string Email { get; set; }
        
        public DateTime DataSent { get; set; }

        [Display(Name = "Thông báo")]
        [Required(ErrorMessage = "{0} phải được nhập")]
        public string Message { get; set; }

        [StringLength(50)]
        [Display(Name = "Số điện thoại")]
        [Required(ErrorMessage = "{0} phải được nhập")]
        public string Phone { get; set;}
    }
}