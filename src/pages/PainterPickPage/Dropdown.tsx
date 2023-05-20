// import React, { useState } from 'react';

// interface Option {
//   _id: number;
//   name: string;
//   imageUrl: string;
// }
// function Dropdown({ options }: { options: Option[] }) {
//   const [selectedPainter, setSelectedPainter] = useState<Option | null>(null);

//   const handlePainterSelect = (e) => {
//     setSelectedPainter(prev => {...selectedPainter, selectedPainter.name = e.target.value});
//   };

//   return (
//     <div>
//       <select onChange={(e) => handlePainterSelect(e.target.value)}>
//         <option value=''>Select an option</option>
//         {options.map((option) => (
//           <option key={option._id} value={option.name}>
//             {option.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }
export {};

// export default Dropdown;
