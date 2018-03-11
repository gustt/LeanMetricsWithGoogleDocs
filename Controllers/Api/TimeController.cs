using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DashBoardAgil.Domain;
using DashBoardAgil.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace DashBoardAgil.Controllers
{
    [Route("api/[controller]")]
    public class TimeController : Controller
    {
        private static TimeViewModel[] Times = new TimeViewModel[]
        {
            new TimeViewModel(){ID = 1, Nome = "Canastra"},
            new TimeViewModel(){ID = 2, Nome = "Angular"},
            new TimeViewModel(){ID = 3, Nome = "Providers"},
            new TimeViewModel(){ID = 4, Nome = "Alfa"},
            new TimeViewModel(){ID = 5, Nome = "Heinecken"},
            new TimeViewModel(){ID = 6, Nome = "Sustentação"},
            new TimeViewModel(){ID = 7, Nome = "Bolo Fuba"},
        };

        [HttpGet()]
        public IEnumerable<TimeViewModel> Obter()
        {
            var retorno = (IEnumerable<TimeViewModel>)Times.ToList();
            return retorno;
        }
    }
}
