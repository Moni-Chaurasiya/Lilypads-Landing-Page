// import { Briefcase, Users, UserCircle, Settings, Grid3x3, Search } from 'lucide-react';

// const MobileApp = () => {
//   const collaborators = [
//     { id: 1, color: 'bg-blue-400' },
//     { id: 2, color: 'bg-purple-400' },
//     { id: 3, color: 'bg-pink-400' },
//     { id: 4, color: 'bg-green-400' },
//     { id: 5, color: 'bg-yellow-400' },
//   ];

//   return (
//     <div className="flex gap-4 justify-center items-start flex-wrap">
//       {/* Investments Mobile Card */}
//       <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden">
//         <div className="p-6">
//           <h2 className="text-xl font-bold mb-4">Investments</h2>
          
//           {/* Investment Items */}
//           <div className="space-y-4">
//             {/* Aurora */}
//             <div className="flex gap-3">
//               <img
//                 src="/property-images/image.png"
//                 alt="Aurora"
//                 className="w-20 h-20 object-cover rounded-lg"
//               />
//               <div className="flex-1 min-w-0">
//                 <h3 className="font-bold text-gray-900">Aurora</h3>
//                 <p className="text-xs text-gray-500">164 S.carson court<br/>newport news,VA 23601</p>
//                 <div className="flex items-center gap-2 mt-1">
//                   <span className="text-green-600 text-sm">📈</span>
//                   <span className="font-bold text-sm">+ 3,5% <span className="font-normal text-gray-600">Yield</span></span>
//                 </div>
//                 <div className="flex gap-1 mt-1">
//                   <div className="h-1 flex-1 bg-blue-500 rounded"></div>
//                   <div className="h-1 flex-1 bg-green-500 rounded"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Geminin Appartment */}
//             <div className="flex gap-3">
//               <img
//                 src="/property-images/image.png"
//                 alt="Geminin"
//                 className="w-20 h-20 object-cover rounded-lg"
//               />
//               <div className="flex-1 min-w-0">
//                 <h3 className="font-bold text-gray-900">Geminin Appartment</h3>
//                 <p className="text-xs text-gray-500">164 S.carson court<br/>newport news,VA 23601</p>
//                 <div className="flex items-center gap-2 mt-1">
//                   <span className="text-green-600 text-sm">📈</span>
//                   <span className="font-bold text-sm">+ 3,5% <span className="font-normal text-gray-600">Yield</span></span>
//                 </div>
//                 <div className="flex gap-1 mt-1">
//                   <div className="h-1 flex-1 bg-blue-500 rounded"></div>
//                   <div className="h-1 flex-1 bg-green-500 rounded"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Genisis */}
//             <div className="flex gap-3">
//               <img
//                 src="/property-images/image.png"
//                 alt="Genisis"
//                 className="w-20 h-20 object-cover rounded-lg"
//               />
//               <div className="flex-1 min-w-0">
//                 <h3 className="font-bold text-gray-900">Genisis</h3>
//                 <p className="text-xs text-gray-500">164 S.carson court<br/>newport news,VA 23601</p>
//                 <div className="flex items-center gap-2 mt-1">
//                   <span className="text-green-600 text-sm">📈</span>
//                   <span className="font-bold text-sm">+ 3,5% <span className="font-normal text-gray-600">Yield</span></span>
//                 </div>
//                 <div className="flex gap-1 mt-1">
//                   <div className="h-1 flex-1 bg-blue-500 rounded"></div>
//                   <div className="h-1 flex-1 bg-green-500 rounded"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Navigation */}
//         <div className="flex justify-around items-center py-4 border-t">
//           <button className="p-2">
//             <Grid3x3 className="w-6 h-6 text-primary-purple" />
//             <span className="block w-1 h-1 bg-primary-purple rounded-full mx-auto mt-1"></span>
//           </button>
//           <button className="p-2">
//             <Search className="w-6 h-6 text-gray-400" />
//           </button>
//           <button className="p-2">
//             <UserCircle className="w-6 h-6 text-gray-400" />
//           </button>
//           <button className="p-2">
//             <Settings className="w-6 h-6 text-gray-400" />
//           </button>
//         </div>
//       </div>

//       {/* Profile Mobile Card */}
//       <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden">
//         <div className="relative h-32 bg-gradient-to-br from-blue-400 to-purple-400">
//           <img
//             src="/property-images/image.png"
//             alt="Background"
//             className="w-full h-full object-cover opacity-50"
//           />
//         </div>
        
//         <div className="px-6 pb-6 -mt-12">
//           {/* Profile Picture */}
//           <div className="w-24 h-24 rounded-full bg-white p-1 mb-4">
//             <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white text-2xl font-bold">
//               JC
//             </div>
//           </div>

//           <h2 className="text-xl font-bold">Julie Craig</h2>
//           <p className="text-gray-500 text-sm mb-6">Investor</p>

//           {/* Stats */}
//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
//                 <Briefcase className="w-6 h-6 text-primary-purple" />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">68</p>
//                 <p className="text-xs text-gray-500">Deals</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
//                 <Users className="w-6 h-6 text-green-600" />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">80%</p>
//                 <p className="text-xs text-gray-500">Match</p>
//               </div>
//             </div>
//           </div>

//           {/* Financial Info */}
//           <div className="space-y-4 mb-6">
//             <div className="flex justify-between items-center">
//               <span className="text-gray-600">Borrowed</span>
//               <span className="text-2xl font-bold">$ 350,000</span>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-gray-600">Paid</span>
//               <div className="text-right">
//                 <span className="text-2xl font-bold">$ 184,000</span>
//                 <span className="text-green-600 text-sm ml-2">62%</span>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-gray-600">Earned</span>
//               <div className="text-right">
//                 <span className="text-2xl font-bold">$ 166,000</span>
//                 <span className="text-green-600 text-sm ml-2">38%</span>
//               </div>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-gray-600">Loan Term</span>
//               <span className="text-2xl font-bold">12 <span className="text-sm font-normal text-gray-600">Months</span></span>
//             </div>
//           </div>

//           {/* Collaborators */}
//           <div className="flex items-center gap-3">
//             <div className="flex -space-x-2">
//               {collaborators.map((collab) => (
//                 <div
//                   key={collab.id}
//                   className={`w-10 h-10 rounded-full border-2 border-white ${collab.color}`}
//                 ></div>
//               ))}
//               <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
//                 +14
//               </div>
//             </div>
//             <p className="text-sm text-gray-600">19 Collaborators</p>
//           </div>
//         </div>

//         {/* Bottom Navigation */}
//         <div className="flex justify-around items-center py-4 border-t">
//           <button className="p-2">
//             <Grid3x3 className="w-6 h-6 text-primary-purple" />
//             <span className="block w-1 h-1 bg-primary-purple rounded-full mx-auto mt-1"></span>
//           </button>
//           <button className="p-2">
//             <Search className="w-6 h-6 text-gray-400" />
//           </button>
//           <button className="p-2">
//             <UserCircle className="w-6 h-6 text-gray-400" />
//           </button>
//           <button className="p-2">
//             <Settings className="w-6 h-6 text-gray-400" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileApp;
import { Briefcase, Users, UserCircle, Settings, Grid3x3, Search } from 'lucide-react';

const MobileApp = () => {
  const collaborators = [
    { id: 1, color: 'bg-blue-400' },
    { id: 2, color: 'bg-purple-400' },
    { id: 3, color: 'bg-pink-400' },
    { id: 4, color: 'bg-green-400' },
    { id: 5, color: 'bg-yellow-400' },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-6 lg:gap-8 w-full mb-24 ">
      
      {/* Left Mobile Device - Investments List */}
      <div className="w-full max-w-[340px] lg:max-w-[360px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex-shrink-0">
        <div className="p-6 lg:p-7">
          <h2 className="text-xl lg:text-xl font-bold mb-2">Investments</h2>
          
          {/* Investment Items */}
          <div className="space-y-4">
            {/* Aurora */}
            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex gap-3 mb-3">
                <img
                  src="/property-images/image.png"
                  alt="Aurora"
                  className="w-20 h-20 object-cover rounded-xl"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-base">Aurora</h3>
                  <p className="text-xs text-gray-500">164 S.carson court<br/>newport news,VA 23601</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-600 text-sm">📈</span>
                <span className="font-bold text-sm">+ 3,5% <span className="font-normal text-gray-600">Yield</span></span>
              </div>
              
              <div className="flex gap-1 mb-3">
                <div className="h-2 flex-[3] bg-blue-500 rounded-full"></div>
                <div className="h-2 flex-[2] bg-green-500 rounded-full"></div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xs text-gray-500">Committed</p>
                  <p className="text-sm font-bold">$219,278</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Distribution</p>
                  <p className="text-sm font-bold">$710,568</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Contribution</p>
                  <p className="text-sm font-bold">$928,541</p>
                </div>
              </div>
            </div>

            {/* Geminin Appartment */}
            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex gap-3 mb-3">
                <img
                  src="/property-images/image.png"
                  alt="Geminin"
                  className="w-20 h-20 object-cover rounded-xl"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-base">Geminin Appartment</h3>
                  <p className="text-xs text-gray-500">164 S.carson court<br/>newport news,VA 23601</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-600 text-sm">📈</span>
                <span className="font-bold text-sm">+ 3,5% <span className="font-normal text-gray-600">Yield</span></span>
              </div>
              
              <div className="flex gap-1 mb-3">
                <div className="h-2 flex-[2] bg-blue-500 rounded-full"></div>
                <div className="h-2 flex-[3] bg-green-500 rounded-full"></div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xs text-gray-500">Committed</p>
                  <p className="text-sm font-bold">$105,555</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Distribution</p>
                  <p className="text-sm font-bold">$473,685</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Contribution</p>
                  <p className="text-sm font-bold">$948,355</p>
                </div>
              </div>
            </div>

            {/* Genisis */}
            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex gap-3 mb-3">
                <img
                  src="/property-images/image.png"
                  alt="Genisis"
                  className="w-20 h-20 object-cover rounded-xl"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-base">Genisis</h3>
                  <p className="text-xs text-gray-500">164 S.carson court<br/>newport news,VA 23601</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-600 text-sm">📈</span>
                <span className="font-bold text-sm">+ 3,5% <span className="font-normal text-gray-600">Yield</span></span>
              </div>
              
              <div className="flex gap-1 mb-3">
                <div className="h-2 flex-[2] bg-blue-500 rounded-full"></div>
                <div className="h-2 flex-[3] bg-green-500 rounded-full"></div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xs text-gray-500">Committed</p>
                  <p className="text-sm font-bold">$169.43</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Distribution</p>
                  <p className="text-sm font-bold">$854.08</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Contribution</p>
                  <p className="text-sm font-bold">$275.43</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        {/* <div className="flex justify-around items-center py-4 border-t bg-white">
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
        </div> */}
      </div>

      {/* Right Mobile Device - Profile */}
      <div className="w-full max-w-[340px] lg:max-w-[360px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex-shrink-0">
        <div className="relative h-40 bg-gradient-to-br from-blue-400 to-purple-400">
          <img
            src="/property-images/image.png"
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        <div className="px-6 lg:px-7 pb-6 -mt-12">
          {/* Profile Picture */}
          <div className="w-24 h-24 rounded-full bg-white p-1 mb-4 shadow-lg">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white text-2xl font-bold">
              JC
            </div>
          </div>

          <h2 className="text-xl font-bold">Julie Craig</h2>
          <p className="text-gray-500 text-sm mb-6">Investor</p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-purple-50 rounded-xl p-3 flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary-purple" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-purple">68</p>
                <p className="text-xs text-gray-500">Deals</p>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-3 flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">80%</p>
                <p className="text-xs text-gray-500">Match</p>
              </div>
            </div>
          </div>

          {/* Financial Info */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Borrowed</span>
              <span className="text-xl font-bold">$ 350,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Paid</span>
              <div className="text-right">
                <span className="text-xl font-bold">$ 184,000</span>
                <span className="text-green-600 text-sm ml-2 font-semibold">62%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Earned</span>
              <div className="text-right">
                <span className="text-xl font-bold">$ 166,000</span>
                <span className="text-green-600 text-sm ml-2 font-semibold">38%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Loan Term</span>
              <span className="text-xl font-bold">12 <span className="text-sm font-normal text-gray-600">Months</span></span>
            </div>
          </div>

          {/* Collaborators */}
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
            <div className="flex -space-x-2">
              {collaborators.map((collab) => (
                <div
                  key={collab.id}
                  className={`w-10 h-10 rounded-full border-2 border-white ${collab.color}`}
                ></div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-white flex items-center justify-center text-xs font-bold text-gray-600">
                +14
              </div>
            </div>
            <p className="text-sm text-gray-600 font-medium">19 Collaborators</p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-around items-center py-4 border-t bg-white">
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
  );
};

export default MobileApp;