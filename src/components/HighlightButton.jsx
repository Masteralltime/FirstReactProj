import './HighlightButton.css'

// eslint-disable-next-line react/prop-types
function HighlightButton({ text }) {
  return (
      <button className="highlight"> {text} </button>
  );
}

export default HighlightButton;