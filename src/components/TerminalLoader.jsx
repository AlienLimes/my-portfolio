import { useEffect, useState } from 'react'
import { CheckCircle2, CircleDashed, Loader2 } from 'lucide-react'

export default function TerminalLoader({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { name: 'Booting up Kriszti...', duration: 1200 },
    { name: 'Loading Skills & Experience', duration: 1000 },
    { name: 'Fetching Projects...', duration: 1500 },
    { name: 'Rendering User Interface', duration: 1200 },
    { name: 'Success', duration: 1000 },
  ]

  useEffect(() => {
    if (currentStep >= steps.length) {
      setTimeout(onComplete, 1000)
      return
    }

    const timer = setTimeout(() => {
      setCurrentStep(prev => prev + 1)
    }, steps[currentStep].duration)

    return () => clearTimeout(timer)
  }, [currentStep, steps, onComplete])

  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50 p-4">
      
      {/* Terminal Window */}
      <div className="w-full max-w-md bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl overflow-hidden font-mono">
        
        {/* Terminal Header (The 3 Dots) */}
        <div className="bg-slate-800/50 px-4 py-3 flex gap-2 border-b border-slate-700">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-xs text-slate-400 flex items-center">
            bash - portfolio-build
          </div>
        </div>

        {/* Pipeline Steps */}
        <div className="p-6 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[35px] top-8 bottom-8 w-0.5 bg-slate-800 -z-10"></div>

          <div className="flex flex-col gap-6">
            {steps.map((step, index) => {
              const isCompleted = currentStep > index
              const isCurrent = currentStep === index

              return (
                <div key={step.name} className="flex items-center gap-4">
                  {/* Status Icon */}
                  <div className="bg-slate-900 z-10">
                    {isCompleted && <CheckCircle2 className="text-green-500 w-6 h-6" />}
                    {isCurrent && <Loader2 className="text-yellow-500 w-6 h-6 animate-spin" />}
                    {!isCompleted && !isCurrent && <CircleDashed className="text-slate-600 w-6 h-6" />}
                  </div>

                  {/* Step Text */}
                  <div className={`flex-1 flex justify-between items-center p-3 rounded-lg border transition-all duration-500 ${
                    isCompleted ? 'border-green-500/30 bg-green-500/10' : 
                    isCurrent ? 'border-yellow-500/30 bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.1)]' : 
                    'border-slate-800 bg-slate-900/50'
                  }`}>
                    <span className={`text-sm ${
                      isCompleted ? 'text-green-400' : 
                      isCurrent ? 'text-yellow-400' : 
                      'text-slate-500'
                    }`}>
                      {step.name}
                    </span>
                    
                    <span className="text-[10px] font-bold tracking-wider uppercase opacity-60">
                      {isCompleted ? 'Done' : isCurrent ? 'Running' : 'Wait'}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
