import styles from "./Keyboard.module.css";

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const KEYS = alphabet.split("");

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  disabled = false,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((k) => {
        const isActive = activeLetters.includes(k);
        const isInactive = inactiveLetters.includes(k);
        return (
          <button
            onClick={() => addGuessedLetter(k)}
            disabled={isActive || isInactive || disabled}
            key={k}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
          >
            {k}
          </button>
        );
      })}
    </div>
  );
}
