import React, { useMemo } from 'react';

const RatingBars = ({ ratings = [] }) => {
    const { max, total } = useMemo(() => {
        const counts = ratings.map(r => r.count || 0);
        return {
            max: Math.max(1, ...counts),
            total: counts.reduce((a, b) => a + b, 0)
        }
    }, [ratings]);

    return (
        <div>
            <div className='w-[60%] mt-8'>
                <h3 className='text-[20px] font-semibold ml-[80px] mb-[16px]'>Ratings</h3>
                <div className='space-y-3'>
                    {[...ratings].sort((a, b) => {
                        const na = parseInt(a.name);
                        const nb = parseInt(b.name);
                        return nb - na;
                    }).map((r) => {
                        const widthPct = Math.round((r.count / max) * 100);
                        const sharePct = total ? Math.round((r.count / total) * 100) : 0;

                        return (
                            <div key={r.name} className='flex items-center'>
                                <div className='w-20 ml-[80px] shrink-0 text-sm text-[#627382]'>
                                    {r.name}
                                </div>

                                <div className='flex-1'>
                                    <div className='w-[100%] mx-auto bg-[#eef2f6] h-5 overflow-hidden'>
                                        <div className='h-full bg-[#ff8811] rounded-md transition-all' style={{ width: `${widthPct}%` }} aria-label={`${r.name} ${r.count}`}>

                                        </div>
                                    </div>
                                    <div className='w-28 shrink-0 text-right text-sm text-[#0f172a]
                                    '>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default RatingBars;