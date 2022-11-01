import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import { fetchTickets } from "../../../../api/ticketAPI";
import AdminUI from "../../Ui/AdminUI";


const EditLabel = styled(Link)`
color: white;
text-decoration: none;
&:hover{
    color: white;
}
`

const TicketsPage = () => {
    const [items, setItems] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetchTickets().then((data) => {
            console.log(data)
            setItems(data)
            setIsLoaded(true)
        })
    }, [])
    if (!isLoaded) {
        return (
            <div>
                <Spinner />
                <h3>Loading</h3>
            </div>
        )
    }
    else {
        return (
            <AdminUI>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Subject
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                From user with ID
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.subject}</td>
                                <td>{item.status}</td>
                                <td>{item.userId}</td>
                                <td><Button><EditLabel to={'/admin/tickets/' + item.id}>View ticket</EditLabel></Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </AdminUI>
        )
    }
}

export default TicketsPage