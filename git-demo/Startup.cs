using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(git_demo.Startup))]
namespace git_demo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
