using WebApplication1.DataContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class DataController : Controller
    {
        // GET: Data
        public dynamic GetPalabras()
        {
            var _context = new Context();

            var result = _context.Palabras.ToList();
            return  Json(result, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public dynamic GetScore()
        {
            var _context = new Context();

            var result = _context.Player.ToList();
            return Json(result, JsonRequestBehavior.AllowGet); 
        }

        // POST: Data/Create
        [HttpPost]
        public void SetScore(Player player)
        {

            var _context = new Context();
            try
            {
                _context.Player.Add(player);
                _context.SaveChanges();
            }
            catch(Exception er)
            {
                throw er;
            }
        }

     
    }
}
