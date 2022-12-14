const Approach = () => (
    <div className="w-[100vw] h-full bg-[#F3F1EC] text-[#1E1E1E]">
        <div className="w-[100%] h-[100%] flex flex-col">
            <div className="pl-[5vw] pt-[5vh]">
                <div className="flex items-center space-x-4">
                    <div className="h-[0.5px] w-[40px] bg-[#1E1E1E]"></div>
                    <p className="uppercase modern text-md tracking-widest">maisons historiques</p>
                </div>
                <h1 className="serif uppercase text-4xl sm:text-6xl">notre approche</h1>
                <p className="serif italic pt-2 text-xl sm:text-2xl pr-2 sm:w-[40%]">Notre approche de mise en valeur des maisons historiques se concentre sur les trois groupes d'éléments suivants:</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center w-[100%] sm:space-x-8 sm:pl-[5vw] sm:pr-[5vw] pt-[5vh] space-y-8 sm:space-y-0 pb-[10vh]">
                <div className="sm:w-full w-[90%] h-[40vh] bg-[#1E1E1E] drop-shadow-lg">
                    <div className="flex flex-col text-center text-white h-full justify-start items-center">
                        <h1 className="serif uppercase text-4xl drop-shadow-2xl pt-[20%]">esthétique</h1>
                        <p className="serif italic text-2xl p-8 drop-shadow-2xl">Les éléments esthétiques: unicité, style architectural, travail manuel</p>
                    </div>
                </div>
                <div className="sm:w-full w-[90%] h-[40vh] bg-[#1E1E1E] drop-shadow-lg">
                    <div className="flex flex-col text-center text-white h-full justify-start items-center">
                        <h1 className="serif uppercase text-4xl drop-shadow-2xl pt-[20%]">culture</h1>
                        <p className="serif italic text-2xl p-8 drop-shadow-2xl">Les éléments du contexte culturel de l’époque historique</p>
                    </div>
                </div>
                <div className="sm:w-full w-[90%] h-[40vh] bg-[#1E1E1E] drop-shadow-lg">
                    <div className="flex flex-col text-center text-white h-full justify-start items-center">
                        <h1 className="serif uppercase text-4xl drop-shadow-2xl pt-[20%]">construction</h1>
                        <p className="serif italic text-2xl p-8 drop-shadow-2xl">Les éléments de la construction ayant un effet positif sur la qualité de vie et sur la santé</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
)

export default Approach;

