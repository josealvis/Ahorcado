using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.DataContext
{
    [Table("Player")]
    public class Player
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int Puntuacion { get; set; }
    }
}