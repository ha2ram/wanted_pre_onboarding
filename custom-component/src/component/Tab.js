import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 40%;
  height: 300px;
  margin: 20px auto;
  border: 2px solid lightgrey;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 50px;
  border: none;
  cursor: pointer;
  &.active {
    background-color: purple;
    color: white;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Tab() {
  let [tab, setTab] = useState(0);

  return (
    <Container>
      <div>
        <div>
          <Button
            onClick={() => {
              setTab(0);
            }}
            className={tab === 0 ? 'active' : null}
          >
            Tab1
          </Button>
          <Button
            onClick={() => {
              setTab(1);
            }}
            className={tab === 1 ? 'active' : null}
          >
            Tab2
          </Button>
          <Button
            onClick={() => {
              setTab(2);
            }}
            className={tab === 2 ? 'active' : null}
          >
            Tab3
          </Button>
        </div>
        <TabContent tab={tab} />
      </div>
    </Container>
  );
}

function TabContent(props) {
  if (props.tab === 0) {
    return <Content>Tab menu ONE</Content>;
  } else if (props.tab === 1) {
    return <Content>Tab menu TWO</Content>;
  } else if (props.tab === 2) {
    return <Content>Tab menu THREE</Content>;
  }
}

export default Tab;
