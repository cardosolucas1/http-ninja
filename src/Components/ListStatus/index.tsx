import React from "react";
import Status from "../../Interfaces/status";
import StatusCard from "../Status";
import './styles.css';

interface Props {
  allStatus: Status[];
}

const ListStatus: React.FC<Props> = ({ allStatus }) => {
  return (
    <div className="http-list-container">
      {allStatus.map(({ code, title, description, image, source }) => (
        <StatusCard
          key={code}
          code={code}
          title={title}
          description={description}
          image={image}
          source={source}
        />
      ))}
    </div>
  );
};

export default ListStatus;
