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
        private static readonly string[] _products = new[]
        {
            "Pizza", "Cheese", "Milk"
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
}
