import React from 'react';
import './NoMatchPage.css';
import { Button, ButtonText, SectionTitleText } from "../../Typography";

const NoMatchPage = () => {
    return (
        <section className="page_404">
            <div className="container">
                <div>
                    <div>
                        <div>
                            <div className="four_zero_four_bg">
                                <h1 className="page_404-title">404</h1>
                            </div>

                            <div className="content_box_404">
                                <SectionTitleText className="h2">
                                    Looks like you're lost
                                </SectionTitleText>

                                <p className="content_box_404-text">the page you are looking for is not available!</p>

                                <a href="/">
                                    <Button className="link-home">
                                        <ButtonText>
                                            Return to Home
                                        </ButtonText>
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoMatchPage;
