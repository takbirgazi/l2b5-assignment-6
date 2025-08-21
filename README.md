# No-Cash 💸

**No-Cash** is a digital wallet application frontend built with **React.js, TailwindCSS, Redux Toolkit, RTK Query, and Axios**. It connects with a backend API to provide users with a secure and seamless virtual money management experience. The platform supports multiple roles — **User, Admin, and Agent** — each with different capabilities.

---

## 🚀 Features

* **Cash In** – Add money to wallet via Agent.
* **Cash Out** – Withdraw money from wallet.
* **Send Money** – Transfer money between users.
* **Receive Money** – Get money from another user.
* **User Dashboard** – Manage balance, transactions, and profile.
* **Admin Panel** – Manage users, agents, and monitor transactions.
* **Agent Panel** – Handle Cash In and Cash Out requests.
* **Authentication & Authorization** – Secure access by roles.
* **Transaction History** – Detailed records for all operations.

---

## 🛠️ Tech Stack

* **React.js** – Frontend library
* **TailwindCSS** – Styling and responsive design
* **Redux Toolkit (RTK)** – State management
* **RTK Query** – Data fetching and caching
* **Axios** – API requests
* **React Router** – Navigation and routing

---

## 📂 Project Structure

```
No-Cash-Frontend/
│
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components (Navbar, Buttons, etc.)
│   ├── features/         # Redux slices & RTK Query APIs
│   ├── pages/            # Page components (Dashboard, Cash In, etc.)
│   ├── services/         # API services (Axios & RTK Query)
│   ├── App.js            # Main app component
│   └── main.jsx          # Entry point
├── package.json          # Dependencies and scripts
└── README.md             # Documentation
```

---

## ⚙️ Installation & Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/takbirgazi/l2b5-assignment-6
   ```
2. Navigate into the project folder:

   ```bash
   cd l2b5-assignment-6
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Create a `.env` file in the root folder and add your backend API URL:

   ```env
   VITE_API_URL=http://localhost:5000
   ```
5. Run the development server:

   ```bash
   npm run dev
   ```

---

## 📖 Usage

### 👤 User

* Register/Login to your account.
* Cash In via Agent.
* Send and Receive money.
* View transaction history.

### 🧑‍💼 Agent

* Approve/Decline **Cash In** requests.
* Handle **Cash Out** transactions.

### 👨‍💻 Admin

* Manage Users and Agents.
* Monitor all transactions.
* Handle system-wide settings.