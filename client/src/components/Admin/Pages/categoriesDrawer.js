import React, { useState } from "react";

const CatsDrawer = ({ list }) => {
    const [currentList, setCurrentList] = useState(list);
    console.log('Переход в отрисовщик, далее говно из пропса')
    console.log(list)
    return (
        <ul>
            {currentList.map(item => {
                return (
                    <li>{item}</li>
                )
            })}
        </ul>
    )
}

export default CatsDrawer