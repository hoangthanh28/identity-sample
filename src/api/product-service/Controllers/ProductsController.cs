using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace product_service.Controllers
{
    [ApiController]
    [Route("prd/[controller]")]
    [Authorize(AuthenticationSchemes = "oidc")]
    public class ProductsController : ControllerBase
    {
        private static readonly IEnumerable<ProductModel> _products = new List<ProductModel>()
        {
            new ProductModel(){Id = 1, Name =  "Pizza"},
            new ProductModel(){Id = 2, Name =  "Cheese"},
            new ProductModel(){Id = 3, Name = "Hotpot"},
        };

        private readonly ILogger<ProductsController> _logger;

        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_products);
        }
    }
    public class ProductModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
