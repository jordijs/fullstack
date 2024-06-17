const Filter = ({filter, handleFilterChange}) => (
    <div>
    filter by name: <input value={filter} onChange={handleFilterChange} />
    </div>
)

export default Filter