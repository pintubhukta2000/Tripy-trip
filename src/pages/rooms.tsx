import React, { useState, useEffect } from "react";

// Define the Room type
interface Room {
  id: number;
  roomNumber: string;
  type: string;
  capacity: number;
  price: number;
  isAvailable: boolean;
}

// Define the form state type
interface NewRoomForm {
  roomNumber: string;
  type: string;
  capacity: number;
  price: number;
  isAvailable: boolean;
}

const RoomsPage = () => {
  // Properly type the state variables
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isAddingRoom, setIsAddingRoom] = useState<boolean>(false);
  const [newRoom, setNewRoom] = useState<NewRoomForm>({
    roomNumber: "",
    type: "Standard",
    capacity: 2,
    price: 100,
    isAvailable: true,
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "available" | "occupied">("all");

  // Simulate fetching rooms from an API
  useEffect(() => {
    // Mock data - in a real application, this would come from an API
    const mockRooms: Room[] = [
      {
        id: 1,
        roomNumber: "101",
        type: "Standard",
        capacity: 2,
        price: 100,
        isAvailable: true,
      },
      {
        id: 2,
        roomNumber: "102",
        type: "Deluxe",
        capacity: 3,
        price: 150,
        isAvailable: true,
      },
      {
        id: 3,
        roomNumber: "103",
        type: "Suite",
        capacity: 4,
        price: 250,
        isAvailable: false,
      },
      {
        id: 4,
        roomNumber: "201",
        type: "Standard",
        capacity: 2,
        price: 100,
        isAvailable: true,
      },
      {
        id: 5,
        roomNumber: "202",
        type: "Deluxe",
        capacity: 3,
        price: 150,
        isAvailable: false,
      },
    ];

    setRooms(mockRooms);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setNewRoom({
      ...newRoom,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddRoom = (e: React.FormEvent) => {
    e.preventDefault();
    const newRoomWithId: Room = {
      ...newRoom,
      id: rooms.length + 1, // Simple ID generation for demo
    };
    setRooms([...rooms, newRoomWithId]);
    setIsAddingRoom(false);
    // Reset form
    setNewRoom({
      roomNumber: "",
      type: "Standard",
      capacity: 2,
      price: 100,
      isAvailable: true,
    });
  };

  const toggleRoomAvailability = (id: number) => {
    setRooms(
      rooms.map((room) =>
        room.id === id ? { ...room, isAvailable: !room.isAvailable } : room
      )
    );
  };

  const deleteRoom = (id: number) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
      room.roomNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.type.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === "all") return matchesSearch;
    if (filter === "available") return matchesSearch && room.isAvailable;
    if (filter === "occupied") return matchesSearch && !room.isAvailable;
    return matchesSearch;
  });

  const renderAddRoomForm = () => (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Add New Room</h2>
      <form onSubmit={handleAddRoom}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Room Number
            </label>
            <input
              type="text"
              name="roomNumber"
              value={newRoom.roomNumber}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Room Type
            </label>
            <select
              name="type"
              value={newRoom.type}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
              <option value="Executive">Executive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Capacity
            </label>
            <input
              type="number"
              name="capacity"
              value={newRoom.capacity}
              onChange={handleInputChange}
              min="1"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price per Night ($)
            </label>
            <input
              type="number"
              name="price"
              value={newRoom.price}
              onChange={handleInputChange}
              min="0"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              name="isAvailable"
              checked={newRoom.isAvailable}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">
              Available
            </label>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => setIsAddingRoom(false)}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Add Room
          </button>
        </div>
      </form>
    </div>
  );

  const renderRoomsList = () => (
    <div>
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search rooms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="flex space-x-3">
          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value as "all" | "available" | "occupied")
            }
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="all">All Rooms</option>
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
          </select>
          <button
            onClick={() => setIsAddingRoom(true)}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
          >
            Add New Room
          </button>
        </div>
      </div>

      {filteredRooms.length > 0 ? (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Room Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Capacity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRooms.map((room) => (
                <tr key={room.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {room.roomNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {room.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {room.capacity} persons
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${room.price}/night
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        room.isAvailable
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {room.isAvailable ? "Available" : "Occupied"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => toggleRoomAvailability(room.id)}
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                    >
                      {room.isAvailable ? "Mark Occupied" : "Mark Available"}
                    </button>
                    <button
                      onClick={() => deleteRoom(room.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white p-6 text-center rounded-lg shadow">
          <p className="text-gray-500">
            No rooms found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Room Management</h1>

      {isAddingRoom ? renderAddRoomForm() : renderRoomsList()}
    </div>
  );
};

export default RoomsPage;
