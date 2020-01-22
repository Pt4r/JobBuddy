﻿var activeRoomId = '';

var agentConnection = new signalR.HubConnectionBuilder()
    .withUrl('/agentHub')
    .build();

agentConnection.on('ActiveRooms', loadRooms);

agentConnection.onclose(function () {
    handleDisconnected(startAgentConnection);
});

function startAgentConnection() {
    agentConnection
        .start()
        .catch(function (err) {
            console.error(err);
        });
}

var chatConnection = new signalR.HubConnectionBuilder()
    .withUrl('/chatHub')
    .build();

chatConnection.onclose(function () {
    handleDisconnected(startChatConnection);
});

chatConnection.on('ReceiveMessage', addMessage);
agentConnection.on('ReceiveMessages', addMessages);

function startChatConnection() {
    chatConnection
        .start()
        .catch(function (err) {
            console.error(err);
        });
}

function handleDisconnected(retryFunc) {
    console.log('Reconnecting in 5 seconds...');
    setTimeout(retryFunc, 5000);
}

function sendMessage(text) {
    if (text && text.length) {
        agentConnection.invoke('SendAgentMessage', activeRoomId, text);
    }
}

function ready() {
    startAgentConnection();
    startChatConnection();

    var chatFormEl = document.getElementById('chatForm');
    chatFormEl.addEventListener('submit', function (e) {
        e.preventDefault();

        var text = e.target[0].value;
        e.target[0].value = '';
        sendMessage(text);
    });
}

function switchActiveRoomTo(id) {
    if (id === activeRoomId) return;

    if (activeRoomId) {
        chatConnection.invoke('LeaveRoom', activeRoomId);
    }

    activeRoomId = id;
    removeAllChildren(roomHistoryEl);

    if (!id) return;

    chatConnection.invoke('JoinRoom', activeRoomId);
    agentConnection.invoke('LoadHistory', activeRoomId);
}


var roomListEl = document.getElementById('roomList');
var roomHistoryEl = document.getElementById('chatHistory');

roomListEl.addEventListener('click', function (e) {
    roomHistoryEl.style.display = 'block';

    setActiveRoomButton(e.target);

    var roomId = e.target.getAttribute('data-id');
    switchActiveRoomTo(roomId);
});

function setActiveRoomButton(el) {
    var allButtons = roomListEl.querySelectorAll('a.list-group-item');

    allButtons.forEach(function (btn) {
        btn.classList.remove('active');
    });

    el.classList.add('active');
}

function loadRooms(rooms) {
    if (!rooms) return;

    var roomIds = Object.keys(rooms);
    if (!roomIds.length) return;

    switchActiveRoomTo(null);
    removeAllChildren(roomListEl);

    roomIds.forEach(function (id) {
        var roomInfo = rooms[id];
        if (!roomInfo.name) return;

        var roomButton = createRoomButton(id, roomInfo);
        roomListEl.appendChild(roomButton);
    });
}

function createRoomButton(id, roomInfo) {
    var anchorEl = document.createElement('a');
    anchorEl.className = 'list-group-item list-group-item-action d-flex justify-content-between align-items-center';
    anchorEl.setAttribute('data-id', id);
    anchorEl.textContent = roomInfo.name;
    anchorEl.href = '#';

    return anchorEl;
}

function addMessages(messages) {
    if (!messages) return;

    messages.forEach(function (m) {
        addMessage(m.senderName, m.sentAt, m.text);
    });
}

function addMessage(name, time, message) {
    var nameSpan = document.createElement('span');
    nameSpan.className = 'name';
    nameSpan.textContent = name;

    var timeSpan = document.createElement('span');
    timeSpan.className = 'time';
    var friendlyTime = moment(time).format('H:mm');
    timeSpan.textContent = friendlyTime;

    var headerDiv = document.createElement('div');
    headerDiv.appendChild(nameSpan);
    headerDiv.appendChild(timeSpan);

    var messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = message;

    var newItem = document.createElement('li');
    newItem.appendChild(headerDiv);
    newItem.appendChild(messageDiv);

    roomHistoryEl.appendChild(newItem);
    roomHistoryEl.scrollTop = roomHistoryEl.scrollHeight - roomHistoryEl.clientHeight;
}

function removeAllChildren(node) {
    if (!node) return;

    while (node.lastChild) {
        node.removeChild(node.lastChild);
    }
}

document.addEventListener('DOMContentLoaded', ready);