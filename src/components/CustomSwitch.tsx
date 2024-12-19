import { useState } from "react";
import styled from "styled-components";

interface Props {
  input1: () => void;
  input2: () => void;
}

const Radio = ({ input1, input2 }: Props) => {
  const [selectedValue, setSelectedValue] = useState<number>(1);

  const handleInput1 = () => {
    setSelectedValue(1);
    input1();
  };
  const handleInput2 = () => {
    setSelectedValue(2);
    input2();
  };

  return (
    <StyledWrapper>
      <div className="radio-input ">
        <label>
          <input
            onChange={() => handleInput1()}
            checked={selectedValue === 1}
            type="radio"
            id="value-1"
            name="value-radio"
            defaultValue={1}
          />
          <span>Day</span>
        </label>
        <label>
          <input
            onChange={() => handleInput2()}
            checked={selectedValue === 2}
            type="radio"
            id="value-2"
            name="value-radio"
            defaultValue={2}
          />
          <span>Week</span>
        </label>
        <span className="selection" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .radio-input input {
    display: none;
  }

  .radio-input {
    --container_width: 250px;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 10px;
    // background-color: #212121;
    color: #eee;
    width: var(--container_width);
    overflow: hidden;
    border: 2px solid #fff;
  }

  .radio-input label {
    width: 100%;
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    font-weight: 600;
    letter-spacing: -1px;
    font-size: 14px;
  }

  .selection {
    display: none;
    position: absolute;
    height: 100%;
    width: calc(var(--container_width) / 2);
    z-index: 0;
    left: 0;
    top: 0;
    transition: 0.15s ease;
  }

  .radio-input label:nth-child(1):has(input:checked) {
    color: #fff;
  }
  .radio-input label:nth-child(2):has(input:checked) {
    color: white;
  }
  .radio-input label:nth-child(1):has(input:checked) ~ .selection {
    background-color: #bfdbfe; //bg color when on
    display: inline-block;
  }
  .radio-input label:nth-child(2):has(input:checked) ~ .selection {
    background-color: #bfdbfe; //bg color when on
    display: inline-block;
  }
  .radio-input label:nth-child(1):has(input:checked) ~ .selection {
    transform: translateX(calc(var(--container_width) * 0 / 2));
  }

  .radio-input label:nth-child(2):has(input:checked) ~ .selection {
    transform: translateX(calc(var(--container_width) * 1 / 2));
  }
`;

export default Radio;
