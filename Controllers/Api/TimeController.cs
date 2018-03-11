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
            new TimeViewModel()
            {
                Id = 1,
                Nome = "Canastra",
                CumulativeFlowURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTDPzWaT1ozrJg_1CQSdj08cQ-UKhMwE3jh9-U9zcQSPVB3HDjc-rXKY6Sk1c3VcnVolq35cHlxCyXj/pubchart?oid=1836345385&format=image"
            },
            new TimeViewModel()
            {
                Id = 2,
                Nome = "Alfa",
                CumulativeFlowURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRE5VTqYs8UfkKDcy-DHqcSH6XB7IU903WRw1URqiUZRJYFa6vcxQdi1pTk1Oiw3tBUaTk-_QqteHy-/pubchart?oid=1836345385&format=image"
            },
            new TimeViewModel()
            {
                Id = 3,
                Nome = "Ancora",
                CumulativeFlowURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSbGCy0mjz5Uk49YQGlDTjChqEaOSE9t28rRzBFyl0GE0LyoLhZRnyl8TPJ9d1mj1fyREe2CQQb1S5_/pubchart?oid=1836345385&format=image"
            },
            new TimeViewModel()
            {
                Id = 4,
                Nome = "Ancora",
                CumulativeFlowURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSbGCy0mjz5Uk49YQGlDTjChqEaOSE9t28rRzBFyl0GE0LyoLhZRnyl8TPJ9d1mj1fyREe2CQQb1S5_/pubchart?oid=1836345385&format=image"
            },
            new TimeViewModel()
            {
                Id = 5,
                Nome = "Catatau/Squad Cartão",
                CumulativeFlowURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSgoxLhI2DQDyPJ_ySEQeir9azp21A_TkonV8Xwx7QW5vJiU5rMfn_iUqXZdDdFazsVh25UjSUmXs3H/pubchart?oid=1836345385&format=image"
            },
            new TimeViewModel()
            {
                Id = 6,
                Nome = "Chuck Norris",
                CumulativeFlowURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnWR29goTL72aPikHm3HvKfdbtsOt90XCl03Imv_QpeWwml7we7QvbywABKBhAFWnfxhvqEPrXtQ3t/pubchart?oid=1836345385&format=image"
            },
            new TimeViewModel()
            {
                Id = 6,
                Nome = "Chuck Norris",
                CumulativeFlowURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnWR29goTL72aPikHm3HvKfdbtsOt90XCl03Imv_QpeWwml7we7QvbywABKBhAFWnfxhvqEPrXtQ3t/pubchart?oid=1836345385&format=image"
            },
            new TimeViewModel()
            {
                Id = 7,
                Nome = "Legal",
                CumulativeFlowURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJAsvmF8rANlnv1qAA-sxTHoXiC7RoUa7JK68-ZDBeOfBybVgewj9cgAbSCdJRcEt2grzxib5jI_q4/pubchart?oid=1836345385&format=image"
            },
            new TimeViewModel()
            {
                Id = 8,
                Nome = "Top Gear",
                CumulativeFlowURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQru3yXqWkkbtTyygXRdpTh2KVAZWrZQF_zIr-LJHYn9Obelv9VpuqzrCXyzOH1g4OW5rj7BPrX3Zgs/pubchart?oid=1836345385&format=image"
            },
            new TimeViewModel()
            {
                Id = 9,
                Nome = "Vale do Aço",
                CumulativeFlowURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcOeX0KdZFbJ8BlUqf4VKSNehuiCy0VGR325YhGWDZYSIhvf0K5kEp61f0SNv-2Ctt2Jy-95TAsco2/pubchart?oid=1836345385&format=image"
            },
        };

        [HttpGet()]
        public IEnumerable<TimeViewModel> Obter()
        {
            var retorno = (IEnumerable<TimeViewModel>)Times.ToList();
            return retorno;
        }
    }
}
