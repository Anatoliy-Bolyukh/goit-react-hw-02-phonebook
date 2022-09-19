import Title from '../Title/Title';
const Filter = ({filterContact }) => {
  return (
    <>
      <Title title="Find contacts by name" />
      <label>
        <input type="text" onChange={e=>{filterContact(e)} } />
      </label>
    </>
  );
};
export default Filter;