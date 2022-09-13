import { TabLink } from "components/TabLink";
import { useState } from "react";
import './styles.css';


const TabBar: React.FC = () => {
    const [currentRouter, setCurrentRouter] = useState('/');

    function onChangeRouter(route: string) {
        setCurrentRouter(route)
    }

    return (
        <div className='container'>
            <div>
                <h2>eGrocery</h2>
            </div>

            <ul className="nav">
                <TabLink 
                    onSelect={onChangeRouter} 
                    isActive={currentRouter === "/"} 
                    router="/"
                    name='Home' 
                />
                <TabLink 
                    onSelect={onChangeRouter} 
                    isActive={currentRouter === "/categories"} 
                    router="/categories" 
                    name='Categories'
                />
                <TabLink 
                    onSelect={onChangeRouter} 
                    isActive={currentRouter === "/reservations"} 
                    router="/reservations" 
                    name="Reservations"
                />

            </ul>

            <div>
                <div>
                    <span> heart </span>
                </div>

                <div>
                    <span> carrinho </span>
                </div>

                <div>
                    <span> hello, user </span>
                </div>
            </div>


        </div>
    )
};

export default TabBar