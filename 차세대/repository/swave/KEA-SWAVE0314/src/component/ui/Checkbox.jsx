import styled from 'styled-components';

const Label = styled.label`
    margin: 10px 10px 10px 10px;
`;

function Checkbox({title, children, disabled, checked, onChange }) {
    return (
      <Label>
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={({ target: { checked } }) => onChange(checked)}
        />
        {title}
      </Label>
    );
  }
export default Checkbox;