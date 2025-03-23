/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import {
  BarChartIcon,
  ChevronLeft,
  ChevronRight,
  Search,
  Plus,
  Edit,
  Trash,
  ChevronDown,
  Bell,
  Home,
  Calendar,
  MessageSquare,
  Star,
  Award,
  CreditCard,
  Utensils,
  ShoppingBag,
  Truck,
  Clock,
  DollarSign,
  Filter,
  Download,
  Printer,
  MoreHorizontal,
  Menu,
  X,
  Check,
} from "lucide-react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import HotelHiltonImg from "../public/hotel-hilto-img.jpg";
import UserImg from "../public/User_image.png";

function App() {
  const [activeTab, setActiveTab] = useState("stays");
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [dialogOpen, setDialogOpen] = useState("");
  const [toast, setToast] = useState<any>();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showToast = (
    title: string,
    description: string,
    variant = "default"
  ) => {
    setToast({ title, description, variant });
    setTimeout(() => setToast(null), 3000);
  };

  // Sample data for charts
  const revenueData = [
    { name: "Sun", value: 8 },
    { name: "Mon", value: 10 },
    { name: "Tue", value: 12 },
    { name: "Wed", value: 11 },
    { name: "Thu", value: 9 },
    { name: "Fri", value: 11 },
    { name: "Sat", value: 12 },
  ];

  const guestsData = [
    { name: "Sun", value: 8000 },
    { name: "Mon", value: 10000 },
    { name: "Tue", value: 12000 },
    { name: "Wed", value: 9000 },
    { name: "Thu", value: 6000 },
    { name: "Fri", value: 8000 },
  ];

  const roomsData = [
    { name: "Sun", occupied: 15, booked: 10, available: 25 },
    { name: "Mon", occupied: 20, booked: 12, available: 18 },
    { name: "Tue", occupied: 18, booked: 15, available: 17 },
    { name: "Wed", occupied: 22, booked: 10, available: 18 },
    { name: "Thu", occupied: 20, booked: 15, available: 15 },
    { name: "Fri", occupied: 18, booked: 12, available: 20 },
    { name: "Sat", occupied: 15, booked: 10, available: 25 },
  ];

  const foodOrdersData = [
    { name: "Breakfast", value: 35 },
    { name: "Lunch", value: 45 },
    { name: "Dinner", value: 55 },
    { name: "Room Service", value: 25 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const bookingData = [
    {
      id: 1,
      name: "Ram Kailash",
      phone: "9905598912",
      bookingId: "SDK89635",
      nights: 2,
      roomType: "1 King Room",
      guests: 2,
      paid: "rsp.150",
      cost: "rsp.1500",
      avatar: UserImg,
    },
    {
      id: 2,
      name: "Samira Karki",
      phone: "9815394203",
      bookingId: "SDK89635",
      nights: 4,
      roomType: ["1 Queen", "1 King Room"],
      guests: 5,
      paid: "paid",
      cost: "rsp.5500",
      avatar: UserImg,
    },
    {
      id: 3,
      name: "Jeevan Rai",
      phone: "9865328452",
      bookingId: "SDK89635",
      nights: 1,
      roomType: ["1 Deluxe", "1 King Room"],
      guests: 3,
      paid: "rsp.150",
      cost: "rsp.2500",
      avatar: UserImg,
    },
    {
      id: 4,
      name: "Bindu Sharma",
      phone: "9845653124",
      bookingId: "SDK89635",
      nights: 3,
      roomType: ["1 Deluxe", "1 King Room"],
      guests: 2,
      paid: "rsp.150",
      cost: "rsp.3000",
      avatar: UserImg,
    },
  ];

  const foodOrders = [
    {
      id: "FO-1234",
      guest: "Ram Kailash",
      room: "101",
      items: ["Chicken Curry", "Naan Bread", "Rice"],
      total: "rsp.850",
      status: "Delivered",
      time: "12:30 PM",
    },
    {
      id: "FO-1235",
      guest: "Samira Karki",
      room: "205",
      items: ["Vegetable Pasta", "Garlic Bread", "Tiramisu"],
      total: "rsp.1200",
      status: "Preparing",
      time: "1:15 PM",
    },
    {
      id: "FO-1236",
      guest: "Jeevan Rai",
      room: "310",
      items: ["Club Sandwich", "French Fries", "Coke"],
      total: "rsp.650",
      status: "On the way",
      time: "1:45 PM",
    },
  ];

  const invoices = [
    {
      id: "INV-2023-001",
      guest: "Ram Kailash",
      date: "26 Jul 2023",
      amount: "rsp.1500",
      status: "Paid",
      items: [
        { description: "Room Charges (2 nights)", amount: "rsp.1200" },
        { description: "Food & Beverages", amount: "rsp.300" },
      ],
    },
    {
      id: "INV-2023-002",
      guest: "Samira Karki",
      date: "25 Jul 2023",
      amount: "rsp.5500",
      status: "Paid",
      items: [
        { description: "Room Charges (4 nights)", amount: "rsp.4800" },
        { description: "Food & Beverages", amount: "rsp.700" },
      ],
    },
    {
      id: "INV-2023-003",
      guest: "Jeevan Rai",
      date: "24 Jul 2023",
      amount: "rsp.2500",
      status: "Pending",
      items: [
        { description: "Room Charges (1 night)", amount: "rsp.2000" },
        { description: "Food & Beverages", amount: "rsp.500" },
      ],
    },
  ];

  const calendarEvents = [
    { date: 2, guest: "Carl Larson II", nights: 2, guests: 2 },
    { date: 9, guest: "Mrs. Emmett Morar", nights: 2, guests: 2 },
    { date: 24, guest: "Marjorie Klocko", nights: 2, guests: 2 },
  ];

  // Custom dropdown component
  const Dropdown = ({
    trigger,
    children,
    isOpen,
    setIsOpen,
    align = "right",
  }: any) => {
    return (
      <div className="relative">
        <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
        {isOpen && (
          <div
            className={`absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              align === "right" ? "right-0" : "left-0"
            }`}
          >
            <div className="py-1">{children}</div>
          </div>
        )}
      </div>
    );
  };

  // Custom dialog component
  const Dialog = ({
    isOpen,
    onClose,
    title,
    description,
    children,
    footer,
  }: any) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <div className="relative w-full max-w-md md:max-w-xl bg-white rounded-lg shadow-xl">
          <div className="flex items-center justify-between p-4 border-b">
            <div>
              <h3 className="text-lg font-medium">{title}</h3>
              {description && (
                <p className="text-sm text-gray-500">{description}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4">{children}</div>
          {footer && (
            <div className="p-4 border-t flex justify-end">{footer}</div>
          )}
        </div>
      </div>
    );
  };

  // Toast component
  const Toast = ({ toast }: any) => {
    if (!toast) return null;

    const bgColor =
      toast.variant === "destructive"
        ? "bg-red-100 border-red-400 text-red-700"
        : toast.variant === "success"
        ? "bg-green-100 border-green-400 text-green-700"
        : "bg-blue-100 border-blue-400 text-blue-700";

    return (
      <div
        className={`fixed bottom-4 right-4 z-50 p-4 rounded-md border ${bgColor} shadow-md`}
      >
        <div className="flex">
          <div className="flex-shrink-0">
            {toast.variant === "destructive" ? (
              <X className="h-5 w-5" />
            ) : (
              <Check className="h-5 w-5" />
            )}
          </div>
          <div className="ml-3">
            <p className="font-medium">{toast.title}</p>
            <p className="text-sm">{toast.description}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderDashboard = () => (
    <>
      <div className="flex justify-end mb-4">
        <p className="text-sm text-gray-600">Wed // July 26th, 2023</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-blue-50 p-3 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                Arrival <span className="text-xs">(This week)</span>
              </p>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold mr-2">73</h3>
                <span className="text-xs px-1.5 py-0.5 bg-green-100 text-green-600 rounded">
                  +24%
                </span>
              </div>
              <p className="text-xs text-gray-500">Previous week: 35</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-amber-50 p-3 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-amber-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5"></path>
                <path d="M12 19l-7-7 7-7"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                Departure <span className="text-xs">(This week)</span>
              </p>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold mr-2">35</h3>
                <span className="text-xs px-1.5 py-0.5 bg-red-100 text-red-600 rounded">
                  -12%
                </span>
              </div>
              <p className="text-xs text-gray-500">Previous week: 97</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-cyan-50 p-3 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-cyan-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                Booking <span className="text-xs">(This week)</span>
              </p>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold mr-2">237</h3>
                <span className="text-xs px-1.5 py-0.5 bg-green-100 text-green-600 rounded">
                  +31%
                </span>
              </div>
              <p className="text-xs text-gray-500">Previous week: 187</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500 mb-2">Today Activities</p>
          <div className="flex justify-between mb-2">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-1">
                <span>5</span>
              </div>
              <p className="text-xs">
                Room
                <br />
                Available
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-1">
                <span>10</span>
              </div>
              <p className="text-xs">
                Room
                <br />
                Blocked
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-1">
                <span>15</span>
              </div>
              <p className="text-xs">Guest</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs text-gray-500">Total Revenue</p>
            <p className="text-lg font-bold">Rs.35k</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
        <div className="bg-white rounded-lg shadow">
          <div className="flex flex-row items-center justify-between p-4 pb-2">
            <h3 className="text-base font-medium">Revenue</h3>
            <Dropdown
              trigger={
                <button className="flex items-center text-xs text-gray-500 hover:text-gray-700">
                  this week <ChevronDown className="ml-1 h-3 w-3" />
                </button>
              }
              isOpen={dropdownOpen === "revenue"}
              setIsOpen={(isOpen: any) =>
                setDropdownOpen(isOpen ? "revenue" : "")
              }
            >
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                This Month
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                This Year
              </button>
            </Dropdown>
          </div>
          <div className="p-4 pt-0">
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={revenueData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide={true} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-2 border rounded shadow-sm">
                            <p className="text-xs">{`${payload[0].value} K`}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="value" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="flex flex-row items-center justify-between p-4 pb-2">
            <h3 className="text-base font-medium">Guests</h3>
            <Dropdown
              trigger={
                <button className="flex items-center text-xs text-gray-500 hover:text-gray-700">
                  this week <ChevronDown className="ml-1 h-3 w-3" />
                </button>
              }
              isOpen={dropdownOpen === "guests"}
              setIsOpen={(isOpen: any) =>
                setDropdownOpen(isOpen ? "guests" : "")
              }
            >
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                This Month
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                This Year
              </button>
            </Dropdown>
          </div>
          <div className="p-4 pt-0">
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={guestsData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide={true} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-2 border rounded shadow-sm">
                            <p className="text-xs">{`${payload[0].value}`}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{
                      r: 4,
                      fill: "white",
                      stroke: "#3B82F6",
                      strokeWidth: 2,
                    }}
                    activeDot={{ r: 6 }}
                    fill="url(#colorUv)"
                  />
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  {/* <area type="monotone" dataKey="value" stroke="none" fill="url(#colorUv)" /> */}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="flex flex-row items-center justify-between p-4 pb-2">
            <h3 className="text-base font-medium">Rooms</h3>
            <Dropdown
              trigger={
                <button className="flex items-center text-xs text-gray-500 hover:text-gray-700">
                  this week <ChevronDown className="ml-1 h-3 w-3" />
                </button>
              }
              isOpen={dropdownOpen === "rooms"}
              setIsOpen={(isOpen: any) =>
                setDropdownOpen(isOpen ? "rooms" : "")
              }
            >
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                This Month
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                This Year
              </button>
            </Dropdown>
          </div>
          <div className="p-4 pt-0">
            <div className="text-xs mb-2">
              <div className="flex items-center justify-between">
                <p>Total 50 Rooms</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    <span>Occupied</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Booked</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                    <span>Available</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[180px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={roomsData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide={true} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-2 border rounded shadow-sm">
                            <p className="text-xs">{`Occupied: ${payload[0].value}`}</p>
                            <p className="text-xs">{`Booked: ${payload[1].value}`}</p>
                            <p className="text-xs">{`Available: ${payload[2].value}`}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar
                    dataKey="occupied"
                    fill="#3B82F6"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar dataKey="booked" fill="#10B981" radius={[4, 4, 0, 0]} />
                  <Bar
                    dataKey="available"
                    fill="#F59E0B"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Table */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 pb-0">
          <h3 className="text-base font-medium">
            Todays Booking{" "}
            <span className="text-xs font-normal text-gray-500">
              (8 Guest today)
            </span>
          </h3>
        </div>
        <div className="p-4">
          <div className="border-b mb-4">
            <div className="flex">
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "stays"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("stays")}
              >
                Stays
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "packages"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("packages")}
              >
                Packages
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "arrivals"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("arrivals")}
              >
                Arrivals
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "departure"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("departure")}
              >
                Departure
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search guest by name or phone number or booking ID"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-[400px] text-sm"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center">
              <Plus className="h-4 w-4 mr-2" />
              Add Booking
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      NAME <ChevronDown className="h-4 w-4 ml-1" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    BOOKING ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    NIGHTS
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ROOM TYPE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    GUESTS
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PAID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    COST
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bookingData.map((booking) => (
                  <tr key={booking.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 overflow-hidden">
                          <img
                            src={booking.avatar || "/placeholder.svg"}
                            alt={booking.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{booking.name}</p>
                          <p className="text-xs text-gray-500">
                            {booking.phone}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {booking.bookingId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {booking.nights}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Array.isArray(booking.roomType) ? (
                        <div>
                          {booking.roomType.map((type, index) => (
                            <p key={index}>{type}</p>
                          ))}
                        </div>
                      ) : (
                        booking.roomType
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {booking.guests} Guests
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {booking.paid === "paid" ? (
                        <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">
                          paid
                        </span>
                      ) : (
                        booking.paid
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {booking.cost}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button className="text-gray-500 hover:text-gray-700">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <button className="text-blue-500 hover:text-blue-600">
              See other Bookings
            </button>
          </div>
        </div>
      </div>

      {/* Calendar and Rating */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 pb-0">
            <h3 className="text-base font-medium">Calendar</h3>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <button className="p-1 rounded-md hover:bg-gray-100">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <h3 className="text-sm font-medium">August 2023</h3>
              <button className="p-1 rounded-md hover:bg-gray-100">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              <div className="py-1 font-medium">SU</div>
              <div className="py-1 font-medium">MO</div>
              <div className="py-1 font-medium">TU</div>
              <div className="py-1 font-medium">WE</div>
              <div className="py-1 font-medium">TH</div>
              <div className="py-1 font-medium">FR</div>
              <div className="py-1 font-medium">SA</div>

              <div className="py-1 text-gray-400">31</div>
              <div className="py-1">1</div>
              <div className="py-1 relative">
                2
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
              </div>
              <div className="py-1">3</div>
              <div className="py-1">4</div>
              <div className="py-1">5</div>
              <div className="py-1">6</div>

              <div className="py-1">7</div>
              <div className="py-1">8</div>
              <div className="py-1 relative">
                9
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
              </div>
              <div className="py-1">10</div>
              <div className="py-1">11</div>
              <div className="py-1">12</div>
              <div className="py-1">13</div>

              <div className="py-1">14</div>
              <div className="py-1">15</div>
              <div className="py-1">16</div>
              <div className="py-1">17</div>
              <div className="py-1">18</div>
              <div className="py-1">19</div>
              <div className="py-1">20</div>

              <div className="py-1">21</div>
              <div className="py-1">22</div>
              <div className="py-1">23</div>
              <div className="py-1 relative">
                24
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
              </div>
              <div className="py-1">25</div>
              <div className="py-1">26</div>
              <div className="py-1">27</div>

              <div className="py-1">28</div>
              <div className="py-1">29</div>
              <div className="py-1">30</div>
              <div className="py-1">31</div>
              <div className="py-1 text-gray-400">1</div>
              <div className="py-1 text-gray-400">2</div>
              <div className="py-1 text-gray-400">3</div>
            </div>

            <div className="mt-6 border rounded-md p-3">
              <h4 className="text-sm font-medium mb-2">
                August 02, 2023 Booking Lists
              </h4>
              <p className="text-xs text-gray-500 mb-3">(3 Bookings)</p>

              <div className="space-y-3">
                {calendarEvents.map((event, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 overflow-hidden">
                      <img
                        src={UserImg}
                        alt={event.guest}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{event.guest}</p>
                      <p className="text-xs text-gray-500">
                        {event.nights} Nights | {event.guests} Guests
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="flex flex-row items-center justify-between p-4 pb-0">
            <h3 className="text-base font-medium">Overall Rating</h3>
            <Dropdown
              trigger={
                <button className="flex items-center text-xs text-gray-500 hover:text-gray-700">
                  This Week <ChevronDown className="ml-1 h-3 w-3" />
                </button>
              }
              isOpen={dropdownOpen === "rating"}
              setIsOpen={(isOpen: any) =>
                setDropdownOpen(isOpen ? "rating" : "")
              }
            >
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                This Month
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                This Year
              </button>
            </Dropdown>
          </div>
          <div className="p-4">
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-24">
                <svg viewBox="0 0 100 50" className="w-full h-full">
                  <path
                    d="M 0 50 A 50 50 0 0 1 100 50"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                  />
                  {/* <path
                    d="M 0 50 A 50 50 0 0 1 90 50"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="10"
                  /> */}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-medium">Rating</p>
                    <p className="text-2xl font-bold">4.5/5</p>
                    <span className="text-xs px-1.5 py-0.5 bg-green-100 text-green-600 rounded">
                      +31%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Cleanliness</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <span className="text-sm">4.5</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Facilities</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <span className="text-sm">4.5</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Location</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <span className="text-sm">2.5</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Room Comfort</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <span className="text-sm">2.5</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Service</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: "76%" }}
                    ></div>
                  </div>
                  <span className="text-sm">3.8</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Value for money</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: "76%" }}
                    ></div>
                  </div>
                  <span className="text-sm">3.8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderBillingSystem = () => (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Billing System</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm flex items-center gap-1 hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm flex items-center gap-1 hover:bg-gray-50">
            <Download className="h-4 w-4" />
            Export
          </button>
          <button className="px-3 py-1.5 bg-blue-500 text-white rounded-md text-sm flex items-center gap-1 hover:bg-blue-600">
            <Plus className="h-4 w-4" />
            New Invoice
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-blue-50 p-3 rounded-full mr-4">
              <CreditCard className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold">Rs.125,000</h3>
              <p className="text-xs text-green-600">+12% from last month</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-green-50 p-3 rounded-full mr-4">
              <DollarSign className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Paid Invoices</p>
              <h3 className="text-2xl font-bold">Rs.98,500</h3>
              <p className="text-xs text-green-600">78% of total</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-amber-50 p-3 rounded-full mr-4">
              <Clock className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending Payments</p>
              <h3 className="text-2xl font-bold">Rs.26,500</h3>
              <p className="text-xs text-amber-600">22% of total</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 pb-0">
          <h3 className="text-base font-medium">Recent Invoices</h3>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Invoice ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Guest
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {invoice.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {invoice.guest}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {invoice.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {invoice.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          invoice.status === "Paid"
                            ? "bg-green-100 text-green-600"
                            : "bg-amber-100 text-amber-600"
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <Dropdown
                        trigger={
                          <button className="text-gray-500 hover:text-gray-700">
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        }
                        isOpen={dropdownOpen === `invoice-${invoice.id}`}
                        setIsOpen={(isOpen: any) =>
                          setDropdownOpen(isOpen ? `invoice-${invoice.id}` : "")
                        }
                      >
                        <button
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() =>
                            showToast(
                              "Invoice details",
                              `Viewing details for invoice ${invoice.id}`
                            )
                          }
                        >
                          View Details
                        </button>
                        <button
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() =>
                            showToast(
                              "Invoice printed",
                              `Invoice ${invoice.id} sent to printer`
                            )
                          }
                        >
                          <Printer className="h-4 w-4 inline mr-2" />
                          Print
                        </button>
                        <button
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() =>
                            showToast(
                              "Invoice downloaded",
                              `Invoice ${invoice.id} downloaded as PDF`
                            )
                          }
                        >
                          <Download className="h-4 w-4 inline mr-2" />
                          Download
                        </button>
                        <hr className="my-1" />
                        <button
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() =>
                            showToast(
                              "Payment reminder sent",
                              `Reminder sent to ${invoice.guest}`
                            )
                          }
                        >
                          Send Reminder
                        </button>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-6"
        onClick={() => setDialogOpen("newInvoice")}
      >
        Create New Invoice
      </button>

      <Dialog
        isOpen={dialogOpen === "newInvoice"}
        onClose={() => setDialogOpen("")}
        title="Create New Invoice"
        description="Create a new invoice for a guest. Fill in all the required details."
        footer={
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
              showToast(
                "Invoice created",
                "New invoice has been created successfully",
                "success"
              );
              setDialogOpen("");
            }}
          >
            Create Invoice
          </button>
        }
      >
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="guest" className="text-right text-sm font-medium">
              Guest
            </label>
            <div className="col-span-3">
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="" disabled selected>
                  Select guest
                </option>
                <option value="ram">Ram Kailash</option>
                <option value="samira">Samira Karki</option>
                <option value="jeevan">Jeevan Rai</option>
                <option value="bindu">Bindu Sharma</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="room" className="text-right text-sm font-medium">
              Room
            </label>
            <div className="col-span-3">
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="" disabled selected>
                  Select room
                </option>
                <option value="101">101 - King Room</option>
                <option value="102">102 - Queen Room</option>
                <option value="201">201 - Deluxe Room</option>
                <option value="301">301 - Suite</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="date" className="text-right text-sm font-medium">
              Date
            </label>
            <input
              id="date"
              type="date"
              className="col-span-3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="amount" className="text-right text-sm font-medium">
              Amount
            </label>
            <input
              id="amount"
              type="number"
              placeholder="0.00"
              className="col-span-3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label
              htmlFor="description"
              className="text-right text-sm font-medium"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Invoice description"
              className="col-span-3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
            />
          </div>
        </div>
      </Dialog>
    </>
  );

  const renderFoodDelivery = () => (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Food Delivery System</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm flex items-center gap-1 hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="px-3 py-1.5 bg-blue-500 text-white rounded-md text-sm flex items-center gap-1 hover:bg-blue-600">
            <Plus className="h-4 w-4" />
            New Order
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-blue-50 p-3 rounded-full mr-4">
              <Utensils className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <h3 className="text-2xl font-bold">42</h3>
              <p className="text-xs text-green-600">+8% from yesterday</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-green-50 p-3 rounded-full mr-4">
              <ShoppingBag className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <h3 className="text-2xl font-bold">35</h3>
              <p className="text-xs text-green-600">83% of total</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <div className="bg-amber-50 p-3 rounded-full mr-4">
              <Truck className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">In Progress</p>
              <h3 className="text-2xl font-bold">7</h3>
              <p className="text-xs text-amber-600">17% of total</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 pb-0">
              <h3 className="text-base font-medium">Active Orders</h3>
            </div>
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Order ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Guest
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Room
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Items
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {foodOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.guest}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.room}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            {order.items.map((item, index) => (
                              <span key={index} className="text-xs">
                                {item}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.total}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-600"
                                : order.status === "Preparing"
                                ? "bg-amber-100 text-amber-600"
                                : "bg-blue-100 text-blue-600"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Dropdown
                            trigger={
                              <button className="text-gray-500 hover:text-gray-700">
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            }
                            isOpen={dropdownOpen === `order-${order.id}`}
                            setIsOpen={(isOpen: any) =>
                              setDropdownOpen(isOpen ? `order-${order.id}` : "")
                            }
                          >
                            <button
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() =>
                                showToast(
                                  "Order details",
                                  `Viewing details for order ${order.id}`
                                )
                              }
                            >
                              View Details
                            </button>
                            <button
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() =>
                                showToast(
                                  "Order status updated",
                                  `Order ${order.id} marked as delivered`,
                                  "success"
                                )
                              }
                            >
                              Mark as Delivered
                            </button>
                            <hr className="my-1" />
                            <button
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() =>
                                showToast(
                                  "Order cancelled",
                                  `Order ${order.id} has been cancelled`,
                                  "destructive"
                                )
                              }
                            >
                              Cancel Order
                            </button>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 pb-0">
              <h3 className="text-base font-medium">Order Distribution</h3>
            </div>
            <div className="p-4">
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={foodOrdersData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {foodOrdersData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {foodOrdersData.map((entry, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-1"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span className="text-xs">
                      {entry.name}: {entry.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-6"
        onClick={() => setDialogOpen("newOrder")}
      >
        Place New Order
      </button>

      <Dialog
        isOpen={dialogOpen === "newOrder"}
        onClose={() => setDialogOpen("")}
        title="Place New Food Order"
        description="Create a new food order for a guest. Select items from the menu."
        footer={
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
              showToast(
                "Order placed",
                "Food order has been placed successfully",
                "success"
              );
              setDialogOpen("");
            }}
          >
            Place Order
          </button>
        }
      >
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="guest" className="text-right text-sm font-medium">
              Guest
            </label>
            <div className="col-span-3">
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="" disabled selected>
                  Select guest
                </option>
                <option value="ram">Ram Kailash - Room 101</option>
                <option value="samira">Samira Karki - Room 205</option>
                <option value="jeevan">Jeevan Rai - Room 310</option>
                <option value="bindu">Bindu Sharma - Room 402</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium">Menu Items</label>
            <div className="col-span-3 border rounded-md p-3 space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="item1"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="item1" className="flex justify-between w-full">
                  <span>Chicken Curry</span>
                  <span>Rs.450</span>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="item2"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="item2" className="flex justify-between w-full">
                  <span>Vegetable Pasta</span>
                  <span>Rs.350</span>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="item3"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="item3" className="flex justify-between w-full">
                  <span>Club Sandwich</span>
                  <span>Rs.250</span>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="item4"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="item4" className="flex justify-between w-full">
                  <span>Naan Bread</span>
                  <span>Rs.50</span>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="item5"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="item5" className="flex justify-between w-full">
                  <span>Rice</span>
                  <span>Rs.100</span>
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="special" className="text-right text-sm font-medium">
              Special Instructions
            </label>
            <textarea
              id="special"
              placeholder="Any special requests"
              className="col-span-3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
            />
          </div>
        </div>
      </Dialog>
    </>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Sidebar Toggle */}
      {isMobile && (
        <button
          className="fixed bottom-4 right-4 z-50 rounded-full h-12 w-12 shadow-lg bg-white border border-gray-200 flex items-center justify-center"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`${
          isMobile
            ? "fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out"
            : "w-64"
        } ${
          isMobile && !sidebarOpen ? "-translate-x-full" : "translate-x-0"
        } bg-white border-r border-gray-200 flex flex-col`}
      >
        {isMobile && (
          <div className="flex justify-end p-4">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setSidebarOpen(false)}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
        )}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-purple-600">TripyTrip</h1>
        </div>
        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="space-y-1 px-2">
            <button
              onClick={() => setActiveSection("dashboard")}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-r-md ${
                activeSection === "dashboard"
                  ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <BarChartIcon className="mr-3 h-5 w-5" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveSection("check-in-out")}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-r-md ${
                activeSection === "check-in-out"
                  ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Calendar className="mr-3 h-5 w-5" />
              Check In-Out
            </button>
            <button
              onClick={() => setActiveSection("rooms")}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-r-md ${
                activeSection === "rooms"
                  ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Home className="mr-3 h-5 w-5" />
              Rooms
            </button>
            <button
              onClick={() => setActiveSection("messages")}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-r-md ${
                activeSection === "messages"
                  ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <MessageSquare className="mr-3 h-5 w-5" />
              Messages
            </button>
            <button
              onClick={() => setActiveSection("customer-review")}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-r-md ${
                activeSection === "customer-review"
                  ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Star className="mr-3 h-5 w-5" />
              Customer Review
            </button>
            <button
              onClick={() => setActiveSection("billing")}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-r-md ${
                activeSection === "billing"
                  ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <CreditCard className="mr-3 h-5 w-5" />
              Billing System
            </button>
            <button
              onClick={() => setActiveSection("food-delivery")}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-r-md ${
                activeSection === "food-delivery"
                  ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Utensils className="mr-3 h-5 w-5" />
              Food Delivery
            </button>
            <button
              onClick={() => setActiveSection("premium")}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-r-md ${
                activeSection === "premium"
                  ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Award className="mr-3 h-5 w-5" />
              Try Premium Version
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 flex items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center">
            {isMobile && (
              <button
                className="mr-2 text-gray-500 hover:text-gray-700"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>
            )}
            <h1 className="text-xl font-semibold text-gray-800">
              {activeSection === "dashboard"
                ? "Dashboard"
                : activeSection === "check-in-out"
                ? "Check In-Out"
                : activeSection === "rooms"
                ? "Rooms"
                : activeSection === "messages"
                ? "Messages"
                : activeSection === "customer-review"
                ? "Customer Review"
                : activeSection === "billing"
                ? "Billing System"
                : activeSection === "food-delivery"
                ? "Food Delivery"
                : "Premium Version"}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Dropdown
              trigger={
                <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <img
                    src={HotelHiltonImg}
                    width={24}
                    height={24}
                    alt="Hotel"
                    className="rounded"
                  />
                  <span className="hidden md:inline">
                    Hotel Hilton Garden Inn
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              }
              isOpen={dropdownOpen === "hotel"}
              setIsOpen={(isOpen: any) =>
                setDropdownOpen(isOpen ? "hotel" : "")
              }
            >
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Hotel Marriott
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Hotel Hyatt
              </button>
            </Dropdown>

            <button className="relative text-gray-500 hover:text-gray-700">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            <Dropdown
              trigger={
                <button className="relative h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={UserImg}
                    alt="User"
                    className="h-full w-full object-cover"
                  />
                </button>
              }
              isOpen={dropdownOpen === "user"}
              setIsOpen={(isOpen: any) => setDropdownOpen(isOpen ? "user" : "")}
            >
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Logout
              </button>
            </Dropdown>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          {activeSection === "dashboard" && renderDashboard()}
          {activeSection === "billing" && renderBillingSystem()}
          {activeSection === "food-delivery" && renderFoodDelivery()}
          {activeSection !== "dashboard" &&
            activeSection !== "billing" &&
            activeSection !== "food-delivery" && (
              <div className="flex items-center justify-center h-full">
                <div className="bg-white rounded-lg shadow w-full max-w-md">
                  <div className="p-4 border-b">
                    <h3 className="text-lg font-medium">Coming Soon</h3>
                    <p className="text-sm text-gray-500">
                      This section is under development and will be available
                      soon.
                    </p>
                  </div>
                  <div className="p-4">
                    <p>
                      The{" "}
                      {activeSection === "check-in-out"
                        ? "Check In-Out"
                        : activeSection === "rooms"
                        ? "Rooms"
                        : activeSection === "messages"
                        ? "Messages"
                        : activeSection === "customer-review"
                        ? "Customer Review"
                        : "Premium"}{" "}
                      module is currently being built. Please check back later.
                    </p>
                  </div>
                  <div className="p-4 border-t">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                      onClick={() => setActiveSection("dashboard")}
                    >
                      Return to Dashboard
                    </button>
                  </div>
                </div>
              </div>
            )}
        </main>
      </div>

      {/* Toast */}
      <Toast toast={toast} />
    </div>
  );
}

export default App;
