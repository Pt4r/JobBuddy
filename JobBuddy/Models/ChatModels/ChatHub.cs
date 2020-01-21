﻿using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;
using JobBuddy.Models.ChatServices;
using Microsoft.AspNetCore.Authorization;
using JobBuddy.Models.ChatModels;

namespace JobBuddy.Models
{

    //[Authorize(Roles = "Admin,Client,HR,Mentor")]
    public class ChatHub : Hub
    {

        private readonly IHubContext<AdminHub> _adminHub;

        public ChatHub(

            IHubContext<AdminHub> adminHub)
        {

            _adminHub = adminHub;
        }

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
