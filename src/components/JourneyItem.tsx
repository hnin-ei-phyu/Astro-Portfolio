import { type ReactNode } from 'react'

interface JourneyItemProps {
    year: string;
    title: string;
    body: string;
    icon: ReactNode;
}

const JourneyItem: React.FC<JourneyItemProps> = ({year, title, body, icon}) => {
  return (
    <div className='relative flex gap-6 pb-8 animate-slideIn grooup cursor-pointer transition-all duration-300 hover:scale-[1.02]'>
        <div className='flex flex-col items-center'>
              <div className='w-12 h-12 rounded-full bg-linear-to-br from-indigo-200 to-purple-200 dark:from-indigo-800 dark:to-purple-800 flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-indigo-300/50 dark:group-hover:shadow-indigo-700/50 group-hover:animate-pulse-glow'>
                  {icon}
              </div> 
        
              {/* Line with shimmer + vertical moving glow */}
              <div className="relative w-1 h-full overflow-hidden group">

                {/* Base line */}
                <div
                  className="
                    absolute inset-0 
                    bg-linear-to-b 
                    from-indigo-200 via-purple-200 to-transparent
                    dark:from-indigo-700 dark:via-purple-700
                    transition-all duration-1000
                    group-hover:from-indigo-400 group-hover:via-purple-400
                    dark:group-hover:from-indigo-500 dark:group-hover:via-purple-500
                  "
                />

                {/* Shimmer overlay */}
                <div
                  className="
                    absolute inset-0 
                    opacity-0 
                    group-hover:opacity-100 
                    transition-opacity duration-800
                  "
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, rgba(167, 139, 250, 0.9) 50%, transparent 100%)",
                    backgroundSize: "100% 200%",
                    animation: "shimmer 1.5s ease-in-out infinite",
                  }}
                />

                {/* Vertical moving glow */}
                <div
                  className="
                    absolute left-0 right-0 
                    h-10
                    opacity-0 group-hover:opacity-100 
                    blur-md
                    transition-opacity duration-1000
                    bg-linear-to-b from-purple-400/70 via-indigo-400/70 to-transparent
                    dark:from-purple-300/70 dark:via-indigo-300/70
                    animate-verticalGlow
                  "
                />

              </div>

           
        </div>
        <div className="flex-1 pb-4 transition-all duration-300 group-hover:translate-x-2">
          <div className="text-sm text-indigo-600 dark:text-indigo-400 mb-1 transition-all duration-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 group-hover:tracking-wide">{year}</div>
          <h4 className="text-muted-foreground mb-2 transition-all duration-300 group-hover:text-indigo-900 dark:group-hover:text-indigo-200">{title}</h4>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">{body}</p>
        </div>
    </div>
  )
}

export default JourneyItem
