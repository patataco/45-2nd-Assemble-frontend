import React from "react";
import styled from "styled-components";
const FilterGender = ({ title, name, changeUserInfo }) => {
  return (
    <div>
      {title === "성별" ? (
        <FlexBox>
          {GENDER_DATA.map(({ id, inputId, value }) => {
            return (
              <div key={id}>
                <InfoInput
                  id={inputId}
                  value={value}
                  type="radio"
                  name={name}
                  onChange={changeUserInfo}
                />
                <InfoLabel htmlFor={inputId}>{value}</InfoLabel>
              </div>
            );
          })}
        </FlexBox>
      ) : (
        <FlexBox>
          {LEVEL_DATA.map(({ id }) => {
            return (
              <div key={id}>
                <InfoInput
                  id={id}
                  value={id}
                  type="radio"
                  name={name}
                  onChange={changeUserInfo}
                />
                <InfoLabel htmlFor={id}>{id}</InfoLabel>
              </div>
            );
          })}
        </FlexBox>
      )}
    </div>
  );
};

export default FilterGender;

const GENDER_DATA = [
  { id: 1, inputId: "male", value: "남" },
  { id: 2, inputId: "female", value: "여" },
];

const LEVEL_DATA = [{ id: 1 }, { id: 2 }, { id: 3 }];

const FlexBox = styled.div`
  display: flex;
`;

const InfoInput = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  height: 30px;
  padding: 0 5px;
`;

const InfoLabel = styled.label``;
