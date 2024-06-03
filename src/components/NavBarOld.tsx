import React from "react";

interface Props {
  pilots: string[];
  onClear: () => void;
  onAppend: (newPilotName: string) => void;
  newPilotInputRef: React.RefObject<HTMLInputElement>;
}

const NavBarOld = ({ pilots, onClear, onAppend, newPilotInputRef }: Props) => {
  const handleAppend = () => {
    if (newPilotInputRef.current) {
      const newPilotName = newPilotInputRef.current.value.trim();
      onAppend(newPilotName);
      newPilotInputRef.current.value = ""; // Clear the input field
    }
  };

  return (
    <ul className="nav justify-content-center">
      {pilots.map((pilot, idx) => (
        <a className="nav-link" aria-current="page" href="#">
          {pilot}
        </a>
      ))}
      <div className="input-group mb-3">
        <input
          id="txtNewGundamPilot"
          type="text"
          className="form-control"
          placeholder="New Gundam Pilot Name"
          aria-label="New Gundam Pilot Name"
          aria-describedby="basic-addon2"
          ref={newPilotInputRef}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            onClick={handleAppend}
            type="button"
          >
            Add
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={onClear}
            type="button"
          >
            Clear
          </button>
        </div>
      </div>
    </ul>
  );
};

export default NavBarOld;
