using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace SignalRTest
{
    public class TestHub : Hub
    {
        public void DivideByTwo(double number)
        {
            Clients.All.show(number/2);
        }
    }
}