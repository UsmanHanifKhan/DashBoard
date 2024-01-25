import { IoNotifications } from "react-icons/io5";
import { BarChart, Bar, Rectangle, YAxis, ResponsiveContainer } from 'recharts';
const Graph1 = () => {
    const data = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 5800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 5800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Page D', uv: 2780, pv: 4908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 5390, pv: 6800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];
    const chartStyle = {
        background: 'linear-gradient(to right, #313860, #151928)',
        borderRadius: '10px',
        padding: '10px',
    };
    const axisStyle = {
        stroke: '#ffffff', // White axis lines
        display: 'none',
    };

    const tickStyle = {
        fill: '#ffffff', // White tick labels
        // display:'none',
    };

    const tickLineStyle = {
        stroke: '#ffffff', // White tick lines
        display: 'none',
    };

    const progressBarStyle = {
        width: '100%',
        height: '4px',
        background: '#ddd',
        position: 'relative',
    };

    const completionBarStyle = {
        width: '80%',
        height: '100%',
        background: '#009688',
        position: 'absolute',
        top: '0',
        left: '0',
    };

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-6 mb-3 rounded bg-white" >
            <ResponsiveContainer width="100%" className={'mt-2  mb-3'} height={250} >
                <BarChart
                    data={data}
                    margin={{ top: 5, right: 30, bottom: 5 }}
                    style={chartStyle}
                    radius={[10, 10, 0, 0]}
                >
                    <YAxis axisLine={axisStyle} tick={tickStyle} tickLine={tickLineStyle} />

                    <Bar dataKey="pv" fill="#ddd" activeBar={<Rectangle fill="pink" stroke="blue" />} barSize={10} />
                    <Bar dataKey="uv" fill="#ddd" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>
            <div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <h1 style={{ fontWeight: 'bold' }}>Active User</h1>
                        <p><span style={{ color: '#009688' }}>(+23)</span> than last week</p>
                    </div>
                    <div>
                        <div className='row'>
                            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                <div className='flex flex-col'>
                                    <div className='flex gap-3'>
                                        <div style={{ background: '#009688', padding: '10px', borderRadius: '10px' }}>
                                            <span className='text-white'><IoNotifications /></span>
                                        </div>
                                        <p className='pt-2'>Users</p>
                                    </div>
                                    <div className='my-2'>
                                        <p className='fs-4 font'>32,999</p>
                                    </div>
                                    <div style={progressBarStyle}>
                                        <div style={completionBarStyle}></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                <div className='flex flex-col'>
                                    <div className='flex gap-3'>
                                        <div style={{ background: '#009688', padding: '10px', borderRadius: '10px' }}>
                                            <span className='text-white'><IoNotifications /></span>
                                        </div>
                                        <p className='pt-2'>Users</p>
                                    </div>
                                    <div className='my-2'>
                                        <p className='fs-4 font'>32,999</p>
                                    </div>
                                    <div style={progressBarStyle}>
                                        <div style={completionBarStyle}></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                <div className='flex flex-col'>
                                    <div className='flex gap-3'>
                                        <div style={{ background: '#009688', padding: '10px', borderRadius: '10px' }}>
                                            <span className='text-white'><IoNotifications /></span>
                                        </div>
                                        <p className='pt-2'>Users</p>
                                    </div>
                                    <div className='my-2'>
                                        <p className='fs-4 font'>32,999</p>
                                    </div>
                                    <div style={progressBarStyle}>
                                        <div style={completionBarStyle}></div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                <div className='flex flex-col'>
                                    <div className='flex gap-3'>
                                        <div style={{ background: '#009688', padding: '10px', borderRadius: '10px' }}>
                                            <span className='text-white'><IoNotifications /></span>
                                        </div>
                                        <p className='pt-2'>Users</p>
                                    </div>
                                    <div className='my-2'>
                                        <p className='fs-4 font'>32,999</p>
                                    </div>
                                    <div style={progressBarStyle}>
                                        <div style={completionBarStyle}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graph1