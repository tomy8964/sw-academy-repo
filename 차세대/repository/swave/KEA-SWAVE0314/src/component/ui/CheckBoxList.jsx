import styled from 'styled-components';
import Checkbox from './Checkbox'

const Ul = styled.ul`
    margin: 50px 50px 50px 50px;
`;

const HeadTitle = styled.div`
    color: white;
    background: steelblue;
    border: 1px solid steelblue;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 3;
    margin: 50px 430px 50px 430px;
`;

function CheckBoxList({ headTitle, titles, children, disabled, checked, onChange }) {
    
    return (
      <div>
        <HeadTitle>{headTitle}</HeadTitle>
        <Ul>
            {titles.map((title) => <Checkbox key={title.id} title={title.smallTitle}/>)}
        </Ul>
      </div>
    );
  }
export default CheckBoxList;