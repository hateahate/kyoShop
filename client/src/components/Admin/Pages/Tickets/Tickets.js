import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchTickets } from "../../../../api/ticketAPI";
import AdminUI from "../../Ui/AdminUI";

const TicketsPage = () => {
    const [items, setItems] = useState(null)
    useEffect(() => {
        fetchTickets().then((data) => {

        })
    }, [])
    return (
        <AdminUI>

        </AdminUI>
    )
}

export default TicketsPage