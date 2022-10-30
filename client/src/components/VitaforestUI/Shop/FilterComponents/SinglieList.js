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
  @media screen and (min-width: 1128px) {
    .wrapper.shown {
      background: #f7f8f9;
      h4 {
        opacity: 1;
        box-shadow: none;
      }
    }
  }
`;

const ListTitle = styled.h4`
  font-size: 16px;
  line-height: 19px;
  @media screen and (min-width: 1128px) {
    color: #303236;
    opacity: 0.6;
    box-shadow: 0px 1px 0px #eaebec;
    padding: 14px;
    margin-bottom: 0;
    position: relative;
    &::after {
      position: absolute;
      content: url("arrow.svg");
      right: 17px;
    }
  }
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
      <div className={listShown ? "wrapper shown" : "wrapper"}>
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
      </div>
    </List>
  );
}

export default SingleList;
