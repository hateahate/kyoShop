import React, { useState } from "react";

const CatsDrawer = ({ list, rerender }) => {
    const [drawerState, setDrawerState] = useState(rerender);
    return (
        <ul>
            {list.map(item => {
                return (
                    <li>{item}</li>
                )
            })}
        </ul>
    )
}

export default CatsDrawer