// Function to capitalize the first letter of a string
export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  // Function to check if a string is empty
  export const isEmpty = (str) => {
    return !str.trim();
  };
  
  // Function to truncate a string if it exceeds a specified length
  export const truncate = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.slice(0, maxLength) + '...';
    }
  };

// Function to extract the pathname from the URL location
export const extractPathname = () => {
    return window.location.pathname;
  };
  
  