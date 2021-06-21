import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 30px;
  color: white;
  background-color: #05102a;
`;
const Table = styled.table`
  font-size: 12px;
  margin: 0;

  tr {
    td {
      padding: 7px 7px 7px 0;
    }
  }
`;

const Specifications = (props) => {
  return (
    <Wrapper>
      <h3>Specifications</h3>
      <Table>
        <tbody>
          <tr>
            <td>Brand</td>
            <td>{props.brand}</td>
          </tr>
          <tr>
            <td>Item weight</td>
            <td>{props.weight}</td>
          </tr>
          <tr>
            <td>Dimensions</td>
            <td>
              {props.height}x{props.width}x{props.length}
            </td>
          </tr>
          <tr>
            <td>Item model number</td>
            <td>{props.modelCode}</td>
          </tr>
          <tr>
            <td>Colour</td>
            <td>{props.colour}</td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Specifications;
