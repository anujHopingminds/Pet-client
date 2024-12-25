import React, { useState } from 'react';

function Input() {
    const [discount, setDiscount] = useState(0); // Initialize discount as a number
    const [price, setPrice] = useState({
        basic: 10,
        standard: 100,
        premium: 1000,
    });

    const [discountPrice, setDiscountPrice] = useState({ ...price });

    const handleDiscountChange = (e) => {
        const newDiscount = parseFloat(e.target.value) || 0;
        setDiscount(newDiscount);

        // Calculate discount prices based on the original prices
        setDiscountPrice({
            basic: price.basic - (price.basic * newDiscount) / 100,
            standard: price.standard - (price.standard * newDiscount) / 100,
            premium: price.premium - (price.premium * newDiscount) / 100,
        });
    };

    const handlePriceChange = (e, tier) => {
        const updatedPrice = parseFloat(e.target.value) || 0;
    
        // Update the specific price tier
        // setDiscountPrice((prevPrices) => ({
        //     ...prevPrices,
        //     [tier]: updatedPrice,
        // }));
    
        // Calculate the discount percentage dynamically based on the new price
        if (tier === "basic") {
            const newDiscount = ((price.basic - updatedPrice) / price.basic) * 100;
            setDiscount(newDiscount);
    
            // Update all discount prices based on the new discount
            setDiscountPrice({
                basic: updatedPrice,
                standard: price.standard - (price.standard * newDiscount) / 100,
                premium: price.premium - (price.premium * newDiscount) / 100,
            });
        }
        if (tier === "standard") {
            const newDiscount = ((price.standard - updatedPrice) / price.standard) * 100;
            console.log(newDiscount,'newDiscount')
            setDiscount(newDiscount);    
            // Update all discount prices based on the new discount
            setDiscountPrice({
                basic: price.basic - (price.basic * newDiscount) / 100,
                standard: updatedPrice,
                premium: price.premium - (price.premium * newDiscount) / 100,
            });
        }
        if (tier === "premium") {
            const newDiscount = ((price.premium - updatedPrice) / price.premium) * 100;
            setDiscount(newDiscount);    
            // Update all discount prices based on the new discount
            setDiscountPrice({
                basic: price.basic - (price.basic * newDiscount) / 100,
                standard: price.standard - (price.standard * newDiscount) / 100,
                premium: updatedPrice,
            });
        }
    };

    return (
        <div>
            <label>
                Discount (%):
                <input
                    type="number"
                    value={discount}
                    onChange={handleDiscountChange}
                />
            </label>

            <div>
                <label>
                    Basic Price:
                    <input
                        type="number"
                        value={discountPrice.basic.toFixed(2)}
                        onChange={(e) => handlePriceChange(e, 'basic')}
                    />
                </label>

                <label>
                    Standard Price:
                    <input
                        type="number"
                        value={discountPrice.standard.toFixed(2)}
                        onChange={(e) => handlePriceChange(e, 'standard')}
                    />
                </label>

                <label>
                    Premium Price:
                    <input
                        type="number"
                        value={discountPrice.premium.toFixed(2)}
                        onChange={(e) => handlePriceChange(e, 'premium')}
                    />
                </label>
            </div>
        </div>
    );
}

export default Input;
