import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedContact, setSelectedContact] = useState(1); // Default to first contact
  
  // Simulate different contacts
  const contacts = [
    { id: 1, name: "John Doe", imageUrl: "https://felan.ricetheme.com/wp-content/uploads/2024/11/thierry-noir-nachstes-mal-kaufe-ich-eine-E10QJ-570.jpeg", lastMessageTime: "2 days ago" },
    { id: 2, name: "Jane Smith", imageUrl: "https://felan.ricetheme.com/wp-content/uploads/2024/11/thierry-noir-nachstes-mal-kaufe-ich-eine-E10QJ-570.jpeg", lastMessageTime: "1 hour ago" },
    { id: 3, name: "Mark Lee", imageUrl: "https://felan.ricetheme.com/wp-content/uploads/2024/11/thierry-noir-nachstes-mal-kaufe-ich-eine-E10QJ-570.jpeg", lastMessageTime: "5 minutes ago" },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, id: Date.now(), sentByUser: true }]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar (Contacts List) */}
      <div className="w-1/4 bg-blue-600 text-white p-6">
        <h2 className="text-2xl font-bold">Chats</h2>
        <div className="mt-4 space-y-2">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center p-2 cursor-pointer rounded-lg hover:bg-blue-700 ${
                selectedContact === contact.id ? 'bg-blue-800' : ''
              }`}
              onClick={() => setSelectedContact(contact.id)}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                <img
                  src={contact.imageUrl}
                  alt={contact.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="font-semibold">{contact.name}</div>
                <div className="text-xs text-gray-300">{contact.lastMessageTime}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Chat Section */}
      <div className="flex-1 bg-white p-6 flex flex-col">
        {/* Chat Header */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <h1 className="text-xl font-semibold">Chat with {contacts.find(contact => contact.id === selectedContact)?.name}</h1>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto mt-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${
                  message.sentByUser ? 'text-black text-center ml-80 bg-blue-300' : 'bg-gray-100 text-black'
                }`}
              >
                <p>{message.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="mt-4 w-full">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
