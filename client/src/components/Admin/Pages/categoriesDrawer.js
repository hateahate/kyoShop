import React from "react";

const CatsDrawer = ({ list }) => {
    console.log('Переход в отрисовщик, далее говно из пропса')
    console.log(list)
    return (
        <ul>
            {list.map(item => {
                return (
                    <li>{item.name}</li>
                )
            })}
        </ul>
    )
}

export default CatsDrawer