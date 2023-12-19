export default function Listing() {
    return (
        <>
            <div className="h-[300px] relative">
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(/heroImage.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                    }}
                ></div>
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the alpha value for transparency (0.0 to 1.0)
                        position: 'absolute',
                        top: '0',
                        left: '0',
                    }}
                ></div>
                <div className="flex flex-1 flex-col absolute top-0 left-0 w-full h-full items-center justify-center">
                    <h1 className="px-[30%]" style={{ color: "#FFFFFF", fontWeight: "700", textTransform: "uppercase", fontSize: "58px" }} >LISTING</h1>
                    <p className="px-[30%]" style={{ color: "#FFFFFF", fontWeight: "400", lineHeight: "28px", textTransform: "uppercase", fontSize: "12px" }} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus neque, malesuada sit amet auctor ac, euismod sed enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sed ultricies libero. Morbi porttitor semper nibh, bibendum ultricies elit mollis id.
                    </p>
                </div>
            </div>
            <div className="h-[500px] px-[80px] py-[20px]" >
                <div className="flex flex-1 flex-col" >
                    <h1 className=" text-[#19284E] text-[28px] leading-[33px] font-bold [font-family:'Lato-Bold',Helvetica] uppercase" >LIST OF PRODUCT</h1>
                    <div className="py-[1px]" >
                        <div className="grid grid-cols-5 py-[10] px-[4] bg-[#F3F6F9]">
                            <p className="py-[30]" style={{ fontSize: "13px", fontWeight: "600", padding: "10px 5px", textAlign: "center" }} >Name</p>
                            <p className="py-[30]" style={{ fontSize: "13px", fontWeight: "600", padding: "10px 5px", textAlign: "center" }} >Email</p>
                            <p className="py-[30]" style={{ fontSize: "13px", fontWeight: "600", padding: "10px 5px", textAlign: "center" }} >Product Name</p>
                            <p className="py-[30]" style={{ fontSize: "13px", fontWeight: "600", padding: "10px 5px", textAlign: "center" }} >Rating</p>
                            <p className="py-[30]" style={{ fontSize: "13px", fontWeight: "600", padding: "10px 5px", textAlign: "center" }} >Action</p>
                        </div>
                        {
                            [...Array(5)].map((item, index) => (
                                <div className="grid grid-cols-5 py-[10] px-[2] bg-[#ffffff]">
                                <p className="py-[30]" style={{ fontSize: "13px", fontWeight: "600", padding: "10px 5px", textAlign: "center" }} >Brad Simmons</p>
                                <p className="py-[30]" style={{ fontSize: "13px", fontWeight: "600", padding: "10px 5px", textAlign: "center" }} >Brad@gmail.com</p>
                                <p className="py-[30]" style={{ fontSize: "13px", fontWeight: "600", padding: "10px 5px", textAlign: "center" }} >Inventory Management System</p>
                                <div className="py-[30]" style={{ padding: "10px 5px", display:"flex", justifyContent:"center",alignItems:"center" }} >
                                    <svg width="105" height="23" viewBox="0 0 105 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 17.2501L7.58582 19.3079C7.11735 19.5542 6.53791 19.3741 6.29162 18.9056C6.19354 18.7191 6.1597 18.5054 6.19533 18.2976L6.94287 13.9391L3.77622 10.8524C3.39722 10.483 3.38946 9.87623 3.7589 9.49722C3.90601 9.3463 4.09877 9.24808 4.30734 9.21778L8.68355 8.58188L10.6406 4.61636C10.8749 4.14174 11.4495 3.94688 11.9241 4.18111C12.1131 4.27439 12.2661 4.42737 12.3594 4.61636L14.3165 8.58188L18.6927 9.21778C19.2165 9.29389 19.5794 9.78019 19.5033 10.304C19.473 10.5125 19.3747 10.7053 19.2238 10.8524L16.0572 13.9391L16.8047 18.2976C16.8942 18.8193 16.5438 19.3147 16.0222 19.4042C15.8144 19.4398 15.6008 19.406 15.4142 19.3079L11.5 17.2501Z" fill="#FFA800" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.794 17.2501L27.8798 19.3079C27.4113 19.5542 26.8319 19.3741 26.5856 18.9056C26.4875 18.7191 26.4536 18.5054 26.4893 18.2976L27.2368 13.9391L24.0702 10.8524C23.6912 10.483 23.6834 9.87623 24.0528 9.49722C24.2 9.3463 24.3927 9.24808 24.6013 9.21778L28.9775 8.58188L30.9346 4.61636C31.1688 4.14174 31.7435 3.94688 32.2181 4.18111C32.4071 4.27439 32.5601 4.42737 32.6533 4.61636L34.6104 8.58188L38.9866 9.21778C39.5104 9.29389 39.8733 9.78019 39.7972 10.304C39.7669 10.5125 39.6687 10.7053 39.5178 10.8524L36.3511 13.9391L37.0987 18.2976C37.1881 18.8193 36.8378 19.3147 36.3161 19.4042C36.1084 19.4398 35.8947 19.406 35.7082 19.3079L31.794 17.2501Z" fill="#FFA800" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M52.0884 17.2501L48.1742 19.3079C47.7057 19.5542 47.1263 19.3741 46.88 18.9056C46.7819 18.7191 46.7481 18.5054 46.7837 18.2976L47.5313 13.9391L44.3646 10.8524C43.9856 10.483 43.9778 9.87623 44.3473 9.49722C44.4944 9.3463 44.6872 9.24808 44.8957 9.21778L49.2719 8.58188L51.229 4.61636C51.4633 4.14174 52.0379 3.94688 52.5125 4.18111C52.7015 4.27439 52.8545 4.42737 52.9478 4.61636L54.9049 8.58188L59.2811 9.21778C59.8048 9.29389 60.1678 9.78019 60.0916 10.304C60.0613 10.5125 59.9631 10.7053 59.8122 10.8524L56.6455 13.9391L57.3931 18.2976C57.4826 18.8193 57.1322 19.3147 56.6105 19.4042C56.4028 19.4398 56.1891 19.406 56.0026 19.3079L52.0884 17.2501Z" fill="#FFA800" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M72.3823 17.2501L68.4681 19.3079C67.9997 19.5542 67.4202 19.3741 67.1739 18.9056C67.0759 18.7191 67.042 18.5054 67.0777 18.2976L67.8252 13.9391L64.6585 10.8524C64.2795 10.483 64.2718 9.87623 64.6412 9.49722C64.7883 9.3463 64.9811 9.24808 65.1897 9.21778L69.5659 8.58188L71.523 4.61636C71.7572 4.14174 72.3319 3.94688 72.8065 4.18111C72.9955 4.27439 73.1484 4.42737 73.2417 4.61636L75.1988 8.58188L79.575 9.21778C80.0988 9.29389 80.4617 9.78019 80.3856 10.304C80.3553 10.5125 80.2571 10.7053 80.1061 10.8524L76.9395 13.9391L77.687 18.2976C77.7765 18.8193 77.4262 19.3147 76.9045 19.4042C76.6968 19.4398 76.4831 19.406 76.2965 19.3079L72.3823 17.2501Z" fill="#FFA800" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M92.6763 17.2501L88.7621 19.3079C88.2936 19.5542 87.7142 19.3741 87.4679 18.9056C87.3698 18.7191 87.336 18.5054 87.3716 18.2976L88.1191 13.9391L84.9525 10.8524C84.5735 10.483 84.5657 9.87623 84.9352 9.49722C85.0823 9.3463 85.275 9.24808 85.4836 9.21778L89.8598 8.58188L91.8169 4.61636C92.0512 4.14174 92.6258 3.94688 93.1004 4.18111C93.2894 4.27439 93.4424 4.42737 93.5357 4.61636L95.4928 8.58188L99.869 9.21778C100.393 9.29389 100.756 9.78019 100.68 10.304C100.649 10.5125 100.551 10.7053 100.4 10.8524L97.2334 13.9391L97.981 18.2976C98.0705 18.8193 97.7201 19.3147 97.1984 19.4042C96.9907 19.4398 96.777 19.406 96.5905 19.3079L92.6763 17.2501Z" fill="#FFA800" />
                                    </svg>
                                </div>
                                <div className="py-[30]" style={{ padding: "10px 5px", display:"flex", justifyContent:"center",alignItems:"center" }} >
                                   <button className="text-[#FFFFFF] px-[20px] py-[5px] rounded-[5px] bg-[#932C3B]" >View Details</button>
                                </div>
                            </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}