using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;
using JobBuddy.Models.ChatServices;

namespace JobBuddy.Models
{


    public class ChatHub : Hub
    {
        //private readonly IChatRoomService _chatRoomService;

        //public ChatHub(IChatRoomService chatRoomService)
        //{
        //    _chatRoomService = chatRoomService;
        //}

        public override async Task OnConnectedAsync()
        {
            //var roomId = await _chatRoomService.CreateRoom(
            //    Context.ConnectionId);

            //await Groups.AddToGroupAsync(
            //    Context.ConnectionId, roomId.ToString());

            await Clients.Caller.SendAsync(
                "ReceiveMessage",
                "Job Buddy Team",
                DateTimeOffset.UtcNow,
                "Hello! What can we help you with today?");

            await base.OnConnectedAsync();
        }

        public async Task SendMessage(string name, string text)
        {
            //var roomId = await _chatRoomService.GetRoomForConnectionId(
            //    Context.ConnectionId);

            var message = new Message
            {
                SenderName = name,
                Text = text,
                SentAt = DateTimeOffset.UtcNow
            };

            // Broadcast to all clients
            //await Clients.Group(roomId.ToString()).SendAsync(
            //    "ReceiveMessage",
            //    message.SenderName,
            //    message.SentAt,
            //    message.Text);

            await Clients.All.SendAsync(
                "ReceiveMessage",
                message.SenderName,
                message.SentAt,
                message.Text);
        }
    }
}