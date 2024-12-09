import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Data Table</h1>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">#</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Age</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">John Doe</td>
            <td className="border border-gray-300 px-4 py-2">28</td>
            <td className="border border-gray-300 px-4 py-2">
              johndoe@example.com
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">Jane Smith</td>
            <td className="border border-gray-300 px-4 py-2">32</td>
            <td className="border border-gray-300 px-4 py-2">
              janesmith@example.com
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">3</td>
            <td className="border border-gray-300 px-4 py-2">Alice Johnson</td>
            <td className="border border-gray-300 px-4 py-2">24</td>
            <td className="border border-gray-300 px-4 py-2">
              alicejohnson@example.com
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
