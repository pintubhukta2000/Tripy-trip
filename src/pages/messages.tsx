import React, { useState, useEffect } from "react";

interface Message {
  id: number;
  sender: string;
  recipient: string;
  subject: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

const CustomerMessagesPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [composeMode, setComposeMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "read" | "unread">("all");

  const [newMessage, setNewMessage] = useState({
    recipient: "",
    subject: "",
    content: "",
  });

  // Simulate fetching messages from an API
  useEffect(() => {
    // Mock data - in a real application, this would come from an API
    const mockMessages: Message[] = [
      {
        id: 1,
        sender: "john.doe@example.com",
        recipient: "hotel@example.com",
        subject: "Reservation Inquiry",
        content:
          "I would like to know if you have any rooms available for the weekend of July 15-17. We are a family of four looking for accommodations. Thank you!",
        timestamp: "2025-04-07T14:32:00",
        isRead: true,
      },
      {
        id: 2,
        sender: "hotel@example.com",
        recipient: "john.doe@example.com",
        subject: "Re: Reservation Inquiry",
        content:
          "Thank you for your interest! Yes, we do have several room options available for your requested dates. Would you prefer a suite or two connecting rooms? Let me know and I can provide more specific details.",
        timestamp: "2025-04-07T15:10:00",
        isRead: false,
      },
      {
        id: 3,
        sender: "jane.smith@example.com",
        recipient: "hotel@example.com",
        subject: "Special Accommodation Request",
        content:
          "Hello, I have an upcoming stay at your hotel next week. I would like to request a room on a lower floor as I have mobility issues. My confirmation number is #HT78945. Thank you for your assistance.",
        timestamp: "2025-04-06T09:45:00",
        isRead: false,
      },
      {
        id: 4,
        sender: "business.traveler@example.com",
        recipient: "hotel@example.com",
        subject: "Extended Stay Inquiry",
        content:
          "I'm looking to book a room for a 3-week business trip starting May 1st. Do you offer any extended stay rates or special amenities for longer bookings? Also, I'll need reliable WiFi and a desk area for work.",
        timestamp: "2025-04-05T16:22:00",
        isRead: true,
      },
      {
        id: 5,
        sender: "hotel@example.com",
        recipient: "jane.smith@example.com",
        subject: "Re: Special Accommodation Request",
        content:
          "We have noted your request for a lower floor room and have updated your reservation accordingly. We currently have you assigned to room 115 on the first floor, close to the elevator. Please let us know if you require any additional accommodations.",
        timestamp: "2025-04-06T10:30:00",
        isRead: true,
      },
    ];

    setMessages(mockMessages);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewMessage({
      ...newMessage,
      [name]: value,
    });
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const newMsg: Message = {
      id: messages.length + 1,
      sender: "hotel@example.com", // Assuming the hotel staff is sending the message
      recipient: newMessage.recipient,
      subject: newMessage.subject,
      content: newMessage.content,
      timestamp: new Date().toISOString(),
      isRead: true, // Staff messages are marked as read by default
    };

    setMessages([newMsg, ...messages]);
    setComposeMode(false);
    setNewMessage({
      recipient: "",
      subject: "",
      content: "",
    });
  };

  const markAsRead = (id: number) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, isRead: true } : msg))
    );

    // If this is the currently selected message, update that too
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage({
        ...selectedMessage,
        isRead: true,
      });
    }
  };

  const deleteMessage = (id: number) => {
    setMessages(messages.filter((msg) => msg.id !== id));

    // If this was the selected message, clear the selection
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage(null);
    }
  };

  const filteredMessages = messages.filter((msg) => {
    const matchesSearch =
      msg.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.content.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === "all") return matchesSearch;
    if (filter === "read") return matchesSearch && msg.isRead;
    if (filter === "unread") return matchesSearch && !msg.isRead;
    return matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const renderComposeForm = () => (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">New Message</h2>
        <button
          onClick={() => setComposeMode(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>

      <form onSubmit={sendMessage}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            To:
          </label>
          <input
            type="email"
            name="recipient"
            value={newMessage.recipient}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            value={newMessage.subject}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message:
          </label>
          <textarea
            name="content"
            value={newMessage.content}
            onChange={handleInputChange}
            rows={8}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );

  const renderMessageDetail = () => {
    if (!selectedMessage) return null;

    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold mb-1">
              {selectedMessage.subject}
            </h2>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-2">From: {selectedMessage.sender}</span>
              <span>To: {selectedMessage.recipient}</span>
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {formatDate(selectedMessage.timestamp)}
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => {
                setComposeMode(true);
                setNewMessage({
                  recipient:
                    selectedMessage.sender === "hotel@example.com"
                      ? selectedMessage.recipient
                      : selectedMessage.sender,
                  subject: `Re: ${selectedMessage.subject}`,
                  content: `\n\n--------------------\nOn ${formatDate(
                    selectedMessage.timestamp
                  )}, ${selectedMessage.sender} wrote:\n\n${
                    selectedMessage.content
                  }`,
                });
              }}
              className="px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-50"
            >
              Reply
            </button>
            <button
              onClick={() => deleteMessage(selectedMessage.id)}
              className="px-3 py-1 border border-transparent rounded-md shadow-sm text-sm text-white bg-red-600 hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="prose max-w-none">
          {selectedMessage.content.split("\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    );
  };

  const renderMessagesList = () => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center mb-3 sm:mb-0">
            <input
              type="text"
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full sm:w-64"
            />
            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value as "all" | "read" | "unread")
              }
              className="ml-3 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="all">All</option>
              <option value="read">Read</option>
              <option value="unread">Unread</option>
            </select>
          </div>
          <button
            onClick={() => {
              setSelectedMessage(null);
              setComposeMode(true);
            }}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Compose New
          </button>
        </div>
      </div>

      {filteredMessages.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {filteredMessages.map((message) => (
            <li
              key={message.id}
              className={`px-6 py-4 hover:bg-gray-50 cursor-pointer ${
                !message.isRead ? "bg-blue-50" : ""
              }`}
              onClick={() => {
                setSelectedMessage(message);
                if (!message.isRead) {
                  markAsRead(message.id);
                }
                setComposeMode(false);
              }}
            >
              <div className="flex justify-between items-start">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center">
                    <p
                      className={`text-sm font-medium ${
                        !message.isRead ? "text-blue-600" : "text-gray-900"
                      }`}
                    >
                      {message.sender === "hotel@example.com"
                        ? message.recipient
                        : message.sender}
                    </p>
                    {!message.isRead && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        New
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm ${
                      !message.isRead
                        ? "font-semibold text-gray-900"
                        : "text-gray-700"
                    }`}
                  >
                    {message.subject}
                  </p>
                  <p className="mt-1 text-sm text-gray-500 truncate">
                    {message.content.substring(0, 100)}
                    {message.content.length > 100 ? "..." : ""}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0 flex flex-col items-end">
                  <span className="text-xs text-gray-500">
                    {formatDate(message.timestamp)}
                  </span>
                  <div className="mt-1 flex">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteMessage(message.id);
                      }}
                      className="text-sm text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-6 text-center text-gray-500">
          No messages found matching your criteria.
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Customer Messages
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className={`${(selectedMessage || composeMode) && "hidden lg:block"}`}
        >
          {renderMessagesList()}
        </div>

        <div
          className={`${
            !selectedMessage &&
            !composeMode &&
            "hidden lg:block lg:flex lg:items-center lg:justify-center"
          }`}
        >
          {composeMode ? (
            renderComposeForm()
          ) : selectedMessage ? (
            renderMessageDetail()
          ) : (
            <div className="text-center text-gray-500">
              <p>Select a message to view details or compose a new message</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerMessagesPage;
