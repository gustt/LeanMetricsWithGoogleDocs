using System.Collections.Generic;
using DashBoardAgil.Domain.Interfaces;

namespace DashBoardAgil.Domain
{
    public class Time : TEntity
    {
        public int ID { get; set; }
        public string Nome { get; set; }
        public string Frente { get; set; }
        public IEnumerable<Grafico> Graficos { get; set; }
    }
}