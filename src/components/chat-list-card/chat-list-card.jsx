import React from "react"
import ChatListItem from "../chat-list-item/chat-list-item";

const ChatListCard = () => {
    return (
        <div className="py-4 px-2 rounded-xl bg-white space-y-2">
          <ChatListItem
          topTitle="Contacts"
          chatCount="34"
          iconName="jane"
          name="Jane Doe"
          message="Hi, I want to make enquiries about yo..."
          time="12:55 am"
          status="New"
          statusBg="lemon"
          onlineStatus="active"
          withSearch="yes"
          topDisplay="online-status"
          />

          <ChatListItem
          iconName="jane"
          name="Janet Adebayo"
          message="Hi, I want to make enquiries about yo..."
          time="12:55 am"
          status="New"
          statusBg="lemon"
          topDisplay="online-status"
          />

          <ChatListItem
          iconName="kunle"
          name="Kunle Adekunle"
          message="Hi, I want to make enquiries about yo..."
          time="12:55 am"
          status="New"
          statusBg="lemon"
          onlineStatus="active"
          topDisplay="online-status"
          />

          <ChatListItem
          iconName="jane"
          name="Jane Doe"
          message="Hi, I want to make enquiries about yo..."
          time="12:55 am"
          topDisplay="badge-count"
          badgeCount="2"
          />

          <ChatListItem
          iconName="jane"
          name="Janet Adebayo"
          message="Hi, I want to make enquiries about yo..."
          time="12:55 am"
          onlineStatus="active"
          />

          <ChatListItem
          iconName="jane"
          name="Kunle Adekunle"
          message="Hi, I want to make enquiries about yo..."
          time="12:55 am"
          />

          <ChatListItem
          iconName="jane"
          name="Jane Doe"
          message="Hi, I want to make enquiries about yo..."
          time="12:55 am"
          />
        </div>
    )
};

export default ChatListCard;