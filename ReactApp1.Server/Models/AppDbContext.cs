using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ReactApp1.Server.Models
{
    public class AppDbContext : DbContext
    {
        // Constructor que recibe las opciones de configuración (cadena de conexión)
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // Esta propiedad le dice a EF que debe crear una tabla llamada "Pacientes"
        public DbSet<Paciente> Pacientes { get; set; }
    }
}