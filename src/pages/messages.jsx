import MainLayout from "@/components/layout/main-layout";
import { useState, useEffect } from "react";
import { Search, Send, Paperclip } from "lucide-react";
import Image from "next/image";

const initialConversations = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "https://via.placeholder.com/150",
    lastMessage: "Sounds good, let's connect next week.",
    timestamp: "10:45 AM",
    unread: 2,
    messages: [
      { sender: "other", text: "Hi there! I saw your application and was very impressed." },
      { sender: "me", text: "Thank you! I'm very interested in the opportunity." },
      { sender: "other", text: "Sounds good, let's connect next week." },
    ],
  },
  {
    id: 2,
    name: "Bob Williams",
    avatar: "https://via.placeholder.com/150",
    lastMessage: "Can you send over your portfolio?",
    timestamp: "9:30 AM",
    unread: 0,
    messages: [
        { sender: "other", text: "Thanks for applying. Can you send over your portfolio?" },
    ]
  },
  {
    id: 3,
    name: "Charlie Brown",
    avatar: "https://via.placeholder.com/150",
    lastMessage: "You're welcome!",
    timestamp: "Yesterday",
    unread: 0,
    messages: [
        { sender: "me", text: "Just sent it over. Thanks!" },
        { sender: "other", text: "You're welcome!" },
    ]
  },
];

function MessagesPage() {
    const [conversations, setConversations] = useState(initialConversations);
    const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
    const [searchTerm, setSearchTerm] = useState("");
    const [newMessage, setNewMessage] = useState("");
    const [chatContainer, setChatContainer] = useState(null);

    const filteredConversations = conversations.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));

    useEffect(() => {
        const isSelectedInFiltered = filteredConversations.some(c => c.id === selectedConversation?.id);
        if (!isSelectedInFiltered) {
            setSelectedConversation(filteredConversations.length > 0 ? filteredConversations[0] : null);
        }
    }, [searchTerm, conversations]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim() || !selectedConversation) return;

        const updatedConversations = conversations.map(convo => {
            if (convo.id === selectedConversation.id) {
                const newMessages = [...convo.messages, { sender: 'me', text: newMessage }];
                return { ...convo, messages: newMessages, lastMessage: newMessage };
            }
            return convo;
        });

        const newSelectedConversation = updatedConversations.find(c => c.id === selectedConversation.id);
        setConversations(updatedConversations);
        setSelectedConversation(newSelectedConversation);
        setNewMessage("");
    };

    useEffect(() => {
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [selectedConversation?.messages.length]);


  return (
    <div className="flex-1 flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <div className="w-1/3 border-r bg-gray-50 flex flex-col" aria-label="Conversations list">
        <div className="p-4 border-b">
          <h1 className="text-2xl font-bold">Messages</h1>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((convo) => (
            <div
              key={convo.id}
              className={`p-4 border-b cursor-pointer hover:bg-gray-100 ${selectedConversation?.id === convo.id ? 'bg-blue-50' : ''}`}
              onClick={() => setSelectedConversation(convo)}
            >
              <div className="flex items-center">
                <Image src={convo.avatar} alt={convo.name} width={48} height={48} className="rounded-full mr-4" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{convo.name}</h2>
                    <span className="text-xs text-gray-500">{convo.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{convo.lastMessage}</p>
                </div>
                {convo.unread > 0 && (
                  <div className="ml-2 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                    {convo.unread}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="w-2/3 flex flex-col" aria-label="Chat window">
        {selectedConversation ? (
          <>
            <div className="p-4 border-b flex items-center">
              <Image src={selectedConversation.avatar} alt={selectedConversation.name} width={40} height={40} className="rounded-full mr-3" />
              <div>
                <h2 className="font-semibold">{selectedConversation.name}</h2>
                <p className="text-xs text-green-500">Online</p>
              </div>
            </div>
            <div ref={setChatContainer} className="flex-1 p-6 overflow-y-auto bg-white">
                {selectedConversation.messages.map((msg, index) => (
                    <div key={index} className={`flex mb-4 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`rounded-lg px-4 py-2 max-w-md ${msg.sender === 'me' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-4 bg-gray-50 border-t">
              <form onSubmit={handleSendMessage} className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full pl-4 pr-20 py-3 border rounded-full focus:ring-2 focus:ring-blue-500"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <div className="absolute right-2 flex items-center">
                    <button type="button" aria-label="Attach file" className="p-2 text-gray-500 hover:text-gray-700">
                        <Paperclip className="h-5 w-5" />
                    </button>
                    <button type="submit" aria-label="Send message" className="ml-2 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                        <Send className="h-5 w-5" />
                    </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a conversation to start messaging.
          </div>
        )}
      </div>
    </div>
  );
}

MessagesPage.getLayout = (page) => {
  return <MainLayout page={page} />;
};

export default MessagesPage;