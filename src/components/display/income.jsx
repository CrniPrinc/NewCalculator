import React, { useEffect, useState } from 'react';
import { Frequency } from '../../constants/frequency';
import styles from './income.module.css';
import CustomizedTables from './table/table';

const Income = ({ option, data, netIncome, setNetIncome }) => {
    const [value, setValue] = useState(null);

    const findIncome = (data) => {
        if (!data || data.length === 0) {
            return;
        }
        let value;
        value = data.find((x) => x.frequency == Frequency[optionSelected]);
        return value?.netIncome;
    };
    useEffect(() => {
        setValue(netIncome);
    }, [netIncome]);

    const [optionSelected, setOptionSelected] = useState(option);

    useEffect(() => {
        setNetIncome(findIncome(data));
    }, [optionSelected]);
    return (
        <div className="flex flex-col gap-10 h-full px-5 py-5 ">
            <div className="header">Income tax calculator</div>
            <div>
                <div>
                    <button className={`${styles.button} button`} disabled>
                        ${value}
                    </button>
                    <span>
                        your net
                        <select
                            className={`${styles.select} select`}
                            onChange={(e) => setOptionSelected(e.target.value)}
                            value={optionSelected}
                        >
                            <option value="1">Weekly</option>
                            <option value="2">Fortnightly</option>
                            <option value="3">Monthly</option>
                            <option value="4">Annually</option>
                        </select>
                        income
                    </span>
                </div>
            </div>
            <CustomizedTables data={data} />
        </div>
    );
};

export default Income;
