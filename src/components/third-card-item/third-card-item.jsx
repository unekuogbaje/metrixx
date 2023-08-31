import React from "react"
import RecentOrderItems from "../recent-orders-item/recent-orders-item";

const ThirdCradItem = () => {
    return (
        <div className="py-4 px-6 rounded-xl bg-white space-y-2">
          <RecentOrderItems
          topTitle="Recent Orders"
          iconName="blackphone"
          item="iPhone 13"
          quantity="₦730,000.00 x 1"
          date="12 Sep 2022"
          status="Pending"
          statusBg="red"
          />

          <RecentOrderItems
          iconName="blackphone"
          item="iPhone 13"
          quantity="₦730,000.00 x 1"
          date="12 Sep 2022"
          status="Completed"
          />

          <RecentOrderItems
          iconName="blackphone"
          item="iPhone 13"
          quantity="₦730,000.00 x 1"
          date="12 Sep 2022"
          status="Pending"
          statusBg="red"
          />

          <RecentOrderItems
          iconName="blackphone"
          item="iPhone 13"
          quantity="₦730,000.00 x 1"
          date="12 Sep 2022"
          status="Completed"
          />

          <RecentOrderItems
          iconName="blackphone"
          item="iPhone 13"
          quantity="₦730,000.00 x 1"
          date="12 Sep 2022"
          status="Completed"
          />

          <RecentOrderItems
          iconName="blackphone"
          item="iPhone 13"
          quantity="₦730,000.00 x 1"
          date="12 Sep 2022"
          status="Completed"
          />
        </div>
    )
};

export default ThirdCradItem;