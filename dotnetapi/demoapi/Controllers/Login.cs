using Microsoft.AspNetCore.Mvc;

namespace demoapi.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class LoginController : ControllerBase
{
    [HttpsGet]
    public String Get()
    {
        return "Hello_World";
    }
}
