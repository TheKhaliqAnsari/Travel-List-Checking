const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding items for trip🛩️ </em>
      </footer>
    );
  }

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>All Items are packed, Good to go cheif💪</em>
      ) : (
        <em>
          You have {totalItems} items on your list, and you already packed{" "}
          {packedItems} ({percentage}%)
        </em>
      )}
    </footer>
  );
};
export default Stats;
