import React from "react";
import { Button, Table } from "react-bootstrap";

interface TableProps {
  lists: string[];
  editMessage: (id: number) => void;
  deleteMessage: (id: number) => void;
}

const Tables: React.FC<TableProps> = ({
  lists,
  editMessage,
  deleteMessage,
}) => {
  return (
    <div className="w-100">
      {lists.length > 0 ? (
        <Table className="text-center" bordered hover size="sm">
          <tbody>
            {lists.map((text, index) => (
              <tr key={index}>
                <td>{text}</td>
                <td>
                  <Button
                    className="me-4"
                    onClick={() => editMessage(index)}
                    variant="info"
                  >
                    Edit
                  </Button>{" "}
                  <Button onClick={() => deleteMessage(index)} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h1>No Message</h1>
      )}
    </div>
  );
};

export default Tables;
