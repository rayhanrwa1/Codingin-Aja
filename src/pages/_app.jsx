import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import "@/src/styles/index.scss"; // Import your global styles here

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const logoutTimeout = useRef(null);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const userData = Cookies.get('userData');
    if (userData) {
      const userDataJSON = JSON.parse(userData); // Convert the cookie value to JSON
      router.push('/profile');
    }
  }, []);

  useEffect(() => {
    function handleLogout() {
      // Your logout logic here, for example:
      Cookies.remove('userData');
      router.push('/login');
    }

    function resetLogoutTimer() {
      if (logoutTimeout.current) {
        clearTimeout(logoutTimeout.current);
      }
      logoutTimeout.current = setTimeout(handleLogout, 10 * 60 * 1000); // 10 minutes in milliseconds
    }

    function handleInteraction() {
      resetLogoutTimer();
    }

    resetLogoutTimer(); // Start the timer initially

    // Listen for user interaction events
    document.addEventListener('mousemove', handleInteraction);
    document.addEventListener('mousedown', handleInteraction);
    document.addEventListener('keypress', handleInteraction);
    document.addEventListener('touchmove', handleInteraction);

    return () => {
      // Clean up event listeners
      document.removeEventListener('mousemove', handleInteraction);
      document.removeEventListener('mousedown', handleInteraction);
      document.removeEventListener('keypress', handleInteraction);
      document.removeEventListener('touchmove', handleInteraction);
      // Clear the timeout on unmount
      clearTimeout(logoutTimeout.current);
    };
  }, []);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
      setTimeout(() => {
        if (!isOnline) {
          Swal.fire({
            icon: 'question',
            title: 'No Internet Connection',
            text: 'Please check your internet connection and try again.',
          });
        }
      }, 5000); // Show the alert after 5 seconds if still offline
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [isOnline]);

  // Load Bootstrap only when the application runs in the browser
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) { // Change the size according to your needs
        Swal.fire({
          icon: "error",
          title: "Mobile View Not Supported",
          text: "Sorry, this platform cannot be accessed using a mobile view.",
          footer: '<a href="#">Need help?</a>',
          allowOutsideClick: false, // This setting prevents Swal.fire from closing by clicking outside the dialog
        }).then((result) => {
          // If the user clicks OK, redirect back or exit
          if (result.isConfirmed || result.dismiss === Swal.DismissReason.backdrop) {
            // Adjust according to your needs, here's an example redirecting back to the home page
            window.location.href = "/";
          }
        });
      }
    }

    // Check the device type when the page loads
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      handleResize(); // If the user is using a mobile device, call handleResize directly
    } else {
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
