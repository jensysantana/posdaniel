import React from 'react';

import { Col } from "antd";
import ProductCardDefault from '../../../elements/card/ProductCardDefault';
import SlidingTabsDefault from '../../../elements/sliding-tabs-default/SlidingTabsDefault';
const arrayCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];

export default function ProductSideDefault({ ...props }: any) {
    return (
        <Col span={15}>
            <SlidingTabsDefault>
                <div
                    className="container-card-antd"
                    style={{ padding: 10 }}
                >
                    {arrayCard.map((c, i) => (
                        <ProductCardDefault
                            key={i}
                            {...props}
                            cardClassName="cart-product cursor-pointer"
                            // card-style
                            onDoubleClick={() => {
                                console.log('onDouble ----- click');
                                console.log();
                                console.log('onDouble ----- click');
                            }}
                            onClick={() => {
                                console.log('onclick');
                                console.log();
                                console.log('onclick');
                            }}
                        />
                    ))}
                </div>
            </SlidingTabsDefault>
        </Col>
    )
}
