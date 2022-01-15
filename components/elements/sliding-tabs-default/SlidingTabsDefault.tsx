import React, { useRef, useState, useEffect } from 'react';

import { Tabs } from "antd";
const { TabPane } = Tabs;
const arrayTabs = [
    {
        name: 'Laptops',
        _id: '1',
        isDefault: false,
    },
    {
        name: 'Celphone',
        _id: '2',
        isDefault: true,
    },
    {
        name: 'Tv\'s',
        _id: '3',
        isDefault: false,
    },
    {
        name: 'Batteries',
        _id: '4',
        isDefault: false,
    },
    {
        name: 'Chargers',
        _id: '5',
        isDefault: false,
    },
    {
        name: 'Cables',
        _id: '6',
        isDefault: false,
    },
    {
        name: 'Speakers',
        _id: '7',
        isDefault: false,
    },
    {
        name: 'Bluetooths',
        _id: '8',
        isDefault: false,
    },
    {
        name: 'LCD\'s',
        _id: '9',
        isDefault: false,
    },
    {
        name: 'Covers',
        _id: '10',
        isDefault: false,
    },
    {
        name: 'Protectors',
        _id: '11',
        isDefault: false,
    },
];

export default function SlidingTabsDefault({ children }: any) {
    const ref = useRef<boolean>(false);

    const [windSize, setWindSize] = useState<number>(300);

    useEffect(() => {
        // make sure your function is being called in client side only
        if (typeof window !== 'undefined' && !ref.current) {
            // detect window screen width function
            ref.current = true;
            setWindSize(window.innerHeight);
        }
        window.addEventListener('resize', () => {
            // console.log(window.innerHeight, window.innerWidth);
            setWindSize(window.innerHeight);
        })
    }, [windSize])

    const [state, setState] = useState({
        mode: 'top',
    });

    function handleModeChange(e: any) {
        const mode = e.target.value;
        setState({ mode });
    }

    const { mode } = state;

    return (
        <div>
            {/* <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
        <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button>
      </Radio.Group> */}
            <Tabs
                defaultActiveKey="1"
                style={{
                    // backgroundColor: '#fff',
                    // overflowY: 'scroll'
                }}
                onClick={() => {
                    console.log('');
                    console.log(999);
                    console.log('');
                }}>
                {/* {[...Array.from({ length: 70 }, (v, i) => i)].map(i => (
          <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}
          >
            Content of tab {i}
          </TabPane>
        ))} */}

                {arrayTabs.map((tb, i) => (
                    <TabPane
                        tab={tb.name}
                        key={tb._id} disabled={i === 28}
                        style={{
                            height: windSize - 126,
                            // backgroundColor: 'violet',
                            overflowY: 'scroll'
                        }}
                    >
                        {children}
                    </TabPane>
                ))}
            </Tabs>
        </div>
    );

}
