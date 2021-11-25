import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { ContainerFaq, ContentText, CollapseContent, Collapse } from '../styled/faq.styled';

const Faq = () => {
    const [collapse1, setCollapse1] = useState(true)
    const [collapse2, setCollapse2] = useState(true)
    const [collapse3, setCollapse3] = useState(true)
    const [collapse4, setCollapse4] = useState(true)

    return (
        <ContainerFaq>
            <img src="https://themexbd.com/poket/transport/wp-content/uploads/2021/11/faq-thumb-1.jpg" alt="Faq Image" className="image" />
            <ContentText>
                <p className="headFaq">| HOW WE WORK</p>
                <h1 className="titleFaq">Our Clinic Expert Transprot from New York.</h1>
                <div>
                    <CollapseContent>
                        <Collapse onClick={() => {
                            setCollapse1(!collapse1)
                            setCollapse2(true)
                            setCollapse3(true)
                            setCollapse4(true)
                        }}>
                            <p>Can i specify a delivery date when ordering?</p>
                            <div className="icons">
                                {
                                    collapse1 ?
                                        <IoIosArrowDown /> : <IoIosArrowUp />
                                }
                            </div>
                        </Collapse>
                            {
                                collapse1 ? null : <p className="txt">A wonderful serenity has taken possession of my entire soul, these sweet mornings of spring which I enjoy with my whole eart. I am lone, and feel the charm</p>
                            }
                    </CollapseContent>
                    <CollapseContent>
                        <Collapse onClick={() => {
                            setCollapse2(!collapse2)
                            setCollapse1(true)
                            setCollapse3(true)
                            setCollapse4(true)
                        }}>

                            <p>What if off page seo link building?</p>
                            <div className="icons">
                                {
                                    collapse2 ?
                                        <IoIosArrowDown /> : <IoIosArrowUp />
                                }
                            </div>
                        </Collapse>
                        {
                            collapse2 ? null : <p className="txt">A wonderful serenity has taken possession of my entire soul, these sweet mornings of spring which I enjoy with my whole eart. I am lone, and feel the charm</p>
                        }
                    </CollapseContent>
                    <CollapseContent>
                        <Collapse onClick={() => {
                            setCollapse3(!collapse3)
                            setCollapse1(true)
                            setCollapse2(true)
                            setCollapse4(true)
                        }}>
                            <p>How to investing in dependend incer</p>
                            <div className="icons">
                                {
                                    collapse3 ?
                                        <IoIosArrowDown /> : <IoIosArrowUp />
                                }
                            </div>
                        </Collapse>
                        {
                            collapse3 ? null : <p className="txt">A wonderful serenity has taken possession of my entire soul, these sweet mornings of spring which I enjoy with my whole eart. I am lone, and feel the charm</p>
                        }
                    </CollapseContent>
                    <CollapseContent>
                        <Collapse onClick={() => {
                            setCollapse4(!collapse4)
                            setCollapse1(true)
                            setCollapse2(true)
                            setCollapse3(true)
                        }}>
                            <p className="titleCollapse">High Quality Data Security</p>
                            <div className="icons">
                                {
                                    collapse4 ?
                                        <IoIosArrowDown /> : <IoIosArrowUp />
                                }
                            </div>
                        </Collapse>
                        {
                            collapse4 ? null : <p className="txt">A wonderful serenity has taken possession of my entire soul, these sweet mornings of spring which I enjoy with my whole eart. I am lone, and feel the charm</p>
                        }
                    </CollapseContent>
                </div>
            </ContentText>
        </ContainerFaq>
    )
}

export default Faq
