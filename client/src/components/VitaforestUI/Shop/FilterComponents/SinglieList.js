import React, { useState } from "react";
import styled from "styled-components";

const List = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #303236;
  .list {
    display: none;
  }
  .shown {
    display: block;
  }
`;

const ListTitle = styled.h4`
  font-size: 16px;
  line-height: 19px;
`;

const ListItems = styled.ul`
  list-style: none;
  padding: 0px;
`;
const Item = styled.li`
  margin: 0px;
  margin-bottom: 5px;
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  position: relative;

  .custom-checkbox + label::before {
    content: url("checkbox.svg");
    position: absolute;
    right: 18px;
    top: 11px;
  }
  .custom-checkbox:checked + label::before {
    content: url("checkbox-checked.svg");
  }
  .custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`;

function SingleList(props) {
  const [listShown, setListShown] = useState(false);
  return (
    <List>
      <ListTitle onClick={() => setListShown(!listShown)}>
        {props.title}
      </ListTitle>
      <div className={listShown ? "list shown" : "list "}>
        <ListItems>
          {props.items.map((item) => {
            return (
              <Item>
                <input
                  id={item.title}
                  className="custom-checkbox"
                  value={item.value}
                  type="checkbox"
                ></input>
                <label for={item.title}>{item.title}</label>
              </Item>
            );
          })}
        </ListItems>
      </div>
    </List>
  );
}

export default SingleList;
