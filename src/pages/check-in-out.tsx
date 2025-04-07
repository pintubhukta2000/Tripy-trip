/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";

interface Reservation {
  id: number;
  guestName: string;
  roomNumber: string;
  checkInDate: string;
  checkOutDate: string;
  status: "pending" | "checked-in" | "checked-out";
  paymentStatus: "unpaid" | "partial" | "paid";
  numberOfGuests: number;
  specialRequests?: string;
  contactNumber: string;
  email: string;
}

const CheckInOutPage = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [filteredReservations, setFilteredReservations] = useState<
    Reservation[]
  >([]);
  const [activeTab, setActiveTab] = useState<"check-in" | "check-out">(
    "check-in"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [showDetails, setShowDetails] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    idVerified: false,
    paymentCollected: false,
    keyCardIssued: false,
    welcomePackageGiven: false,
    comments: "",
  });

  // Simulate fetching reservations from an API
  useEffect(() => {
    // Mock data - in a real application, this would come from an API
    const mockReservations: Reservation[] = [
      {
        id: 1,
        guestName: "John Smith",
        roomNumber: "101",
        checkInDate: "2025-04-08", // Today's date
        checkOutDate: "2025-04-12",
        status: "pending",
        paymentStatus: "partial",
        numberOfGuests: 2,
        specialRequests: "High floor preferred, away from elevator",
        contactNumber: "123-456-7890",
        email: "john.smith@example.com",
      },
      {
        id: 2,
        guestName: "Maria Garcia",
        roomNumber: "204",
        checkInDate: "2025-04-07", // Yesterday
        checkOutDate: "2025-04-10",
        status: "checked-in",
        paymentStatus: "paid",
        numberOfGuests: 1,
        specialRequests: "Late check-out requested",
        contactNumber: "234-567-8901",
        email: "maria.g@example.com",
      },
      {
        id: 3,
        guestName: "Robert Johnson",
        roomNumber: "315",
        checkInDate: "2025-04-05",
        checkOutDate: "2025-04-08", // Checking out today
        status: "checked-in",
        paymentStatus: "paid",
        numberOfGuests: 3,
        specialRequests: "Extra towels needed, crib requested",
        contactNumber: "345-678-9012",
        email: "robert.j@example.com",
      },
      {
        id: 4,
        guestName: "Sarah Wilson",
        roomNumber: "402",
        checkInDate: "2025-04-08", // Checking in today
        checkOutDate: "2025-04-14",
        status: "pending",
        paymentStatus: "unpaid",
        numberOfGuests: 2,
        contactNumber: "456-789-0123",
        email: "sarah.w@example.com",
      },
      {
        id: 5,
        guestName: "James Brown",
        roomNumber: "110",
        checkInDate: "2025-04-06",
        checkOutDate: "2025-04-08", // Checking out today
        status: "checked-in",
        paymentStatus: "paid",
        numberOfGuests: 1,
        contactNumber: "567-890-1234",
        email: "james.b@example.com",
      },
      {
        id: 6,
        guestName: "Emily Davis",
        roomNumber: "220",
        checkInDate: "2025-04-08", // Checking in today
        checkOutDate: "2025-04-11",
        status: "pending",
        paymentStatus: "paid",
        numberOfGuests: 4,
        specialRequests: "Interconnecting rooms requested",
        contactNumber: "678-901-2345",
        email: "emily.d@example.com",
      },
      {
        id: 7,
        guestName: "Michael Wilson",
        roomNumber: "305",
        checkInDate: "2025-04-07",
        checkOutDate: "2025-04-08", // Checking out today
        status: "checked-in",
        paymentStatus: "partial",
        numberOfGuests: 2,
        contactNumber: "789-012-3456",
        email: "michael.w@example.com",
      },
      {
        id: 8,
        guestName: "Linda Miller",
        roomNumber: "412",
        checkInDate: "2025-04-08", // Checking in today
        checkOutDate: "2025-04-13",
        status: "pending",
        paymentStatus: "unpaid",
        numberOfGuests: 1,
        specialRequests: "Quiet room away from street noise",
        contactNumber: "890-123-4567",
        email: "linda.m@example.com",
      },
      {
        id: 9,
        guestName: "David Taylor",
        roomNumber: "118",
        checkInDate: "2025-04-06",
        checkOutDate: "2025-04-08", // Checking out today
        status: "checked-in",
        paymentStatus: "paid",
        numberOfGuests: 3,
        specialRequests: "Early check-in completed",
        contactNumber: "901-234-5678",
        email: "david.t@example.com",
      },
      {
        id: 10,
        guestName: "Jennifer Martinez",
        roomNumber: "225",
        checkInDate: "2025-04-08", // Checking in today
        checkOutDate: "2025-04-09",
        status: "pending",
        paymentStatus: "paid",
        numberOfGuests: 2,
        contactNumber: "012-345-6789",
        email: "jennifer.m@example.com",
      },
      {
        id: 11,
        guestName: "Thomas Anderson",
        roomNumber: "310",
        checkInDate: "2025-04-07",
        checkOutDate: "2025-04-10",
        status: "checked-in",
        paymentStatus: "partial",
        numberOfGuests: 1,
        specialRequests: "Allergic to feather pillows, requires hypoallergenic",
        contactNumber: "123-234-3456",
        email: "thomas.a@example.com",
      },
      {
        id: 12,
        guestName: "Sofia Rodriguez",
        roomNumber: "420",
        checkInDate: "2025-04-08", // Checking in today
        checkOutDate: "2025-04-15",
        status: "pending",
        paymentStatus: "unpaid",
        numberOfGuests: 5,
        specialRequests: "Celebrating anniversary, requested champagne",
        contactNumber: "234-345-4567",
        email: "sofia.r@example.com",
      },
      {
        id: 13,
        guestName: "Kevin Johnson",
        roomNumber: "125",
        checkInDate: "2025-04-05",
        checkOutDate: "2025-04-08", // Checking out today
        status: "checked-in",
        paymentStatus: "paid",
        numberOfGuests: 2,
        contactNumber: "345-456-5678",
        email: "kevin.j@example.com",
      },
      {
        id: 14,
        guestName: "Rebecca White",
        roomNumber: "230",
        checkInDate: "2025-04-08", // Checking in today
        checkOutDate: "2025-04-12",
        status: "pending",
        paymentStatus: "partial",
        numberOfGuests: 3,
        specialRequests: "Requests extra blankets",
        contactNumber: "456-567-6789",
        email: "rebecca.w@example.com",
      },
      {
        id: 15,
        guestName: "Daniel Harris",
        roomNumber: "315",
        checkInDate: "2025-04-06",
        checkOutDate: "2025-04-08", // Checking out today
        status: "checked-in",
        paymentStatus: "unpaid",
        numberOfGuests: 1,
        specialRequests: "Business traveler, needs early breakfast",
        contactNumber: "567-678-7890",
        email: "daniel.h@example.com",
      },
    ];

    setReservations(mockReservations);
  }, []);

  // Filter reservations based on activeTab and searchTerm
  useEffect(() => {
    // Get today's date in the format YYYY-MM-DD
    const today = "2025-04-08"; // Hardcoded for consistency with our data

    let filtered = reservations;

    // Filter by tab
    if (activeTab === "check-in") {
      // Show pending reservations for check-in
      filtered = filtered.filter((r) => r.status === "pending");
    } else {
      // Show checked-in reservations for check-out
      filtered = filtered.filter((r) => r.status === "checked-in");
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (r) =>
          r.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.roomNumber.includes(searchTerm) ||
          r.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredReservations(filtered);
  }, [reservations, activeTab, searchTerm]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCheckIn = (id: number) => {
    setReservations(
      reservations.map((res) =>
        res.id === id ? { ...res, status: "checked-in" } : res
      )
    );
    setShowDetails(null);
    setFormData({
      idVerified: false,
      paymentCollected: false,
      keyCardIssued: false,
      welcomePackageGiven: false,
      comments: "",
    });
  };

  const handleCheckOut = (id: number) => {
    setReservations(
      reservations.map((res) =>
        res.id === id ? { ...res, status: "checked-out" } : res
      )
    );
    setShowDetails(null);
    setFormData({
      idVerified: false,
      paymentCollected: false,
      keyCardIssued: false,
      welcomePackageGiven: false,
      comments: "",
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const calculateNights = (checkIn: string, checkOut: string) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getPaymentStatusBadgeColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "partial":
        return "bg-yellow-100 text-yellow-800";
      case "unpaid":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const renderCheckInForm = (reservation: Reservation) => (
    <div className="bg-white rounded-lg shadow p-6 mt-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Check-In Process: {reservation.guestName}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Guest Details</h4>
          <p>
            <span className="text-gray-500">Name:</span> {reservation.guestName}
          </p>
          <p>
            <span className="text-gray-500">Room:</span>{" "}
            {reservation.roomNumber}
          </p>
          <p>
            <span className="text-gray-500">Dates:</span>{" "}
            {formatDate(reservation.checkInDate)} to{" "}
            {formatDate(reservation.checkOutDate)}
          </p>
          <p>
            <span className="text-gray-500">Guests:</span>{" "}
            {reservation.numberOfGuests} persons
          </p>
          <p>
            <span className="text-gray-500">Payment:</span>{" "}
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusBadgeColor(
                reservation.paymentStatus
              )}`}
            >
              {reservation.paymentStatus}
            </span>
          </p>
        </div>

        <div>
          <h4 className="font-medium text-gray-700 mb-2">
            Contact Information
          </h4>
          <p>
            <span className="text-gray-500">Phone:</span>{" "}
            {reservation.contactNumber}
          </p>
          <p>
            <span className="text-gray-500">Email:</span> {reservation.email}
          </p>
          {reservation.specialRequests && (
            <>
              <h4 className="font-medium text-gray-700 mt-4 mb-2">
                Special Requests
              </h4>
              <p className="text-gray-600">{reservation.specialRequests}</p>
            </>
          )}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <h4 className="font-medium text-gray-700 mb-3">Check-In Checklist</h4>

        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="idVerified"
              checked={formData.idVerified}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">ID Verified</span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="paymentCollected"
              checked={formData.paymentCollected}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">
              {reservation.paymentStatus === "paid"
                ? "Payment Verified"
                : "Payment Collected"}
            </span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="keyCardIssued"
              checked={formData.keyCardIssued}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">Key Card Issued</span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="welcomePackageGiven"
              checked={formData.welcomePackageGiven}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">Welcome Package Given</span>
          </label>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Comments
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <button
          onClick={() => setShowDetails(null)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={() => handleCheckIn(reservation.id)}
          disabled={!formData.idVerified || !formData.keyCardIssued}
          className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            formData.idVerified && formData.keyCardIssued
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Complete Check-In
        </button>
      </div>
    </div>
  );

  const renderCheckOutForm = (reservation: Reservation) => (
    <div className="bg-white rounded-lg shadow p-6 mt-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Check-Out Process: {reservation.guestName}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Stay Details</h4>
          <p>
            <span className="text-gray-500">Name:</span> {reservation.guestName}
          </p>
          <p>
            <span className="text-gray-500">Room:</span>{" "}
            {reservation.roomNumber}
          </p>
          <p>
            <span className="text-gray-500">Check-In:</span>{" "}
            {formatDate(reservation.checkInDate)}
          </p>
          <p>
            <span className="text-gray-500">Check-Out:</span>{" "}
            {formatDate(reservation.checkOutDate)}
          </p>
          <p>
            <span className="text-gray-500">Duration:</span>{" "}
            {calculateNights(reservation.checkInDate, reservation.checkOutDate)}{" "}
            nights
          </p>
        </div>

        <div>
          <h4 className="font-medium text-gray-700 mb-2">
            Contact Information
          </h4>
          <p>
            <span className="text-gray-500">Phone:</span>{" "}
            {reservation.contactNumber}
          </p>
          <p>
            <span className="text-gray-500">Email:</span> {reservation.email}
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <h4 className="font-medium text-gray-700 mb-3">Check-Out Checklist</h4>

        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="keyCardIssued"
              checked={formData.keyCardIssued}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">Room Key Returned</span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="paymentCollected"
              checked={formData.paymentCollected}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">All Charges Settled</span>
          </label>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Comments
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Any feedback from guest, issues to note, etc."
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <button
          onClick={() => setShowDetails(null)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={() => handleCheckOut(reservation.id)}
          disabled={!formData.keyCardIssued || !formData.paymentCollected}
          className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            formData.keyCardIssued && formData.paymentCollected
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Complete Check-Out
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Check-In / Check-Out
      </h1>

      <div className="bg-white shadow rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => {
                setActiveTab("check-in");
                setShowDetails(null);
              }}
              className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === "check-in"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Check-In
            </button>
            <button
              onClick={() => {
                setActiveTab("check-out");
                setShowDetails(null);
              }}
              className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === "check-out"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Check-Out
            </button>
          </nav>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by name, room number or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {filteredReservations.length > 0 ? (
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Guest
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Room
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredReservations.map((reservation) => (
                    <tr key={reservation.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {reservation.guestName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {reservation.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {reservation.roomNumber}
                        </div>
                        <div className="text-sm text-gray-500">
                          {reservation.numberOfGuests} guests
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {activeTab === "check-in"
                            ? formatDate(reservation.checkInDate)
                            : formatDate(reservation.checkOutDate)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {calculateNights(
                            reservation.checkInDate,
                            reservation.checkOutDate
                          )}{" "}
                          nights
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPaymentStatusBadgeColor(
                            reservation.paymentStatus
                          )}`}
                        >
                          {reservation.paymentStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => setShowDetails(reservation.id)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          {activeTab === "check-in" ? "Check In" : "Check Out"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">
                No {activeTab === "check-in" ? "check-ins" : "check-outs"}{" "}
                available.
              </p>
            </div>
          )}

          {showDetails !== null && (
            <>
              {activeTab === "check-in"
                ? renderCheckInForm(
                    reservations.find((r) => r.id === showDetails)!
                  )
                : renderCheckOutForm(
                    reservations.find((r) => r.id === showDetails)!
                  )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckInOutPage;
