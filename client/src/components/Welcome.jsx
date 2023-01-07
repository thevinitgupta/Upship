import Planet from "../assets/planet.svg"
export const Welcome = () => {
    
    return (
        <div className="w-full h-4/5 py-4 px-12 flex items-center justify-between">
            <div className="text-white h-full flex-[0.5] flex justify-center flex-col font-hero">
                <p className="text-5xl"><span className="text-[#ffd640] text-7xl">Decentralized</span> and <span className="text-[#ffd640] text-7xl">Secure </span>Storage for Web3.0  </p>
                <p className="py-5 text-2xl text-gray-400">Keep your files safe and accessible</p>
            </div>
            <div className="h-full flex-[0.5] flex items-center">
                <img src={Planet} />
            </div>
        </div>
    )
}