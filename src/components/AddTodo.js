export default function AddTodo({ dispatch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch({
      type: "ADD_TODO",
      text: formData.get("text"),
    });
  };

  return (
    <div className="addTodo">
      <form onSubmit={handleSubmit}>
        <input name="text" type="text" placeholder="Enter your todo" />
      </form>
    </div>
  );
}
