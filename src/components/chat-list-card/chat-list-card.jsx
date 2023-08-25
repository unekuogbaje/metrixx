import React from "react"
import ChatListItem from "../chat-list-item/chat-list-item";

const ChatListCard = () => {
    return (
        <div className="py-4 px-6 rounded-xl bg-white space-y-2">
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
          />
        </div>
    )
};

export default ChatListCard;