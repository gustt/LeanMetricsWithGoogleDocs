using System.ComponentModel;
using DashBoardAgil.Domain.Interfaces;

namespace DashBoardAgil.Domain
{
    public class Grafico : TEntity
    {
        public int ID { get; set; }
        public Tipos Tipo { get; set; }
        public string URLImagem { get; set; }
        public int TimeID { get; set; }
        public Time Time { get; set;}
        public enum Tipos
        {
            [Description("Não Definido")]
            NaoDefinido,
            [Description("Disperção de Lead Time")]
            DispersaoLeadTime,
            [Description("Lead Time Breakdown")]
            LeadTimeBreakdown,
            [Description("Cumulative Flow Diagram - CFD")]
            CFD
        }
    }

}