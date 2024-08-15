---

<div align="center">
  <br />
  <div>
    <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/NativeWind-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="nativewind" />
  </div>
  <h3 align="center">Blood Donation App</h3>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)

## <a name="introduction">🤖 Introduction</a>

This app is designed to streamline blood donation efforts by allowing users to create and manage blood appeals, locate nearby donation centers, and engage with educational content. Built with React Native for smooth performance, Nativewind for styling, and powered by Appwrite's backend services, this app combines essential features for a seamless user experience.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React Native
- Expo
- Nativewind
- Animatable
- Appwrite

## <a name="features">🔋 Features</a>

👉 **Authentication System**: Secure user login and account management with email-based authentication.

👉 **Home Page**: Centralized dashboard displaying key app functionalities and blood appeals.

👉 **Profile Page**: View and manage user-specific details, including uploaded blood appeals and activity insights.

👉 **Appeals Component**: Users can view and create blood appeals, helping to address urgent blood shortages.

👉 **Bookmark/Learn Component**: Provides users with educational posts related to blood donation, which can be bookmarked for later reference.

👉 **Explore Component with Map Integration**: Locate nearby blood donation centers using an integrated map feature for easy access to donation sites.

👉 **Responsiveness**: Ensures consistent performance across various devices and screen sizes, optimizing the user experience.

👉 **Animations**: Dynamic UI animations using the Animatable library, enhancing interactivity and engagement throughout the app.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/asenjialvin/BloodNet.git
cd BloodNet
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm start
```

**Expo Go**

Download the [Expo Go](https://expo.dev/go) app onto your device, then use it to scan the QR code from Terminal and run.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Set the primary colors for the theme
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF0000", // Red color for content
          100: "#FF0000",
          200: "#FF2626",
        },
        black: {
          DEFAULT: "#000000", // Black color for content
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0", // This can remain for gray elements if needed
        },
        // Define the background color as white
        background: {
          DEFAULT: "#FFFFFF", // White background
        },
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: theme('colors.background.DEFAULT'), // Using white as the primary background
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        primary: theme('colors.black.DEFAULT'), // Black as the primary text color
        secondary: theme('colors.secondary.DEFAULT'), // Red as the secondary text color
      }),
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};

```

</details>

<details>
<summary><code>Authentication Flow</code></summary>

```javascript
const [user, setUser] = useState(null);

useEffect(() => {
  // Logic to check if the user is authenticated
  checkAuth();
}, []);

const checkAuth = async () => {
  const userInfo = await getUserInfo(); // Replace with actual authentication logic
  setUser(userInfo);
};
```

</details>

## <a name="links">🔗 Links</a>

Assets and constants used in the project can be found [here](https://github.com/asenjialvin).


--- 

