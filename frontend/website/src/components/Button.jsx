
function Button({ children, onClick, className = '', disabled = false }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;