import React from 'react'
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const Home = () => {
 const navigate = useNavigate();

   const goToProjects = () => {
    navigate("/project"); // redirects to /project
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 px-4 sm:px-6 py-10">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center gap-8 md:gap-10 bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl w-full max-w-5xl"
      >
        
        {/* Left: Image Circle */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex-shrink-0"
        >
          <Motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden"
          >
             <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAogMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQMEBQYHAgj/xABCEAACAQMBBQYDBAgDCAMAAAABAgMABBEFBhIhMUETIlFhcYEykaEHI0KxFBUkM1JiwdE0U+FDRGNzgpLw8RY1cv/EABoBAAMBAQEBAAAAAAAAAAAAAAACAwEEBQb/xAAjEQACAgICAgIDAQAAAAAAAAAAAQIRAyESMQRBMlETIlJC/9oADAMBAAIRAxEAPwC84oYo6SuY3lgdIpnhcjhIgBK+xBBriPoWxTIoVCT2u1CIf0bVNNm8BNZsh+YaoO9P2iR7xEunGIcS1uqAgf8AXTqNkZZuPou9VHaHb/StJLwWo/TrpOBEZxGp/mf+gzWZ3+1+v3yS21xqlw8LZV1BRFI8MqP61Cho84ii3j49BVFi+zky+a2qiiwa3tprGsZSW7aKAnhBa9xceZ5n51BAS5O6ir786VggknYIqknqo4AepqRS0ht1++PaP/lpwHuedVSSOJycnbI6NHYgMRk+eafW+nNLxbeA8xj6Us15b2wARQ0nPs4wOHrTaS6uLjg7sinogx8zzrTKF57e2tSN4p5liAflXIubItwdPrTWOwgfOCTJ13X40xmYQysodt0HGDQBYESO5U9lIqt4qQwPqKa78ttd78b7k0MbntIyQQRgg+VR9qJFmMgGF8aVmlLtK2DvSoIyx8Ov9qyjOujSdldu5DNFZ6+VZXwqXoAGD07QcvLI+VaH4cOfLHX0rzuYbh8sY+1Q/hWTHD2NS2ia9qGkMi2N3LagH9zcZeJvLjy9iKnLHe0dmHynHUjcuFHVV2d2zttQeO01KMWN23BCWzFIfAE8j5H61asVFxaO+GSM1aCo6PFDFZQ4geZoUZHE0KajDoDNdYoLxAIIIPEYo6WjbsI8RjpWW/aftiG7XQ9McGP4buZT8X/DX+p9qsH2ga/c2gg0LRg7arqHdHZnDRoeHA9CfHoATWV6pa2tndGzgYTyW5xNcLyeTqF/lU8PM5NWhCtnD5Of/MSMSLKjfzu9EAp7bwMea7o8cUSlIe+RlzyWiZ5JTu5OD+Faseex2buOFN2LgB+FTk+5ps0kkhAIwp/AnxN60aIkQ4jfYdBwA9TXe9IxG46qf5eH1POgyzqO3lYALuQg8gOJ+lOVsreHD3Upkb+HPCmjIqd6WXn5ZNKW1uk8uWjAijOX/mPh7UGoWaNZgZ1jSCJB3eGC3mf7VGtcpcs6mEGPPhx9c9Kea5dhBHa5wD3nA+goobMC1aeeAK34A3h40BQwYOoD97sRghQelC5a5jWIxsdw56Dn/apDsd61VSOHZjj4cKQsiJIjBLxC5Bz5GgwTsrkF1RiEbPPp6EdPWpdc5LLndzhlfiQfOoSSMFmWQd9eBIp/p0pQpFK28D3Q/j5HzHSgZErwljKuuQR3kPI1btiNrWjvY9C1WUusn+EuHPHP+Wx/I+1U6ZjFEAMby9Kib0s8ivvtwwVZTg+PzFK42PCbg7R6LoVVvs/2kbaDSjHdsDqNphZiP9op5P79fOrSKg1To9aE+cbEm+I+tCgw7x9aFBpQ9hdo2iuxol833b/4Nyc7p/yyfDw+VXySRYYnllOI41LufADiawnWw0b78TFXUgqRzVuYPzrVtJvv/mOxTusgjnuoHglJ5JJyJ/r700l7OTBlbTi+yr2xe12c1vba9ymo6kjR2W/zhRjupjwJAHtWaK3AY5D4fPxJrUftgZLTZ/StOjYJGZvhH8KL/c1laZZsgYyAceA6CqR2rObOqlQrGhdsKOJ5Z50u0kdsu4vek646UkZMKVj4E828PSkVTln6HOKcgzpnkm4khVHjwA86cRMIxvAsQeALc3/0pBFVu8f3aNjH8TV13ppREM5Iy5H4RQYLR78xLL8Wd1SeWfGpJHhg3YVOFRSzUziIEyqvwR8fekGZpUc/ikdU9utAw60+17e5e8uBl3OQDyUdKkLsgoyY6USYR1QcAqlmNISzb0PbdGP0oNFIQrWCk4O9GB9MUx06JXuXJPgSPXgfqKWgci2iH8LMPkab6XJiSVh4n8+FBmhfULYK8ZHLG5nz6f2pvarl5LeUcGGM+BHIint83aRTKOYUEeo403XBcOBxxz9aAYr25mUCT95H3X8/OkZFU5jb4WBxjoaKQ7kqPwwx3W/pRS5Te48VAYUCj7ZHWG2f2htrqQ/cN3JyOTRMRk+2Aa3wcgcg56jka85JElxEyHP8pHMCth+zrXotR0WDT7iYfrG0j3WQ8DIgOFYePDGalkj7O3xcqT4stB5mhRkLk8RQqZ3GHa3HnfzzHTy/95qU+ynXotKvL3T7+URW1wO1iZuXaDmAOpIPLyphqkbr93Icun4/8xDwz6jhn51D2c8+n38F7bHdmt5FlQ+YPL35e9Vq1R5XJwlY++07WTrO1BVIp4re2jWNEmjKNx7xJB5ZqsiUD8WN7ifIdKt+21oLzRYtoogCLy8MjEHON/fwpPioQCqYvEYGT4nxpo9C5LcrY6iOVyMcaCsTvKoySd1fM+Nc3NtdQQJJ2bBHzxx3iP4sdPWukwiKw/ACRnoQOtMICWRU3tz93H3V/mPU0tApt7Ysf3sp/wDPlXTabLDaWVxcDdjud4xKfiZVwN70yaTuZPvuHJBy86AYoG7OBmPU4HmaOMYa3Hg5b5D/AFri47qwp0DcflXcP7yD0b+lBrHF5cMsbANxkOPauLt+ytCPAYApK5WSWdQiZWPdLkfhGaK+YnCZzmgUVifKsBy3gw9CP/dIWDbs0qjqM/I0VuwCgjh3Svy4j6ZpOE7l8p6EkGgB+0g/Sn48GUE1xAcRDP4VAPtwpvIx/SD6EUrvbkLHoeXnk0ALygSIU/iHD1pJmLojn8SsD64riOUOM5+Fh9eFDfO4QRjdl/PNAAszjh0Bx/WrPsnoFxrct2+m35tdRsik0G98JB4cxxByPMceVVe3wSF6Gr39lM+NpriIcpbJ8/8AS6/3rJdFMSuaJwaj9oSDcfRNPlZeBkEwAc+PPrQq8knJ4UKjaO/8T/oyC7iF7amNTl1G9G/j/wCciKrrxkw7xXdYHDL4EcxVgm/Zp+m453lx0b+xplqEQE5YcBKOPrVDhmSmy1v+stj9U0a5IaKYSyWuT+6uEXfx7rx9mqq6BpKSWFtfpIi3Ulz2cKypvJ6keOePtVo2DZ5Jb+0jKiVDHexb3LMZ3ZPYo+KeSbNmLZjTRZd25hYXMZJwGYkkA+GQaSc1Etig8i0MNo4Lt2g0BbOCxmupQbi57XtFuePdy/MDgThsceAqK2g2cGzOrWMd5ci40+dldpAmDIAy76lfED5ip37QLn9c2Gj3NvGyR20rC/tmYq6twwSfQMAemahLy4vtdsYJJ4ZJUs5ZDCjgvlDhgGb8QAByefDzpmq2uiat6ktiW1uqW+qa+0lq6taQjs4SvAHiWOB8h7VXI96Qq+6SjycW6Z54+VW/afZ+DZvZ63xIs91PMzPMBgY3CQF8s/Om0ulLZ7K3bnG9Z6winzVogB+dbGSa0ZkhJS2RVhp8uralZ2MDYkmlIDeHAnP0ptbNnsWIwRnIpxpOpnTNXtL3dJNrco/Dj3c8R/25o9VmsTqt2+nNI1m87NEXjKndbjxHTjmm9k/QqcJpLbjqJZr1QwU8dxEPP/qb6UwujuzYH4V+WacJaDs7e97VClyXZYxxYBSFyfDJzge9MZpd+Z2PJhn2rTGAN2T48Tke3H+4riQnuuPHPyorjkpHDvgUagN2kbcM8cfnQYOnGZww5Ny9xRXDgxwp4AE11H+7iLdGwflSMnNm9qACts/ejn3N4e1KTnEcvj2qkfnRW2E3i3IJj50LgZSIfxkH5CgDq3O7cR+HH8qvv2W2MkO09rcjjDc2Ny/HoRKEP1AqgRErcx/ygk1vGxWkR2WgaRPKv7UlkUJzwAdt8j54pJukXwQ5SJ4qMmhRtzPChXOeiY6qbyG1c8gezY880ymYvAA4w8Z4jzqQjljvYUmhJznBB5g+B86ZaioWQSDGJBg48aueY/sbaY00WqxpbnDXL/ohPgkvdY/X6VsLRJudnjuAYA8Biso2cjD7TaWCM/tCn5A1rPSubyOzs8T42Jw7OW93ELjeCvyzjj86VfTTaiNWdGXoN3hT2xnWG1fePI8B41wqyXs3m3X+EUibqir+Vsh9Q2Wg1zSZEmQYRXWAeBKkZ9qYnZ/7q7ivYwbLULdI7rH+zuFGN4eowfatBjRY0VFHBRgUUkUcilZEVlJyQRzpk3FEpO3s8+Js4YrW+g1CGI3VpOXi3UJ7cLgPGMDiWUhl/wBDTe72ZuF0mTUISUftoYYraPvF1f4HZuILE4Bx1zXoo2tpMojlZocfCY23cVjX2jSTbN7X2emaTNIkQWO6le5YyRoe07p8QARk10QcmrOafFOmZ3a2080rQpEDJJIYlJyMP4A/P5U3uI5YRDLIGWOVT2Zb8YHdJ+YNXnQNU0yXWbRNQUxx2t9czXF/CpaB2kyEOcZA9aPaPZh/1Ds9FHutLEk1sWQ5DuSzoffB+dPyp0xOHJWigu+8iDkd4e9KjiQ4+JTg+YrndDwrw728M0+0bTbnVdRttPtE3rm6kCKMcFzzY+QHE+lOSHui6Fquu9qukWb3CxDekfkqDrx6njyGaZalZTWF9cWVwUM0DlJNxsjPkeor0Hb6GmzmlppWnsuOxzKxbdPZIMyEnoXY8T5154vro3d1c3bYBuJnmI8CzE4+tBojOd2EgHBYYrrPaNE2e7HGFHr1pKQ74LnoMClMhUAHPGKDAJ95cFCd3OFJPQda2nYvbKTUrmPS9WSFLkriCaNd0SY/CR0bHLHPFY1DAYYhI+9vOx9qk7AyOojUHtYzvLu8CpB4YPTB5UslaK45ODtHoRl7x9aFZ7b7b63+jxb9haTNuDMpl3d84+LHTPOhUuJ2fnRTY5zb28Wp2w3lkQCZM4yRz4eNPb8pPYpPCd5CQynyppbDsrG5jONx4e1APQ53T+QNcaZJjS54W4CIgqPAMM/nmqHH1oe7MkDabTf+fj6GtZ3edY1plwLbWbCY8Fiuoy3pvYP51s5GCRnrXPlWzr8V/qwRxl3CIMk9KmrK3EEfi5+I1FWkvZXUWRwc7hPhnl9ammkjjIV3Ck8s9an0UySd0KUK5zQpRBK4CuhV1LA8MAVTdotnbjUJo5BG10IwVXtHMbhTzUOOO75EGrsaL2rU2ug4p9lQ0nT30zTprO12WgjWY/fGS67QSjGO9lePpUa2zcthZG3iudy17dJoYHUt+jsp3gFbgcZ4cehrQKaarPHb2bPJF2zORHHD1kduCqPX6c6dzlIyMYQ2Yrquw95qW18tnosY7Cb9pduS2yk4O975IHM1oOx2xdjoOrWEtobiTVShe6klYbscJGMFOSlzjA5jB8KtWk2f6h0pmm3Zr6V96QxjHayHgqjyHADyFd9hNZWLRpJvalfyd+boGI4n0VRwHkKupNKmck0nJtFS+0XWpLbYrV76I4k1GYWNqRzEQYhj74c+4rA2XjgDAXp51q/203KrDp2mW/cs7CTc3Rw3pNzJ+S492rN77SL220+0vpYd21ut4RPvZ5c97wPlVIvQjTI4De7tXLYjZZ9TmOqXcG/Y23eSM/7w69B/L59eXjSmxOw51MLqGqhlsT8EXJrgfmE/Oti0rTklgQxhYbVO7GsYwMDoB0HCmsEjN9udmo5Y31vSwXRyJLiIDmD/ALRfDzHvVa0VR+nTt0Y7o+QNbFJbLp97LZAfdY7SAH+BuY9jke4rM7/T4NO2kvoLRdy3EodU6JvIpIHlk1jGj2R6SlUVfAYoUiFYgEcjR1hQ71P7kxW45tblW/7hTCCXD3MQ5uYU9gST9KTjuXmlle5bePMkdKKziO+00nB5TnHgP/VBOxS5DNNPu/w5X16Vs9hfx3OkWt+G+7mhR8+orHWIDFvH+lX/AGFuTcbJzWu72rWbyRBPFT3l/OpZlqzo8V/tRdbKL9KbIYbgIyanOfPj61nmlyajparNDv3cDqC0WcvGeuPEeVWrSNdtr89mrFZRzjdSrD1Brk5WzsyY2tk1QogRjnR1pAI0VHXLukaF5GCooyWY4AraNujoDNR+m41O/wD1i/8AgrXeS1OP3j8mk9BxUePE8iKbxzXGvb0djJ2GmtlTc4+8m6Hs/BeY3jnyHWpm4I0/T1jtIhlFEVvF03sYUelVhGtkJysKNv0rUCzD7q14DjwMh5/IfnXEUqtdXl47AQWymNSTwGOLn8h7GgkL2Wnw2iSZnkO6ZDzLHiz/AJn5VWNt9SNrbWuhabGXmuy33ajOUXBYt5EkZz0zTiJWV+5s7fWTFd38Hbi1Z7go47r3EzAhT4hF3BjlxHhSl5pyX06aZqEEcw/Shdy90AMirgHHTLYGDzCmq/f7X2FjLa6cbmMmOVcrEN9EbOS8z/jbPHdXhnmTirrDFDZxySGUkv8AezTyHi38xPhjoOA6VsYtu2NKcVHih1h2xHCAXbuooGBnpVltIFtraKBOKxqFB8fOorQLaVlN9dIY2kH7PGRgoniw/iP0GKmuQqpAh9pbWR7SO7t0Lz2rF9wc3jPxL644+1ZVrMgl13VJkbeUzAKcYyBGv9q1nV9atLKQWXadpfS91II+LDP4m8APOsduJFee8lByrTSnPiASB9AKBo9iNvABBGCeO4Pyo6VhwYkP8ooUDlStO9PMG5cD9akI+LZHxHgB5mm0Ue7cyEdU3vrTyzUGXf6IC3yrSKE5QFmIByF4fKrT9mlwItXv7UnAngSRF/mQkH6EVVUG84Hiad7PX407XLK8du4kwSY/8Nu6fzB9qWa5RaKYpcZpmwW1rKblv0f4G+IdAafHTEumUXUKkp8Lg4I9Dzp9pyIluCrAluZp1kYrg40ek8r6GVpYtAxMlzPIM91HbgB/WnU00cMbSzSLHGoyzscADzNFcTxW8LzTuqRqMszHAAqJsbSTX5lu9RjdLBSGtrN+G94SSDqfBTwHPnydKyEpVsH6w1DVf/pYRDan/fblCd7/AJadfUkD1pxbbL2jOs2otLfzg57S7ffwfJfhHsKnljVBhRXXADJqqSJOZykapyGPOm+TcXSbnFIclj5kYGKUluYlVgzgcCM1E3F8scLbsvYwRLku2F4DmSTyprMUGx7dH9vSQ8I44iq8ebsePyA+tY/trLFc6FrWvXJfNw/6Hp6b5XdjDYLYB47xBPhjFXGa4n1OMW2mtLBZOfvrsjD3APMR54jP8fhy8ay77SdWh1DUIdLsmUWOnDcCx/CX5HHkoGPnWx2wlFQjsoUIDyKGwFwc16K2E02fUNC0m41JW7GG3jKpJkNM4HBmH8I4Y8SM+FZb9mOya6/tKskyH9X2WJbjP4z+FPc8T5A1v+pX0em2Ml1JFJJuYCQxDLOxOAqj/wAwKszmQvc3ENrA9xdSpFDGMvJI2APeq9JqWo6u5j02KW0tORmZd2d/QH4B5nveQ50rb6Tc6hPHfa6w31O9FaIe5B/dv5j7YqdQJEoVFCqByFYaU64ih0W3uWCCMQI7uQck4GeJPEn1rNFDJYDfxv8AZEt6441ddur79gMCE797ME9EHFvoAPeqW0qOjqeoIoHiLw47FP8A8ihXK726McsUKBrIC37ydofiMPH6U5s/8POeuCKFChkUIw/vI/UU3H7+4XpvEY8qFChAXjYXavVVuW0x5VkghG6jSAl8eBOeNXDVdpL+zt5Hi7Isq5G8v+tChXPkSs7cLtbK5ou0Go7Q6hYpqMwMDXRDwIoCOAjMM9eag8+la3ZKFhAHU540KFZEMoueRqNvJXXgGoUKZiY+yOVjJIAx5mqxYSHWZLqa/wASJa3Riigx92McmI/E3rmhQrJdHUuxrt3qd1pmzMs9m+5NIyxb/VQ3AkedYu3dDdcA86FCq4+jj8j5HoT7LrK3sdidOa3QK92nbzN1Zzn8sYFTcjGXaOKBj93BatMoHVycZPoOXrQoVQgSPh6UjdsVtJ2HMKcUVCsAx/a+V21uVSe7BbIIx4b2ST68B8qrkbEibyQmhQoGj0SYPAUVChQaf//Z" /> 
          </Motion.div>
        </Motion.div>

        {/* Right: Text Content */}
        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.65 }}
          className="text-center md:text-left text-white max-w-xl"
        >
          <Motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4"
          >
            Amit Thakur
          </Motion.h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4">FullStack Developer</h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            Passionate about creating secure, scalable, and high-performance backend systems.  
            My goal is to achieve a strong position in my role, contribute to impactful projects,  
            and grow continuously as a developer.
          </p>
          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
            onClick={goToProjects}
          >
            View My Projects
            
          </Motion.button>
        </Motion.div>

      </Motion.div>
    </div>
  )
}

export default Home
