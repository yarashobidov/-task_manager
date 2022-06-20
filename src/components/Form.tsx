import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

interface FormProps {
  message: string | null | undefined;
  handleClick: (str: string) => void;
  endEditMessage: (message: string, id?: number) => void;
  setMessage: (msg: string | null | undefined) => void;
}

const FormCom: React.FC<FormProps> = ({
  message,
  handleClick,
  endEditMessage,
  setMessage,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = (value: string) => {
    if (value.length > 0) {
      handleClick(value);
      setError(false);
      setValue("");
      setMessage(null);
    } else {
      setError(true);
    }
  };

  const Edit = (value: string) => {
    if (value.length > 0) {
      endEditMessage(value);
      setError(false);
      setValue("");
      setMessage(null);
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    if (typeof message === "string") {
      setValue(message);
    }
  }, [message]);

  return (
    <div className="w-75">
      <Form encType="button" itemType="button" typeof="button">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                message === null ? onSubmit(value) : Edit(value);
              }
            }}
            type="text"
            placeholder="Enter message"
            required
          />{" "}
          {error && (
            <span className=" d-block ms-2 mt-2 mb-1 text-danger">
              bo'sh satr yuborilishi munkin emas{" "}
            </span>
          )}
          <div className="d-flex   mt-4 mb-4  justify-content-end">
            {message === null ? (
              <Button
                className="w-50 "
                onClick={() => onSubmit(value)}
                variant="primary"
              >
                Submit
              </Button>
            ) : (
              <Button
                className="w-50 "
                onClick={() => Edit(value)}
                variant="primary"
              >
                Edit message
              </Button>
            )}
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormCom;
