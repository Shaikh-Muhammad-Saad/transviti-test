import MainLayout from "@/components/layout/main-layout";
import { Settings, CheckCheck, MessageSquare, Briefcase, UserPlus } from "lucide-react";
import { useState } from "react";

const initialNotifications = {
  new: [
    {
      id: 1,
      icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
      text: "You have a new message from Alice Johnson.",
      time: "5m ago",
      unread: true,
    },
    {
      id: 2,
      icon: <Briefcase className="h-6 w-6 text-green-500" />,
      text: "Your application for Frontend Developer at Innovate Inc. was viewed.",
      time: "1h ago",
      unread: true,
    },
  ],
  earlier: [
    {
      id: 3,
      icon: <UserPlus className="h-6 w-6 text-purple-500" />,
      text: "Charlie Brown accepted your connection request.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 4,
      icon: <Briefcase className="h-6 w-6 text-green-500" />,
      text: "Stellar Solutions posted a new job: UX/UI Designer.",
      time: "2 days ago",
      unread: false,
    },
    {
        id: 5,
        icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
        text: "You have a new message from Bob Williams.",
        time: "3 days ago",
        unread: false,
      },
  ],
};

function NotificationsPage() {
    const [notifications, setNotifications] = useState(initialNotifications);

    const handleMarkAllAsRead = () => {
        const updatedNotifications = {
            ...notifications,
            new: notifications.new.map(n => ({ ...n, unread: false })),
        };
        setNotifications(updatedNotifications);
    };

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Notifications</h1>
            <p className="text-gray-600">Stay updated on your job search activity.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
                onClick={handleMarkAllAsRead}
                className="text-sm text-blue-600 hover:underline flex items-center">
                <CheckCheck className="h-4 w-4 mr-1" />
                Mark all as read
            </button>
            <button className="text-gray-500 hover:text-gray-700">
                <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
            {/* New Notifications */}
            <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">New</h2>
                <div className="space-y-4">
                    {notifications.new.map(notification => (
                        <div key={notification.id} className={`flex items-start p-4 rounded-lg ${notification.unread ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'}`}>
                            <div className="flex-shrink-0">{notification.icon}</div>
                            <div className="ml-4 flex-1">
                                <p className="text-sm text-gray-800">{notification.text}</p>
                                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                            </div>
                            {notification.unread && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full self-center ml-4"></div>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Earlier Notifications */}
            <div className="p-6 border-t">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Earlier</h2>
                <div className="space-y-4">
                    {notifications.earlier.map(notification => (
                        <div key={notification.id} className="flex items-start p-4 rounded-lg hover:bg-gray-50">
                            <div className="flex-shrink-0">{notification.icon}</div>
                            <div className="ml-4 flex-1">
                                <p className="text-sm text-gray-700">{notification.text}</p>
                                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

NotificationsPage.getLayout = (page) => {
  return <MainLayout page={page} />;
};

export default NotificationsPage;