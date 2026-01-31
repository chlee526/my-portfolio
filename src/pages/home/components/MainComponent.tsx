export default function MainComponent() {
    return (
        <div className="relative flex h-[calc(100vh-67px)] flex-col items-center justify-center">
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

                <div className="h-[320px] w-[400px] overflow-hidden rounded-[99px]">
                    <img src="/assets/images/profile.jpeg" alt="main_profile" className="h-full w-full object-cover" />
                </div>
            </div>

            <div className="flex items-center justify-center gap-[20px] pt-[40px]">
                <button className="button-primary">
                    <img src="/assets/images/github.svg" alt="github" className="h-[24px] w-[24px]" />
                    <span className="text-[14px] font-bold text-white">GitHub</span>
                </button>
                <button className="button-secondary">
                    <img src="/assets/images/gmail.svg" alt="gmail" className="h-[24px] w-[24px]" />
                    <span>Contact</span>
                </button>
            </div>
            <div className="animate-bounce-slow absolute bottom-[20px] left-[50%] flex flex-col items-center justify-center">
                <span className="text-[14px] text-gray-50">Scroll</span>
                <span>⌵</span>
            </div>
        </div>
    );
}
