using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication1.DataContext
{
    public class Context: DbContext
    {
        public DbSet<Palabras> Palabras { get; set; }
        public DbSet<Player> Player { get; set; }
 
    }
}