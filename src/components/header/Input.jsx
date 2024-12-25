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
        setDiscountPrice((prevPrices) => ({
            ...prevPrices,
            [tier]: updatedPrice,
        }));
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
