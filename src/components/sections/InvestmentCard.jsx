import { TrendingUp } from 'lucide-react';

const InvestmentCard = ({ property }) => {
  const { name, address, image, yield: yieldPercent, committed, distribution, contribution } = property;

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Property Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Property Details */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">{address}</p>

        {/* Yield */}
        <div className="flex items-center justify-between mb-3">
          <TrendingUp className="w-8 h-8 text-green-500" strokeWidth={2} />
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">+ {yieldPercent}% <span className="text-base font-normal text-gray-600">Yield</span></p>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-1 mb-4">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 rounded-full"
              style={{ width: '60%' }}
            ></div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full"
              style={{ width: '40%' }}
            ></div>
          </div>
        </div>

        {/* Financial Info */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-xs text-gray-500 mb-1">Committed</p>
            <p className="text-sm font-bold text-gray-900">${committed.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Distribution</p>
            <p className="text-sm font-bold text-gray-900">${distribution.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Contribution</p>
            <p className="text-sm font-bold text-gray-900">${contribution.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default InvestmentCard;