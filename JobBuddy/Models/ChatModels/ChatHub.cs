using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;
using JobBuddy.Models.ChatServices;
using JobBuddy.Models.ChatModels;

namespace JobBuddy.Models
{
    public class ChatHub : Hub
    {
        private readonly IChatRoomService _chatRoomService;
        private readonly IHubContext<AgentHub> _agentHub;

        public ChatHub(
            IChatRoomService chatRoomService,
            IHubContext<AgentHub> agentHub)
        {
            _chatRoomService = chatRoomService;
            _agentHub = agentHub;
        }

        public override async Task OnConnectedAsync()
        {
            if (Context.User.Identity.IsAuthenticated)
            {
                // Authenticated agents don't need a room
                await base.OnConnectedAsync();
                return;
            }

            var roomId = await _chatRoomService.CreateRoom(
                Context.ConnectionId);

            await Groups.AddToGroupAsync(
                Context.ConnectionId, roomId.ToString());

            await Clients.Caller.SendAsync(
                "ReceiveMessage",
                "Explore California",
                DateTimeOffset.UtcNow,
                "Hello! What can we help you with today?");

            await base.OnConnectedAsync();
        }

        public async Task SendMessage(string name, string text)
        {
            var roomId = await _chatRoomService.GetRoomForConnectionId(
                Context.ConnectionId);

            var message = new ChatMessage
            {
                SenderName = name,
                Text = text,
                SentAt = DateTimeOffset.UtcNow
            };

            await _chatRoomService.AddMessage(roomId, message);

            // Broadcast to all clients
            await Clients.Group(roomId.ToString()).SendAsync(
                "ReceiveMessage",
                message.SenderName,
                message.SentAt,
                message.Text);

        }

        public async Task SetName(string visitorName)
        {
            var roomName = $"Chat with {visitorName} from the web";

            var roomId = await _chatRoomService.GetRoomForConnectionId(
                Context.ConnectionId);

            await _chatRoomService.SetRoomName(roomId, roomName);

            await _agentHub.Clients.All
                .SendAsync(
                    "ActiveRooms",
                    await _chatRoomService.GetAllRooms());
        }

        [Authorize]
        public async Task JoinRoom(Guid roomId)
        {
            if (roomId == Guid.Empty)
                throw new ArgumentException("Invalid room ID");

            await Groups.AddToGroupAsync(
                Context.ConnectionId, roomId.ToString());
        }

        [Authorize]
        public async Task LeaveRoom(Guid roomId)
        {
            if (roomId == Guid.Empty)
                throw new ArgumentException("Invalid room ID");

            await Groups.RemoveFromGroupAsync(
                Context.ConnectionId, roomId.ToString());
        }
    }
}
