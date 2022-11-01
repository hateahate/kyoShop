import React, { useEffect, useState, useContext } from "react";
import { Badge, Button, Form, Spinner } from "react-bootstrap";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import { fetchTickets, getTicket, updateTicket } from "../../../../api/ticketAPI";
import AdminUI from "../../Ui/AdminUI";
import { useParams } from "react-router-dom";
import { NotificationContainer, NotificationManager } from "react-notifications";
import { getUserById } from "../../../../api/userAPI";
import { Context } from "../../../..";

const Container = styled.div`
width: 80%;
margin: 0 auto;
border: solid 1px #ccc;
border-radius: 5px;
overflow: hidden;
`
const ChatContainer = styled.div`
height: 400px;
overflow: auto;
transform: rotate(180deg);
`
const Message = styled.div`
border-bottom: solid 1px #ccc;
transform: rotate(180deg);
padding: 20px;
`

const StyledBadge = styled(Badge)`
margin-left: 20px;
`

const ChatBar = styled(Form.Control)`
width: 90%;
`

const SendButton = styled(Button)`
width: 10%;
`
const SendMessageContainer = styled.div`
display: flex;
`

const StatusChangeContainer = styled.div`
display: flex;
margin: 0 auto;
width: 80%;
justify-content: space-between;
margin-bottom: 20px;
`

const BeforeSelectText = styled.p`
margin: 0px;
align-self: center;
width: 30%;
`

const StatusSelect = styled(Form.Select)`
margin-right: 20px;
`

const StatusChangeButton = styled(Button)`
width: 30%;
`


const TicketPage = () => {
    const { id } = useParams();
    const { user } = useContext(Context);
    const [ticket, setTicket] = useState(null);
    const [messages, setMessages] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [needReload, setNeedReload] = useState(false);
    const [error, setError] = useState(false);
    const [messageText, setMessageText] = useState('');
    const [ticketStatus, setTicketStatus] = useState('');

    const SendMessage = () => {
        let message = new Object();
        message['sender'] = user.user.id;
        message['senderName'] = user.user.email;
        message['message'] = messageText;
        message['sendedAt'] = new Date(Date.now()).toString();
        messages.push(message);
        const formData = new FormData();
        formData.append('id', ticket.id);
        formData.append('messages', JSON.stringify(messages));
        formData.append('status', ticketStatus);
        updateTicket(formData).then((data) => {
            if (data.message) {
                { NotificationManager.error(`${error.message}`, 'Error') }
            }
            setMessageText('');
            setNeedReload(!needReload);
            { NotificationManager.success(`Your message successfully sended`, 'Success') }
        })
    }

    const ChangeStatus = () => {
        const formData = new FormData();
        formData.append('id', ticket.id);
        formData.append('messages', JSON.stringify(messages));
        formData.append('status', ticketStatus);
        updateTicket(formData).then((data) => {
            if (data.message) {
                { NotificationManager.error(`${error.message}`, 'Error') }
            }
            setMessageText('');
            setNeedReload(!needReload);
            { NotificationManager.success(`Status successfully changed to ${ticketStatus}`, 'Success') }
        })
    }

    useEffect(() => {
        getTicket(id).then((data) => {
            setTicket(data);
            setMessages(JSON.parse(data.messages));
            setIsLoaded(true);
            setTicketStatus(data.status);
        }, (error) => {
            setIsLoaded(true);
            setError(error)
        })
    }, [needReload])
    if (error) {
        return (
            <AdminUI>
                <NotificationContainer />
                {NotificationManager.error(`${error.message}`, 'Error')}
            </AdminUI>
        )
    } else if (!isLoaded) {
        return (
            <AdminUI>
                <Spinner />
                <h3>Loading</h3>
            </AdminUI>
        )
    } else {
        return (
            <AdminUI>
                <NotificationContainer />
                <h1>Subject: {ticket.subject}<StyledBadge bg="secondary">{ticket.status}</StyledBadge></h1>
                <StatusChangeContainer>
                    <BeforeSelectText>Change ticket status</BeforeSelectText>
                    <StatusSelect aria-label="Default select example" value={ticketStatus} onChange={(e) => { setTicketStatus(e.target.value); }}>
                        <option value="Waiting">Waiting</option>
                        <option value="Work in progress">Work in progress</option>
                        <option value="Closed">Closed</option>
                    </StatusSelect>
                    {ticketStatus != ticket.status ? <StatusChangeButton onClick={() => ChangeStatus()}>Update status</StatusChangeButton> : null}
                </StatusChangeContainer>
                <Container>
                    <ChatContainer>
                        {messages.map((item) => (
                            <Message key={item.senderId}>
                                <p>Author: {item.senderName}</p>
                                <p>Sended at: {item.sendedAt}</p>
                                <p>Message: {item.message}</p>
                            </Message>
                        ))}

                    </ChatContainer>
                    {ticketStatus == 'Closed' ? null : <SendMessageContainer>
                        <ChatBar type="text" value={messageText} onChange={(e) => { setMessageText(e.target.value); }}></ChatBar>
                        <SendButton onClick={() => { SendMessage() }}>Send</SendButton>
                    </SendMessageContainer>}
                </Container>
            </AdminUI>
        )
    }

}

export default TicketPage