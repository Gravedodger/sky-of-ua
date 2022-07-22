import React from 'react';
import './NoMatchPage.css';

const Page404 = () => {
    function drawVisor() {
        const canvas = document.getElementById('visor');
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(5, 45);
        ctx.bezierCurveTo(15, 64, 45, 64, 55, 45);

        ctx.lineTo(55, 20);
        ctx.bezierCurveTo(55, 15, 50, 10, 45, 10);

        ctx.lineTo(15, 10);

        ctx.bezierCurveTo(15, 10, 5, 10, 5, 20);
        ctx.lineTo(5, 45);

        ctx.fillStyle = '#2f3640';
        ctx.strokeStyle = '#f5f6fa';
        ctx.fill();
        ctx.stroke();
    }

    return (
        <>
            <div className="moon" />
            <div className="moon-crater moon-crater1" />
            <div className="moon-crater moon-crater2" />
            <div className="moon-crater moon-crater3" />

            <div className="star star1" />
            <div className="star star2" />
            <div className="star star3" />
            <div className="star star4" />
            <div className="star star5" />

            <div className="error">
                <div className="error-title">404</div>
                <div className="error-subtitle">Hmmm...</div>
                <div className="error__description">It looks like one of the developers fell asleep</div>
                <button className="error-button error-button--active">LOGIN</button>
                <button className="error-button">CONTACT</button>
            </div>

            <div className="astronaut">
                <div className="astronaut-backpack" />
                <div className="astronaut-body" />
                <div className="astronaut-body__chest" />
                <div className="astronaut-arm-left1" />
                <div className="astronaut-arm-left2" />
                <div className="astronaut-arm-right1" />
                <div className="astronaut-arm-right2" />
                <div className="astronaut-arm-thumb-left" />
                <div className="astronaut-arm-thumb-right" />
                <div className="astronaut-leg-left" />
                <div className="astronaut-leg-right" />
                <div className="astronaut-foot-left" />
                <div className="astronaut-foot-right" />
                <div className="astronaut-wrist-left" />
                <div className="astronaut-wrist-right" />

                <div className="astronaut-cord">
                    <canvas id="cord" height="500px" width="500px" />
                </div>

                <div className="astronaut-head">
                    <canvas id="visor" width="60px" height="60px" />
                    <div className="astronaut-head-visor-flare1" />
                    <div className="astronaut-head-visor-flare2" />
                </div>
            </div>
        </>
    )
}

export default Page404;
