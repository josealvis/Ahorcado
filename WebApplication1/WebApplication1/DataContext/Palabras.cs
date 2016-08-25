using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.DataContext
{

    [Table("Palabras")]
    public class Palabras
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string ImgUrl { get; set; }

    }
}