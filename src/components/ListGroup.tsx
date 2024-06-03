import { MouseEvent, useState } from "react";

interface Props {
  names: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

export default function ListGroup({ names, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (e: MouseEvent, name: string, i: number) => {
    console.log(name, e.type, i);
    setSelectedIndex(i);
    onSelectItem(name);
  };

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {names.length === 0 && <p>No {heading} Gundams Here</p>}
        {names.map((gundam: string, i: number) => (
          <li
            className={
              selectedIndex === i ? "lis-group-item active" : "list-group-item"
            }
            key={i + "-" + gundam}
            onClick={(e) => handleClick(e, gundam, i)}
          >
            {gundam} Gundam
          </li>
        ))}
      </ul>
    </>
  );
}
