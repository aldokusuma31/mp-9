import React, { useEffect, useMemo, useState } from 'react';
import debounce from 'debounce';
import { useRouter } from 'next/navigation';
import { Bars3Icon } from '@heroicons/react/20/solid';

interface Props {
  openNav: () => void;
}


export const Nav = ({ openNav }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // let listToDisplay = fruits;

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  // const renderFruitList = () => {
  //   return listToDisplay.map((fruit, i) => <p key={i}>{fruit}</p>);
  // };

  // if (searchTerm !== "") {
  //   listToDisplay = fruits.filter((fruit) => {
  //     return fruit.includes(searchTerm);
  //   });
  // }

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.clear();
    };
  });
  const [navSticky, setNavSticky] =useState(false)
  useEffect(() => {
    
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      }
      if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  }, []);
  const stickyStyle = navSticky?`bg-[#212428] shadow-gray-900 shadow-sm`:``

  return (
    <div className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000] `}>
      <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
        <div className="font-logo text-white text-[18px]">
          <span className="text-yellow-400 text-[30px] md:text-[40px]">Event</span>
          Zenith
        </div>
        <ul className="md:flex hidden items-center space-x-10">
        <input type="text" onChange={debouncedResults} className="w-[250px] h-[30px] mr-sm p-sm rounded-md" />
        <button className='nav__link' onClick={()=>router.push(`/search/${searchTerm}`)}>Search</button>
        {/* {renderFruitList()} */}
          <li><a className="nav__link" href="#">Home</a></li>
          <li><a className="nav__link" href="#">About</a></li>
          <li><a className="nav__link" href="#">Services</a></li>
          <li><a className="nav__link" href="#">Login</a></li>
          <li><a className="nav__link" href="#">Sign Up</a></li>
        </ul>
        <Bars3Icon onClick={openNav} className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180" />
      </div>
    </div>
  );
};

export default Nav