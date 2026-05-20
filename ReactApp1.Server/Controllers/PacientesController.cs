using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactApp1.Server.Models;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PacientesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PacientesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/pacientes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Paciente>>> GetPacientes()
        {
            try
            {
                return await _context.Pacientes.ToListAsync();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al obtener pacientes: {ex.Message}");
            }
        }

        // POST: api/pacientes
        [HttpPost]
        public async Task<ActionResult<Paciente>> PostPaciente(Paciente paciente)
        {
            try
            {
                _context.Pacientes.Add(paciente);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetPacientes), new { id = paciente.Id }, paciente);
            }
            catch (Exception ex)
            {
                // Esto devolverá el error real al navegador para que sepas qué está fallando
                return StatusCode(500, $"Error al guardar paciente: {ex.Message}");
            }
        }

        // PUT: api/pacientes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaciente(int id, Paciente paciente)
        {
            if (id != paciente.Id) return BadRequest("El ID del paciente no coincide.");

            try
            {
                _context.Entry(paciente).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al actualizar: {ex.Message}");
            }
        }

        // DELETE: api/pacientes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePaciente(int id)
        {
            try
            {
                var paciente = await _context.Pacientes.FindAsync(id);
                if (paciente == null) return NotFound();

                _context.Pacientes.Remove(paciente);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error al eliminar: {ex.Message}");
            }
        }
    }
}