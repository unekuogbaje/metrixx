import React from "react";
import { ReactComponent as Bag } from '../../assets/Bag.svg';
import { ReactComponent as User } from '../../assets/2 User.svg';
import { ReactComponent as Folder } from '../../assets/Folder.svg';
import { ReactComponent as Graph } from '../../assets/Graph.svg';
import { ReactComponent as Cart } from '../../assets/fi_shopping-cart.svg';
import { ReactComponent as Phone } from '../../assets/Phone.svg';

const iconComponents = {
    'bag': Bag,
    'user': User,
    'graph': Graph,
    'cart': Cart,
    'phone': Phone,
    'folder': Folder,
  }

const CardBox = ({ iconName, bodyCaption, bodyPercentCount, dropdown }) => {
    const IconComponent = iconComponents[iconName];
    return (
        <div>
        <IconComponent/>
        </div>
    )
};

export default CardBox;