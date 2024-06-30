import './HighlightButton.css'

// eslint-disable-next-line react/prop-types
function HighlightButton({ text }) {
  return (
      <div>
        <button className="highlight"> {text} </button>
      </div>
  );
}

export default HighlightButton;