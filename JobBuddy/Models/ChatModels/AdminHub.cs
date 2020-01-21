

using JobBuddy.Models;
using JobBuddy.Models.ChatServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobBuddy.Models.ChatModels
{
    //[Authorize(Roles = "Admin")]
    public class AdminHub : Hub
    {
  

        public override async Task OnConnectedAsync()
        {
            if (Context.User.Identity.IsAuthenticated)
            {
                // Authenticated agents don't need a room
                await base.OnConnectedAsync();
                return;
            }



            await Clients.Caller.SendAsync(
                "ReceiveMessage",
                "Job Buddy Team",
                DateTimeOffset.UtcNow,
                "Hello! What can we help you with today?");

            await base.OnConnectedAsync();
        }

        public async Task SendMessage(string name, string text)
        {


            var message = new Message
            {
                SenderName = name,
                Text = text,
                SentAt = DateTimeOffset.UtcNow
            };



            // Broadcast to all clients
            await Clients.All.SendAsync(
                "ReceiveMessage",
                message.SenderName,
                message.SentAt,
                message.Text);

        }
    }
}
