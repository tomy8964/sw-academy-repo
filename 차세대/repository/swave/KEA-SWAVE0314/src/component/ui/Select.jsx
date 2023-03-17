
function Select({setValue, options}){
    const handleChange = (e) => {
		// event handler
		setValue(e.target.value);
	};
	return (
		<select onChange={handleChange}>
            {options.map((option)=><option key={option.id} value={option.value}>{option.value}</option>)}
		</select>
	);
}
export default Select;