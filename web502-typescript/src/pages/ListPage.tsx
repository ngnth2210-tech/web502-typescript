import { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  id: string;
  title: string;
  completed: boolean;

}

function ListPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [search, setSearch] = useState("");

  const getTodos = async () => {
    const response = await axios.get(`http://localhost:3000/todos?q=${search}`);
    setTodos(response.data);
  };

  const deleteTodo = async (id: string) => {
    if (!confirm("Bạn có chắc muốn xóa công việc này không?")) {
      return;
    }
    await axios.delete(`http://localhost:3000/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    getTodos();
  }, [search]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <input
        className="border px-2 py-1 mb-4"
        placeholder="Tìm kiếm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Description
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {todos.map((item) => {
              return(
                <tr key = {item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">
                    {item.id}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {item.title}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {item.completed ? "Đã xong" : "Chưa xong"}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                  </td>
                </tr>
              )
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
