export default function validateField(name, value) {
  const v = value == null ? "" : String(value).trim();
  
  switch (name) {
    case "name":
      if (!v) return "Name is required";
      if (v.length < 2) return "Name must be at least 2 characters";
      break;

    case "phone":
      if (!v) return "Phone number is required";
      if (!/^\d{10}$/.test(v)) return "Phone must be 10 digits (only numbers)";
      break;

    case "email":
      if (!v) return "Email is required";
      if (!/\S+@\S+\.\S+/.test(v)) return "Invalid email format";
      break;

    case "make":
      if (!v) return "Car make is required";
      break;

    case "model":
      if (!v) return "Car model is required";
      break;

    case "year":
      if (!v) return "Year is required";
      if (!/^\d{4}$/.test(v)) return "Year must be 4 digits";
      const yearNum = Number(v);
      if (!Number.isInteger(yearNum)) return "Invalid year";
      const currentYear = new Date().getFullYear();
      if (yearNum < 1900 || yearNum > currentYear) return `Year must be between 1900 and ${currentYear}`;
      break;

    case "date":
        if (!value || value.trim() === "") return "Date is required";

        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const dd = String(today.getDate()).padStart(2, "0");
        const todayStr = `${yyyy}-${mm}-${dd}`;

        if (value < todayStr) return "Date cannot be in the past";
        break;


    case "time":
      if (!v) return "Time is required";
      if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(v)) return "Invalid time format";
      break;

    case "location":
      if (!v) return "Location is required";
      break;

    default:
      return "";
  }

  return "";
}
