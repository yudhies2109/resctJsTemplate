import React from 'react';
import { Container, Text, Card, CardImage, CardDetails, Icons, Name, Position } from '../styled/team.styled';
import { FaFacebookF, FaTumblr } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsVimeo } from 'react-icons/bs';
const Team = () => {
    return (
        <Container>
            <Text>
                <p className="head">| HOW WE WORK</p>
                <p className="title">Moving Your Products Across All Borders</p>
            </Text>
            <Card>
                <CardImage>
                    <CardDetails>
                        <div className="text">
                            <Name>
                                Kutubul Alam Putu
                            </Name>
                            <Position>Founder</Position>
                        </div>
                        <Icons>
                            <FaFacebookF className="icon" />
                            <AiOutlineTwitter className="icon" />
                            <FaTumblr className="icon" />
                            <BsVimeo className="icon" />
                        </Icons>
                    </CardDetails>
                    <img src="https://themexbd.com/poket/transport/wp-content/uploads/2021/11/team-01.jpg" alt="Kutubul Alam Putu" className="image" />
                </CardImage>
                <CardImage>
                    <CardDetails>
                        <Name>
                            Arnika Alex
                        </Name>
                        <Position>CEO Founder</Position>
                        <Icons>
                            <FaFacebookF className="icon" />
                            <AiOutlineTwitter className="icon" />
                            <FaTumblr className="icon" />
                            <BsVimeo className="icon" />
                        </Icons>
                    </CardDetails>
                    <img src="https://themexbd.com/poket/transport/wp-content/uploads/2021/11/team-02.jpg" alt="Arnika Alex" className="image" />
                </CardImage>
                <CardImage>
                    <CardDetails>
                        <Name>Hellan Griffin</Name>
                        <Position>Therapist</Position>
                        <Icons>
                            <FaFacebookF className="icon" />
                            <AiOutlineTwitter className="icon" />
                            <FaTumblr className="icon" />
                            <BsVimeo className="icon" />
                        </Icons>
                    </CardDetails>
                    <img src="https://themexbd.com/poket/transport/wp-content/uploads/2021/11/team-03.jpg" alt="Hellan Griffin" className="image" />
                </CardImage>
            </Card>
        </Container>
    )
}

export default Team
