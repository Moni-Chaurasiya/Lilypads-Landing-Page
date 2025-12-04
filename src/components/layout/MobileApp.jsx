import {
  Briefcase,
  Users,
  UserCircle,
  Settings,
  Grid3x3,
  Search,
} from "lucide-react";

const MobileApp = () => {
  const collaborators = [
    { id: 1, color: "bg-blue-400" },
    { id: 2, color: "bg-purple-400" },
    { id: 3, color: "bg-pink-400" },
    { id: 4, color: "bg-green-400" },
    { id: 5, color: "bg-yellow-400" },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-6 lg:gap-8 w-full mb-24 lg:ml-96 ">
      {/* Left Mobile Device (Investments List) */}
      <div className="relative w-full max-w-[360px] lg:max-w-[360px] flex-shrink-0">
        <div className="bg-gradient-to-br from-white/40 via-white/30 to-gray-200/40 p-3 rounded-[3rem] shadow-2xl backdrop-blur-sm">
          <div className="bg-white rounded-[2.5rem] shadow-lg overflow-visible pb-6">
            <div className="pt-4 lg:p-2">
              <h2 className="text-lg font-bold ml-4 mt-4">Investments</h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Aurora",
                    committed: "$219,278",
                    distribution: "$710,568",
                    contribution: "$928,541",
                    img: "/property-images/image.png",
                    bars: [3, 2],
                  },
                  {
                    title: "Geminin Appartment",
                    committed: "$105,555",
                    distribution: "$473,685",
                    contribution: "$948,355",
                    img: "/property-images/image.png",
                    bars: [2, 3],
                    popOut: true,
                  },
                  {
                    title: "Genisis",
                    committed: "$169.43",
                    distribution: "$854.08",
                    contribution: "$275.43",
                    img: "/property-images/image.png",
                    bars: [2, 3],
                  },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div
                      className={`
                  bg-white rounded-2xl px-4  
                  ${
                    item.popOut
                      ? " mr-4 -ml-10 shadow-xl scale-[1.03] relative z-20"
                      : ""
                  }
                `}
                    >
                      <div className="flex gap-3 mb-3">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-xl"
                        />

                        <div className="flex flex-col justify-between w-full">
                          <div>
                            <h3 className="font-bold text-gray-900 text-base">
                              {item.title}
                            </h3>
                            <p className="text-xs text-gray-500">
                              164 S.carson court <br /> newport news,VA 23601
                            </p>
                          </div>

                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-green-600 text-sm">📈</span>
                            <span className="font-bold text-sm ml-12 my-3">
                              + 3,5%{" "}
                              <span className="font-normal text-gray-600">
                                Yield
                              </span>
                            </span>
                          </div>

                          <div className="space-y-1 ">
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-blue-500 rounded-full"
                                style={{ width: "100%" }}
                              ></div>
                            </div>

                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-green-500 rounded-full"
                                style={{ width: "60%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center mt-3">
                        <div>
                          <p className="text-xs text-gray-500">Committed</p>
                          <p className="text-sm font-bold">{item.committed}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Distribution</p>
                          <p className="text-sm font-bold">
                            {item.distribution}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Contribution</p>
                          <p className="text-sm font-bold">
                            {item.contribution}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-[2px] bg-gray-300 my-3"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="  p-3 bg-white rounded-full shadow-lg flex justify-around items-center border border-gray-200/40 align-bottom absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[calc(100%-4rem)]">
              <button className="p-2 relative">
                <Grid3x3 className="w-6 h-6 text-primary-purple" />
                <span className="block w-1.5 h-1.5 bg-primary-purple rounded-full mx-auto mt-1"></span>
              </button>
              <button className="p-2">
                <Search className="w-6 h-6 text-gray-400" />
              </button>
              <button className="p-2">
                <UserCircle className="w-6 h-6 text-gray-400" />
              </button>
              <button className="p-2">
                <Settings className="w-6 h-6 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>




      {/* Right Mobile Device - Profile */}
      <div className="relative w-full max-w-[360px] lg:max-w-[360px] flex-shrink-0">
        <div className="bg-gradient-to-br from-white/40 via-white/30 to-gray-200/40 p-3 rounded-[3rem] shadow-2xl backdrop-blur-sm">
          <div className="bg-white rounded-[2.5rem] shadow-lg overflow-hidden pb-36">
            <div className="relative h-32 bg-gradient-to-br from-blue-400 to-purple-400 ">
              <img
                src="/property-images/image.png"
                alt="Background"
                className="w-full h-full object-cover opacity-50 "
              />
            </div>

            <div className=" pb-6 -mt-10 ">
              <div className="flex items-center gap-4 mb-6 px-2 ">
                <div className="w-20 h-20 rounded-full bg-white p-1 shadow-lg flex-shrink-0 absolute  z-20">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white text-xl font-bold">
                    JC
                  </div>
                </div>

                <div className="mt-10 ml-24">
                  <h2 className="text-lg font-bold text-gray-900">
                    Julie Craig
                  </h2>
                  <p className="text-gray-500 text-sm">Investor</p>
                </div>
              </div>

              <div className="flex  mb-6 py-2">
                <div className="flex-1 bg-purple-50  p-3 flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Briefcase className="w-5 h-5 text-primary-purple" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-primary-purple leading-none">
                      68
                    </p>
                    <p className="text-xs text-gray-500">Deals</p>
                  </div>
                </div>

                <div className="flex-1 bg-green-50  p-3 flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-green-600 leading-none">
                      80%
                    </p>
                    <p className="text-xs text-gray-500">Match</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-6 px-4">
                <div>
                  <p className="text-xl font-bold text-gray-900">$ 350,000</p>
                  <p className="text-xs text-gray-500 mb-1">Borrowed</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">
                    $ 184,000{" "}
                    <span className="text-sm text-green-600 font-semibold">
                      62%
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mb-1">Paid</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-gray-900">
                    $ 166,000{" "}
                    <span className="text-sm text-green-600 font-semibold">
                      38%
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mb-1">Earned</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">
                    12{" "}
                    <span className="text-sm font-normal text-gray-600">
                      Months
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mb-1">Loan Term</p>
                </div>
              </div>

              <div className=" ml-6 w-72 h-px bg-gray-200 mb-6"></div>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {collaborators.map((collab) => (
                    <div
                      key={collab.id}
                      className={`w-10 h-10 rounded-full border-2 border-white ${collab.color} shadow-sm`}
                    ></div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm">
                    +14
                  </div>
                </div>
                <p className="text-sm text-gray-600">19 Collaborators</p>
              </div>
            </div>

            <div className=" mt-2 p-3 bg-white rounded-full shadow-lg flex justify-around items-center border  border-gray-200/40 align-bottom absolute bottom-7 left-1/2 transform -translate-x-1/2 w-[calc(100%-4rem)] ">
              <button className="p-2 relative">
                <Grid3x3 className="w-6 h-6 text-primary-purple" />
                <span className="block w-1.5 h-1.5 bg-primary-purple rounded-full mx-auto mt-1"></span>
              </button>
              <button className="p-2">
                <Search className="w-6 h-6 text-gray-400" />
              </button>
              <button className="p-2">
                <UserCircle className="w-6 h-6 text-gray-400" />
              </button>
              <button className="p-2">
                <Settings className="w-6 h-6 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
