import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="h-[76px] bg-[#942d3b] shadow-[0px_4px_14px_14px_#404f7a12] flex flex-row px-40" >
                <div className="flex flex-1 justify-start items-center">
                    <p className="[font-family:'Lato-Bold',Helvetica] font-bold text-white text-[30px] tracking-[0] leading-[normal] whitespace-nowrap" >LOGO</p>
                </div>
                <div className="flex flex-1 justify-end items-center gap-16" >
                    <p className="[font-family:'Lato-Regular',Helvetica] font-normal text-[#fff9fa] text-[14px] tracking-[0] leading-[normal]" >
                    <Link to="/">
                        Home
                    </Link>
                    </p>
                    <p className="[font-family:'Lato-Regular',Helvetica] font-normal text-[#fff9fa] text-[14px] tracking-[0] leading-[normal]" >
                    <Link to="/listing">
                    Product Listing
                    </Link>
                        </p>
                </div>
            </div>
        </header>
    )
}