import Title from '../Title/Title';
const Filter = ({value, onChange }) => {
  return (
    <>
      <Title title="Find contacts by name" />
      <label>
        <input type="text" name='filter' value={value} onChange={onChange}/>
      </label>
    </>
  );
};
export default Filter;