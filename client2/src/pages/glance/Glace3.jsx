import React from 'react'

const Glace3 = () => {
    const brestmodel = {
        error: 20,
        info: 40,
        success: 60,
        secondary: 80,
      };
  return (
    <div className="border-2 p-2 rounded-2xl mt-10"> 
          {" "}
          <h1 className="font-semibold text-xl ">Brestcancer model </h1>
          <div className="flex items-center justify-center gap-2 flex-row">
            <progress
              className="progress progress-error w-56"
              value={brestmodel.error}
              max="100"
            ></progress>
            <h1>{brestmodel.error}%</h1>
          </div>
          <div className="flex items-center justify-center gap-2 flex-row">
            <progress
              className="progress progress-info w-56"
              value={brestmodel.info}
              max="100"
            ></progress>
            <h1>{brestmodel.info}%</h1>
          </div>
          <div className="flex items-center justify-center gap-2 flex-row">
            <progress
              className="progress progress-success w-56"
              value={brestmodel.success}
              max="100"
            ></progress>
            <h1>{brestmodel.success}%</h1>
          </div>
          <div className="flex items-center justify-center gap-2 flex-row">
            <progress
              className="progress progress-secondary w-56"
              value={brestmodel.secondary}
              max="100"
            ></progress>
            <h1>{brestmodel.secondary}%</h1>
          </div>
        </div>
  )
}

export default Glace3