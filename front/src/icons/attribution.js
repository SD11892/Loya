export const Attribution = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      stroke={props.stroke}
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        marginLeft: "1rem",
        marginRight: "1rem",
      }}
      class="text-green-600"
    >
      <rect x="2" y="6" width="20" height="12" rx="2"></rect>
      <path d="M12 12h.01"></path>
      <path d="M17 12h.01"></path>
      <path d="M7 12h.01"></path>
    </svg>
  );
};
