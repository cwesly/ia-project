interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ onClick, children, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "8px 16px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
