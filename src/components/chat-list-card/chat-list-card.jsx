import React from "react"
import ChatListItem from "../chat-list-item/chat-list-item";

const ChatListCard = () => {
    return (
        <div className="py-4 px-6 rounded-xl bg-white space-y-2">
          <ChatListItem
          topTitle="Contacts"
          chatCount="34"
          iconName="blackphone"
          item="iPhone 13"
          quantity="₦730,000.00 x 1"
          date="12 Sep 2022"
          status="Pending"
          statusBg="red"
          />
        </div>
    )
};

export default ChatListCard;