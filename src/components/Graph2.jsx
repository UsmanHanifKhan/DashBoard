import { YAxis, ResponsiveContainer, AreaChart, XAxis, Area } from 'recharts';

const Graph2 = () => {
    
    const axisStyle = {
        stroke: '#ffffff', // White axis lines
        display: 'none',
    };
    const tickStyles = {
        fill: 'silver', // White tick labels
        // display:'none',
    };

    const tickLineStyle = {
        stroke: '#ffffff', // White tick lines
        display: 'none',
    };



    const datas = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 9400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 5800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 5300,
            amt: 2100,
        },
    ];

  return (
<div className="col-12 col-sm-6 col-md-4 col-lg-5 mb-3 bg-white">
                            <ResponsiveContainer width={'100%'} height="100%">
                                <AreaChart
                                    width={500}
                                    height={400}
                                    data={datas}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <XAxis dataKey="name" axisLine={axisStyle} tick={tickStyles} tickLine={tickLineStyle} />
                                    <YAxis axisLine={axisStyle} tick={tickStyles} tickLine={tickLineStyle} />
                                    <Area
                                        type="monotone"
                                        dataKey="pv"
                                        stackId="1"
                                        stroke="#2D3748"
                                        strokeWidth={4}
                                        fill="url(#colorGradients)"
                                    />
                                    <defs>
                                        <linearGradient id="colorGradients" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="64%" stopColor="#2D37485C" stopOpacity={1} />
                                            <stop offset="100%" stopColor="#2D374800" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>


                                    <Area
                                        type="monotone"
                                        dataKey="pv"
                                        stackId="1"
                                        stroke="#4FD1C5"
                                        strokeWidth={4}
                                        fill="url(#colorGradient)"
                                    />
                                    <defs>
                                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="54%" stopColor="#4FD1C5" stopOpacity={1} />
                                            <stop offset="100%" stopColor="#4FD1C5" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </AreaChart>
                            </ResponsiveContainer>
                            {/* <div className="flex p-3 flex-col h-full rounded border-none bg-secondary justify-between ">
                                <div className='flex flex-col justify-between h-full'>
                                    <div>
                                        <h1 className="text-white fs-3">Build By developer</h1>
                                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cum adipisicing elit. Doloribus, cum.</p>
                                    </div>
                                    <div className=" border-white pb-2">
                                        <p className="text-white">Read More...</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
  )
}

export default Graph2