import React from 'react';

const BottomText = () => {
    const date = new Date();
    const CurrentYear = date.getFullYear()
    return (
        <div className="flex items-center justify-center bg-[#F9FAFF] w-[100%] pt-[40px]">
            <p className="font-normal text-center text-[#ddd] text-[14px] py-[12px] bg-[#222E34] w-[100%]">
                © Copyright {CurrentYear}. Bhive Private Limited
            </p>
        </div>
    )
}

export default BottomText;
