import './HighlightButton.css'

function randomRotate(event) {
    var random = Math.random()*30 - 10;

    while (random > -5 && random < 5) {
        random = Math.random()*20 - 10;
    }

    event.target.style.setProperty('transform', 'scale(0.9)');// rotate(' + random + 'deg)');
}

function resetTransform(event) {
    event.target.style.setProperty('transform', '');
}

// eslint-disable-next-line react/prop-types
function HighlightButton({ text, clickAction }) {
    return (
        <div>
            <button className="mainButton"
                    onMouseOver={randomRotate}
                    onMouseDown={randomRotate}
                    onMouseOut={resetTransform}
                    onMouseUp={resetTransform}
                    onClick={clickAction}
                >
                <span>{text}</span>

            </button>
        </div>
    );
}

export default HighlightButton;