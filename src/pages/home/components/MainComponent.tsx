import React from 'react';

export default function MainComponent() {
    return (
        <div className="flex h-[calc(100vh-67px)] flex-col items-center justify-center">
            <div className="">
                <div className="flex items-center gap-[40px]">
                    <div className="">
                        <div className="mb-[30px]">
                            <p className="text-[48px] leading-none font-semibold text-gray-50">Front-end</p>
                            <p className="text-[60px] leading-none font-bold text-gray-50">Developer</p>
                        </div>
                        <div className="">
                            <p className="text-[48px] leading-[1.3] font-bold text-white">
                                해결을 전제로 <strong className="text-orange">고민</strong> 합니다
                                <br />
                                그리고 계속 <strong className="text-orange">성장</strong> 합니다
                            </p>
                        </div>
                    </div>

                    <div className="h-[380px] w-[450px] overflow-hidden rounded-[99px]">
                        <img src="/assets/images/profile.jpeg" alt="main_profile" className="h-full w-full object-cover" />
                    </div>
                </div>

                <div className=""></div>
            </div>
        </div>
    );
}
