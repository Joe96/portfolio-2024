// useNavbarDropdown.js
import { useEffect } from 'react';
import $ from 'jquery';


const useNavbarDropdown = () => {
  useEffect(() => {
    $('#navbar-toggler').on('click', function() {
      $('#navbarNav').toggleClass('show');
    });

    return () => {
      $('#navbar-toggler').off('click');
    };
  }, []);
};

export default useNavbarDropdown;
