import React, {useState} from 'react';
import s from "./PermCandy.module.css";
import ShopList from "./Shops/ShopList";


const PKshop = ({props})=> {

    const [expanded, setExpanded] = useState(false);
    const expand = (id) => (event, isExpanded)=>{
        setExpanded(isExpanded ? id : false);
    }

    const ShopListItems = props.list.map((l) => <ShopList l={l} key={l.id} expanded={expanded} expand={expand}/>)


    return(
        <div>
            <div className={s.header}>Сеть фирменных магазинов "Пермские конфеты"</div><hr/>
            {ShopListItems}
        </div>
    )
}


export default PKshop;


