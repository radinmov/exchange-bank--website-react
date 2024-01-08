import userEvent from "@testing-library/user-event";
import { useState, useEffect, Fragment } from "react";
import { Style } from "./style";
import Header_2 from "../../Header_2";

export default function Homepage() {
  const [amout, setAmount] = useState();
  const [account, setAccount] = useState();
  const [name, setName] = useState();
  const [transaction,setTransaction]  =useState([]);

  const getTransations = () => {
    fetch("https://cacore.liara.run/bank/transactions/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + localStorage.getItem("Access"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setTransaction(result)
        console.log(result);

      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getTransations();
  }, [])


  useEffect(() => {
    

    fetch("https://cacore.liara.run/bank/asset", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + localStorage.getItem("Access"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setAccount(result.account);
        setAmount(result.amount);
      })
      .catch((err) => console.log(err));

      fetch("https://cacore.liara.run/bank/transactions/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "JWT " + localStorage.getItem("Access"),
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);

        })
        .catch((err) => console.log(err));
  }, []);

  return (
    <Style>
      <Header_2 />
      <div className="container_start black">
        <div className="container-start__inner">
          <input className="int" placeholder="Serach" />
          <div className="add flex space-between align-center">
            <h1 className="m-card">my cards</h1>
            <div className="right__add flex align-center">
              <p>Add</p>
              <div className="cir">+</div>
            </div>
          </div>
          <div className="fh-card flex justify-center gap-100">
            <div className="card">
              <div className="card_inner">
                <img className="test-2" src="assets/images/home/maste3r.png" />
                {/* <img className="test" src="assets/images/home/visa.png" /> */}
                <p className="nm">{name}</p>
                <p>{amout}</p>
              </div>
            </div>
            {/* <div className="card">
              <div className="card_inner">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABIFBMVEX////qQjVChvX6vAX//v////00qFNChfX///tChvP4xsPo9Ov82JTnIgn6twDqQjYhpUk3f/TpOyuuxfnrXlb87Ovxjoh2ovbp8f36swDlEwDC4sr+8dj7uBWOxZk4gPL74d/+9NEFnDfV4Pstpk77v1AacfL96bsue/Pi6/1Wrmj1+f74zchdj/Xa5fzM3fy1zfrD1foSb/Ind/PoMSBhl/SoyfgAafGGsPfx9f6auff++eZUkfPsXE59qvf5vLzS6Nf95+fvg3v7rQD6yDT83p0Fmzik1bHzm5b8xUj/991Jr2P7yl6lv/nwcWr86bL92H3835K238H0q6fwfnOY06f7yHPsXFH7xR/90YRswIP6x0n93YiCwo/8zGdot3oXJq+hAAAUdUlEQVR4nO1cC3vTxradGA2ySBNnbIJE+pgWp66EIlmyIiIpwlDaAi01bWnP6bn3tLf//1/c2XtGDzsPbCUE+L5ZbUjkh6SlvWe/Zs8QoqGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaFxFpTKHwVj+U14j65+5ZouvHJsnPupq8AghjipgQRaVzNaV6INQ6P9YsebMZbPs+HNbvaF6gKGgfxoc13B2KilZjTsG0leq0hbTwsepXHByWmXC4tnAo9lWYQUZVhfBy5K+2RJjfHdziyNZfEb7T9XlGn1djcGxW+B+FoiRLVsjvr4GQMeNL1wrG6GRtlWBjg1lh/k0nsgif7m18JL9EklyOoOztidFdVRw7ITzeWRuIoLtbS7sTP83HNy328NQxRX6xNUXbR17Uu16fLrdb7VVXu41tWc2OaT2Ww2mXA7dpo3+k/uVPgSNBj02KCffbOEz05PTzdXm/6ny3i6vb1dK21fXGj/ziXYUG28BZ+4vGdZPbNnsokV5ZVh+/ZgR+HgGcoUXux/8t39Zex+/8NniqNRWRAYxWHoeXml+fLL9bPffvDgwfMHCvjH3sMXT7dhDMq7v1Nf+wwOXq5LDUcticvEBHJWr9czxS8+mztKPfcPBhJbw3u17et/sntrBbv3b33ykxxZVNpg6kURGbmlnUU+vqYcTX3t7b3D2yvYe773xdPa4x4NB+dhS/x/3N9ASwVB5gpmPfwxBcRvd+7LB7l/sDXYQgiGFc5hKHD/x5/AJEqGJB+l7iQixYQlbkgXUzSXlBqXMhR4/upN9YGj4da5GAyOX9J1GcLdjE0mZScZ9ixB0WILKUTBcKtmaCjbdz7DW/d/hjMaKGnPZszk7pRmiZVENLCKEAYweSvD23uHL9RlLmAonvjxl+uLUDzVlCExQc0CQSJXi5Ue+g+hpQ3DyldewPDW7g+oE3BxZ54wcRbLy+cus/14xsqRvxz0bu+tcFOED/eevkWGx8+MtX2G+NyISfEBOzQ1CJMv8EEuybA660UMb31NpLM2HlFjmk64xVLfS13XITPBNgYRNiZwRYb1weHhq8sZbu0crStAgGFzZIRmRsEyLdPN1DjEkd2MQ+MyGf54Kp/a+MQSAy9micXmZBrMYpIKSTp5Tls+/owMG0V9cSnD4ev9Tfx+HPCesjMWKigQFL9YGlYM17Q0Ap9/g/aElJxPSvH9Ry5LMhLzlIwnrKBxEiklhnCtxfBw+ffhQ2TQMByguat+du60o8m3gNIFt5SF6XFucjQ0gqxpWvG6DHfro89/kWP1RCiE4OYRklnugkQz33CDKVnwkxGpgxnJ8FDROmzp7OGrbRD10fGwhlQk/Bne/bLxmWsgcy00M2BAs1Em/gWKgjWP1mL462+//fp9iyEQ8GYWaELCIkeYnED4jEc0Cwy41kkE/CjcYiPDw39evHjx98OW1r5BGd5t8HiIbgJIHv9OlsbzW+DPGcgLlFSoEDFqwiYbrcXwM3H8S3UoPSKJZxxOYpmTVESA0yKkERlnJEwZc3lYPf2G4d4XePyqkeILtPJfNvjjuFLY4Z9HqOrrUnRsZklHzzmEatOkMjcbMDy9r9T1a+ksYqEHzE0SV/zYsZF7Ytj5IYncYL6IvcpILDMUr/3reS3Uf61E1vvH1WgcDO9JbhswVNEMSwVDMk7QHVqbMPzpV3W4+5d8Px9P4ziORotsbgdBNvVlNjKOxmBMfYx82uPwDMPb6PRb5vL3HWnQB4Ph4AnZSEsFQxWMthluoqU//fvHiuCtPiqXoUIq6ueO44Vjp8m5hHznaURaDBstJY1LvP1mRUjHtakZvpbU13YWkiG4CK4YKsdoumsy/Op+9ed3p6oe56TZIopDxyAVV3m3NCxSi7mph68uMdx++uafxvKALaUtj3BHxh1I8vd1qS0zhHEoGBpKhoC1GX6u/roPQxL1h55wLowK48wKUjsTyQWF8gFxiuQkEWH96KwMv3jQ9hYPVVnFUCnXY8gylJ3ZkGAtQ6GVad4n/XGiotONGe7+pnRU3F3JqhiXC2NT+PJrIBJnLqgHY7Lk8YHhXsvv732qvqDqXEeVIa3i/y4yBC0dOx5oaa8bw1v3d2WiL27pkbTIIkXhJSQpvo/1K5I7YK7nDF3tGYb14T+kfiRobV4PVVoo7qLfkaHw8BafTE6QYUctFVnwL3hflDgzDI0YSxfggrxiTGXKnxVjRxCdwoC4SIZ7t/t1cYtCLv3l4yp8Gxz/sXEhqtFSiGb4lRhiXErqjIwxuwDv4EVBaRARwRHfy7OTdBE79IylEQwrgq8+JXWtC7X+3lDGa+Kfg283LkHVlgYDN4aWxurMEJILtKbxRPAbCXERB3L9MTXmvu+TUUwWScIF8wsZHj78tLLAhiyn7gslre5hYzvT8haYWrBzxmFrjJ+XHwqG7TD8B3jGfZKXZSRSaOIvRK7v2j7xWO7EuRNEdCTM7Gx0xpY2DLdliokihEv+PqwKKVsHR3W1Z0OPjxmTEB1qqXkBw2dYoaCrDH+69Z//7FY+cfd/iJyt8cDn0UXKRcjkilzRZp5fxKQQZ40tId/8Qkvz/GlbESnZb4Wkg2bqYVOGkFEINQWGVssfUgq1NsXwjzrtXGLYPz09/ernKqz5+VSV5MV/kUgT4URzh/iQEhdzn7hsQadlEjjneAt18L/L5eYng9rOHNyRRTu0p+sWaGtvgUk+aumSP6S1DFU0cUaGeJpvKiH+9yt1bzQOXA55punGlM6TXkxGs5AUiVsQr5w5F3uLB81shlAZ42XtDIeD/XUFdwFD0zxrS42dhuHO8Z9398/IUDxSo/9DnT8Jhn0cJSNXFg7ceU591zRHZJTYeX/GRdZPReC2zPBpkzrt/d1iSI626lE4vHuvwrOXm+QWys4IRbVWLY3wSoN2sWQI1nqF4elfv/363+p4F2UoQ64FwycnMmmaMdMsSMRnYxEMmEmBw3k58v67dhe3HzS3R43fm0c8GB5X2BlsKkOhoryMomjZ0oDC3zse1FcQ+fVZhl9BUb92F/93Km29SJB8yKZ7zBajMDB7PAMTUxrU5FaSOXTF45NPm5jmwZvm/hpvr+5A/jN8vAlDq8oPIXwUlkbK0JSWhh4dtE+/cw7Dlj+UtrRKfPK5UFQzglqQYDgncWDOYhqJZziLzmZP/zTlxFdyugFO9GRnMNhqc8REeJMAvIraTMyAqRqHlnhBMARl2v9zWI+EgWRIL2YI/tCo69p5MYGzOikXgb1Nx6XINoSrZCYfr0beQoiNrdl7StTswP7dxhm2JDnYTIaY/8oMWDEEEwg5DtTh6ZOd1jXexlA4C6OZUqD+KBGaMILJEG7TMGXWJCKRyjZWM+DG1hz+XZXOj3a2BldnCFF3r7ckQ7A6kMWhorzcUUGhwPFZW9piuKvqpa0Wi3FOcywFiUGANSGTOGXgncmexPGb542absuvG6+Pz/CTNufx2uGpGoeCFDA0qIhLexx9I3oLCPH3n+2sOQ7v/1YPIMmP9sVhhEV1nno+6AsrSDht1UsbGZIHdYKIlShxIhlRnUNSMNzEW+CMhaxE9UGGsvjGRngRCBHvHQzVlXYukeHud7+QakZSiQBpTvlMPDNWhv3MhYwjlPOLywwhQmkqUXv/yHrhs+PB4KyWbm1oS13hsgRMt5R1Gs64iccjzEDxU0d/qtKzYAgNDZ/UcahgiGx3d+9/31ctFa3eBhlCi/CNuVZMMnFyVlR9Odt7hwqCIbYMPKhewRk2gYPhBTjegOE8ULAgGqahWR9HMJduqFT025d/vIbSMzCk/R++rvDjZ1/hr5//OpUnpK0uGUOVbkXOG2XzKVkE9gLDVnwO2w9rvMAyPf2ifuHVC8wqHt+9AH++XpuhhoaGhobGxwyMiQ0sGBjjKPLkq/0rtCZ+KFBNcRBPQQKVO1GazJIkWdQVxo8figOUW8PYdhOG5fhevNL8+jHDkD1wXlxYSTVFbbkZ9FR1b0r9UFA1sNM8XqRuPZkJLIMxhrkfPUP8oeOFbbnMNKENTbZ1CCFG2Pv30VMUBPyRHTAG9U2sGUHbBEy4uoXfiV01z/O+no2aiZA2BEQ0tQOTMUzDgSN3k0kiW5igjEw27dJXLa1Gp+bw60PdlukXFsNeSZzvM/lkFmRx+MjFUpIbVh/eBP2+eobvbwhXCbPhx8Es4YIY9PD2OOduir11lATYupzEBt3YX1TEfP99ehooB+VeNkmYJfsjTc56QfrIqEoGmQvDUfiLjnpGSThfdP3yVYGjxAlHZeKaNT2ztBcOkfVauK3pBKb/eODQi9ZCXQh5AqOc9KbvTU39MJoz1E4Yf9x1y2wRKrOgJtqMGXJPvKV1Z+sBrZg/Eab4PUULXlSUwvMBP2E4mRtkoykaPqMx7wbhHNhPppuvf5QLJHzXZGl4wwxxVVxY2GbCcQJaaGdiZrK5Ty1Akf4f2jFgjscSYiBnFl6tBeqX3HTjG7Y1oD1TKT7wdmzizuMwr96r3CM2VVMSTbBuXvpdLgQKIWwV+NPrX5p6CaBYXCSwBsLiyYzNp44P08nNXeGH1FrAfIKTfpOud0inE8tM4ps1NaBtMWR+s5mZhUolQXVV6bw2mzAgfY4h3CTcpM+kfS0HJqSZc8OmBnhMH0Wh/FO2aTYevfotVxnNGWZQRafLwCOau8IWFzfMUA4z/EvW+vF+6gWyhsjvHV/eI4kSORA7LpAlNE6g7zy8vrtf47qGXLdqKGNCqhS+FqKXztwsx9VSxJtgsJp0sYb4tLyS93osqF+5AVTCoMonqCNwhPJgarKe6RbywOEcBuIs73p7xgLS6WRxs+b0HDQ5ztjiYBzm0rbk2G8Ak+RdBTDGxUFsSjrERdcI1WMsEKbYYs8ySckvXGyByboSpATPwAPvPZezjCoWlx0UZk/OtUPwDWkVDzqfmY5LFOKcbh76XSOqnSnyzMUcn6Vy6bBBQiZz4ivcXIGVEbZ4z+U6oad9MAvQLGFxHqqGECpsIXTFuF5nLSUkZdD2Am007xNYV4lOcIGEyOqVxwepYluM+6jzmQ0aQ/5icjO+xvvd/Dbgn3iGHaBWUrSMwgjrUSzrLgAKtQIYisFUOqgbVld1OcjoT2QNOLGr94B37MLA5Gnn00Ooiwa655ZjMRZumCAlsh2DQDguS21ui4ygOBX+UdiarsZU6rrHYBLEFBTrMPGmgDv5oCeOZEtWj5Ve/SYMxjCFTLkXOJec5ZLz96tsBpv4cNnODZdtqFwy5Y96HDN+t5wuvU1zyA6EAKYXneGtkGvnJrITM+h+nq6X74PW+AuoyAiGzIqXyxWULlxcNTjqeP4qUhtN5IYDVnTTsQ2oqHAJUkdZL17acQjejxgWc7qkiNVZhK5SYyHrBVyuvrpZ+KWMZHqMx7S1/rAPc91kGnB4K7viRShZuHK5elL4faqqsu9YmmBmxLW8iVq/w62Q1Elj/RHZzszsi8+zLka4DgTcEdYX8LV3mm7Ifafy6ITLnVXcEu1lU9/G2NQQyYEIK/kVGWLgG/XkXiBuIEa7UVUV3pEcqfKFnj2RU71cSknuASNhyE/FMKvB7S4Vxfb10KKmuBrE4snCqSff3hFDWWTLo8CVM9rMKmRwutRsjOvY/BQ6ca/MEPXBmyccl4Mkdlw95Xc1FmHGczrnDJeWmUka1/Ra27nJ5yBcyZW1VMYWhOYjS3YJuL1ChhbvzNgIE1IETK7U4W6msiO6PCktEww/4Ca/si2tmgHGsIWOXAENW+d03h7x7ShSnHeBcNGKfDkqKW2H/kqzCA2ThI2v7cJ+LMQIkSDnZVxNhPflA+g4Kqv5FtkdLSfkRwEoKNrQ2Tw//zE2dTgvvV43XUxcWTpIghCLmTCvYDRLPDdG05ag2sdHJi7hg3VzyeSts19Qu74ek1cVo2nfhhuAxaUnwbQ2b7R77mjInQTVXlJZksiOJ6gtLNa5daUF1wEZClISpiaDvMxikzJ25OLQ7nOpkHbKO/WdaTpze1Y1rT3P1zDXHfdnPAe07kIRYyW2LZzj6/GJtRhDtNG5oCqNGKW+Ny6sGUN+IkphwTxUtfe33pdxbSZPdZCBvvrx3HRxHpMn3I6meecKB37LGcdF6bpqu6YeT8piWi1ZvFxRaTVncw0wGn5w6MeZsAi4MxJLrPlo2nUezgjj0TxwXS63phL+wU0XY1rVut/y4ODt/rX55SVXRPv5tDBFmGPJZonALkbjdvBEz20arCeq8cAPo2KeWonLqn5Dnrh2FG4QLb2z0ErKMRxZE6i0Q2zFmFXa88XUIVXoTJbUR21HU40Zw4uLuV1azOWSHWYQiVmMuxVdrh9qGjOPy0liyV0ysSvLCgI7i6ZSmuc9XBGRxYt5GgQWgwVj6Ngt7PhNZjZM3L+3VrNlSCeG9+JlkxmXe8+AdRV+jAF6QqLFKIqn4xAwnsbRoyKz0wDehpVxuGazEp+gF0T++lsf3gAqJ4a/RGolblpqq4k9rrCQn8O+XpMGsNFX9TFLNsLC5+CDzI5JZTnf93RlDZzzMqisahAjsgOL4+2rjQhN3HXCAuCMCsjLxB3DzHo7TTF4mWmVGVbx6p3Dr882XhG0jrcNLK7mcWaXPaGDlVuTGzP0Kkq4KlUtTgVV5sLZpGLMenU4QWm1Xvv9o2JXG03VVjAegfVnoI1yNXjTdW4p+QlBw/uCXLGIq8yv7gb+YFT0Ahjo4+JoISyKJXfYU2YFbI8rxqXr9sp0XuDGZv0PQ1qbQO1HD1GdF05hh70im9tpmpbix55nQCyOxx52xFD6ARmV9aHqjFUHtYE77Ek4sPN560P1rl0fGwyVZ9TxZKs4Rpd6440PxahsAFUKk8u95StGzbZ6RX1Wpr0foZrKVt46CD3D4KOT2kUw2uq4AlrXyz/+BUsaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhqb4f8BIG8v3I0VlGsAAAAASUVORK5CYII=" />
              </div>
            </div> */}
          </div>
      <div className=" bg flex gap-10">
        {
          transaction.length > 0 && transaction.map( (item) =>  {
            return (
              <>
            
              <div>{item.amount}</div>
              <div>{item.destination_account}</div>
              
              </>
            )            
          })
        }
      </div>
        </div>
      </div>


    </Style>
  );
}
