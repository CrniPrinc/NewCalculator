import React, { useState } from 'react';
import '../../app.css';
import styles from './incomeDetails.module.css';

const IncomeDetails = ({
    incomeButton,
    income,
    setIncome,
    setTabIndex,
    setActiveTab,
    setOptionSelected,
    setIncomeButton,
    setData,
    optionSelected,
    activeNet,
    setActiveNet,
    activeGross,
    setActiveGross
}) => {
    function createData(frequency, grossIncome, tax, netIncome) {
        return { frequency, grossIncome, tax, netIncome };
    }

    const calculateNetWeekly = (rows) => {
        const frequency = 'Weekly';
        const grossIncome = +income + income * 0.2;
        const tax = income * 0.2;
        const netIncome = income;
        const frequency1 = 'Fortnightly';
        const grossIncome1 = +income * 2 + income * 0.2 * 2;
        const tax1 = income * 2 * 0.2;
        const netIncome1 = income * 2;
        const frequency2 = 'Monthly';
        const grossIncome2 = income * 4 + income * 0.2 * 4;
        const tax2 = income * 4 * 0.2;
        const netIncome2 = income * 4;
        const frequency3 = 'Annually';
        const grossIncome3 = +income * 4 * 12 + income * 0.2 * 4 * 12;
        const tax3 = income * 4 * 12 * 0.2;
        const netIncome3 = income * 4 * 12;

        rows.push(createData(frequency, grossIncome, tax, netIncome));
        rows.push(createData(frequency1, grossIncome1, tax1, netIncome1));
        rows.push(createData(frequency2, grossIncome2, tax2, netIncome2));
        rows.push(createData(frequency3, grossIncome3, tax3, netIncome3));

        return rows;
    };

    const calculateNetFortnightly = (rows) => {
        const frequency = 'Weekly';
        const grossIncome = income / 2 + (income / 2) * 0.2;
        const tax = (income / 2) * 0.2;
        const netIncome = income / 2;
        const frequency1 = 'Fortnightly';
        const grossIncome1 = +income + income * 0.2;
        const tax1 = income * 0.2;
        const netIncome1 = income;
        const frequency2 = 'Monthly';
        const grossIncome2 = income * 2 + income * 0.2 * 2;
        const tax2 = income * 2 * 0.2;
        const netIncome2 = income * 2;
        const frequency3 = 'Annually';
        const grossIncome3 = income * 2 * 12 + income * 0.2 * 2 * 12;
        const tax3 = income * 2 * 12 * 0.2;
        const netIncome3 = income * 2 * 12;

        rows.push(createData(frequency, grossIncome, tax, netIncome));
        rows.push(createData(frequency1, grossIncome1, tax1, netIncome1));
        rows.push(createData(frequency2, grossIncome2, tax2, netIncome2));
        rows.push(createData(frequency3, grossIncome3, tax3, netIncome3));

        return rows;
    };

    const calculateNetMonthly = (rows) => {
        const frequency = 'Weekly';
        const grossIncome = income / 4 + (income / 4) * 0.2;
        const tax = (income / 4) * 0.2;
        const netIncome = income / 4;
        const frequency1 = 'Fortnightly';
        const grossIncome1 = income / 2 + (income / 2) * 0.2;
        const tax1 = (income / 2) * 0.2;
        const netIncome1 = income / 2;
        const frequency2 = 'Monthly';
        const grossIncome2 = +income + income * 0.2;
        const tax2 = income * 0.2;
        const netIncome2 = income;
        const frequency3 = 'Annually';
        const grossIncome3 = income * 12 + income * 0.2 * 12;
        const tax3 = income * 12 * 0.2;
        const netIncome3 = income * 12;

        rows.push(createData(frequency, grossIncome, tax, netIncome));
        rows.push(createData(frequency1, grossIncome1, tax1, netIncome1));
        rows.push(createData(frequency2, grossIncome2, tax2, netIncome2));
        rows.push(createData(frequency3, grossIncome3, tax3, netIncome3));

        return rows;
    };

    const calculateNetAnnually = (rows) => {
        const frequency = 'Weekly';
        const grossIncome = income / 12 / 4 + (income / 12 / 4) * 0.2;
        const tax = (income / 12 / 4) * 0.2;
        const netIncome = income / 12 / 4;
        const frequency1 = 'Fortnightly';
        const grossIncome1 = income / 12 / 2 + (income / 12 / 2) * 0.2;
        const tax1 = (income / 12 / 2) * 0.2;
        const netIncome1 = income / 12 / 2;
        const frequency2 = 'Monthly';
        const grossIncome2 = income / 12 + (income / 12) * 0.2;
        const tax2 = (income / 12) * 0.2;
        const netIncome2 = income / 12;
        const frequency3 = 'Annually';
        const grossIncome3 = +income + income * 0.2;
        const tax3 = income * 0.2;
        const netIncome3 = income;

        rows.push(createData(frequency, grossIncome, tax, netIncome));
        rows.push(createData(frequency1, grossIncome1, tax1, netIncome1));
        rows.push(createData(frequency2, grossIncome2, tax2, netIncome2));
        rows.push(createData(frequency3, grossIncome3, tax3, netIncome3));

        return rows;
    };

    const calculateGrossWeekly = (rows) => {
        const frequency = 'Weekly';
        const grossIncome = income;
        const tax = income * 0.2;
        const netIncome = income - income * 0.2;
        const frequency1 = 'Fortnightly';
        const grossIncome1 = +income * 2 + income * 0.2 * 2;
        const tax1 = income * 2 * 0.2;
        const netIncome1 = income * 2 - income * 0.2 * 2;
        const frequency2 = 'Monthly';
        const grossIncome2 = +income * 4 + income * 0.2 * 4;
        const tax2 = income * 4 * 0.2;
        const netIncome2 = income * 4 - income * 0.2 * 4;
        const frequency3 = 'Annually';
        const grossIncome3 = +income * 4 * 12 + income * 0.2 * 4 * 12;
        const tax3 = income * 4 * 12 * 0.2;
        const netIncome3 = income * 4 * 12 - income * 0.2 * 4 * 12;

        rows.push(createData(frequency, grossIncome, tax, netIncome));
        rows.push(createData(frequency1, grossIncome1, tax1, netIncome1));
        rows.push(createData(frequency2, grossIncome2, tax2, netIncome2));
        rows.push(createData(frequency3, grossIncome3, tax3, netIncome3));

        return rows;
    };

    const calculateGrossFortnightly = (rows) => {
        const frequency = 'Weekly';
        const grossIncome = income / 2;
        const tax = (income / 2) * 0.2;
        const netIncome = income / 2 - (income / 2) * 0.2;
        const frequency1 = 'Fortnightly';
        const grossIncome1 = income;
        const tax1 = income * 0.2;
        const netIncome1 = income - income * 0.2;
        const frequency2 = 'Monthly';
        const grossIncome2 = income * 2;
        const tax2 = income * 2 * 0.2;
        const netIncome2 = income * 2 - income * 0.2 * 2;
        const frequency3 = 'Annually';
        const grossIncome3 = income * 2 * 12;
        const tax3 = income * 2 * 12 * 0.2;
        const netIncome3 = income * 2 * 12 - income * 0.2 * 2 * 12;

        rows.push(createData(frequency, grossIncome, tax, netIncome));
        rows.push(createData(frequency1, grossIncome1, tax1, netIncome1));
        rows.push(createData(frequency2, grossIncome2, tax2, netIncome2));
        rows.push(createData(frequency3, grossIncome3, tax3, netIncome3));

        return rows;
    };

    const calculateGrossMonthly = (rows) => {
        const frequency = 'Weekly';
        const grossIncome = income / 4;
        const tax = (income / 4) * 0.2;
        const netIncome = income / 4 - (income / 4) * 0.2;
        const frequency1 = 'Fortnightly';
        const grossIncome1 = income / 2;
        const tax1 = (income / 2) * 0.2;
        const netIncome1 = income / 2 - (income / 2) * 0.2;
        const frequency2 = 'Monthly';
        const grossIncome2 = income;
        const tax2 = income * 0.2;
        const netIncome2 = income - income * 0.2;
        const frequency3 = 'Annually';
        const grossIncome3 = income * 12;
        const tax3 = income * 12 * 0.2;
        const netIncome3 = income * 12 - income * 0.2 * 12;

        rows.push(createData(frequency, grossIncome, tax, netIncome));
        rows.push(createData(frequency1, grossIncome1, tax1, netIncome1));
        rows.push(createData(frequency2, grossIncome2, tax2, netIncome2));
        rows.push(createData(frequency3, grossIncome3, tax3, netIncome3));

        return rows;
    };

    const calculateGrossAnnually = (rows) => {
        const frequency = 'Weekly';
        const grossIncome = income / 12 / 4;
        const tax = (income / 12 / 4) * 0.2;
        const netIncome = income / 12 / 4 - (income / 12 / 4) * 0.2;
        const frequency1 = 'Fortnightly';
        const grossIncome1 = income / 12 / 2;
        const tax1 = (income / 12 / 2) * 0.2;
        const netIncome1 = income / 12 / 2 - (income / 12 / 2) * 0.2;
        const frequency2 = 'Monthly';
        const grossIncome2 = income / 12;
        const tax2 = (income / 12) * 0.2;
        const netIncome2 = income / 12 - (income / 12) * 0.2;
        const frequency3 = 'Annually';
        const grossIncome3 = income;
        const tax3 = income * 0.2;
        const netIncome3 = income - income * 0.2;

        rows.push(createData(frequency, grossIncome, tax, netIncome));
        rows.push(createData(frequency1, grossIncome1, tax1, netIncome1));
        rows.push(createData(frequency2, grossIncome2, tax2, netIncome2));
        rows.push(createData(frequency3, grossIncome3, tax3, netIncome3));

        return rows;
    };

    const handleCalculateButton = () => {
        setActiveTab('income');
        setTabIndex(1);

        let rows = [];
        let result;
        if (incomeButton == 'gross' && optionSelected === '1')
            result = calculateGrossWeekly(rows);
        else if (incomeButton == 'net' && optionSelected === '1')
            result = calculateNetWeekly(rows);
        else if (incomeButton == 'gross' && optionSelected === '2')
            result = calculateGrossFortnightly(rows);
        else if (incomeButton == 'net' && optionSelected === '2')
            result = calculateNetFortnightly(rows);
        else if (incomeButton == 'gross' && optionSelected === '3')
            result = calculateGrossMonthly(rows);
        else if (incomeButton == 'net' && optionSelected === '3')
            result = calculateNetMonthly(rows);
        else if (incomeButton == 'gross' && optionSelected === '4')
            result = calculateGrossAnnually(rows);
        else if (incomeButton == 'net' && optionSelected === '4')
            result = calculateNetAnnually(rows);

        setData(result);
    };

    return (
        <div className="flex flex-col gap-10 h-full px-5 py-5">
            <div className={styles.header}>Income tax calculator</div>
            <div
                className={`${styles.input} flex flex-col gap-5 justify-start items-start`}
            >
                <span>What is your total income?</span>
                <div className="relative">
                    <span className="absolute my-1 mx-3">$</span>
                    <input
                        placeholder="e.g 1000"
                        value={income}
                        className={`${styles.input} input`}
                        type="number"
                        onChange={(e) => {
                            let value = e.target.value;
                            if (isNaN(value)) setIncome('');
                            else {
                                value = value >= 0 ? value : '';
                                setIncome(value);
                            }
                        }}
                    />
                    <select
                        value={optionSelected}
                        className={`${styles.select} select`}
                        onChange={(e) => setOptionSelected(e.target.value)}
                    >
                        <option value="1">Weekly</option>
                        <option value="2">Fortnightly</option>
                        <option value="3">Monthly</option>
                        <option value="4">Annually</option>
                    </select>
                </div>
            </div>
            <span>Please choose the income type</span>
            <div className={`${styles.actions} flex flex-col gap-5 max-w-md`}>
                <div className="flex gap-3 justify-between w-full">
                    <button
                        onClick={() => {
                            setActiveGross('bg-blue-500 text-white');
                            setActiveNet('');
                            setIncomeButton('gross');
                        }}
                        className={`${styles.button} button  ${
                            activeGross ? activeGross : 'bg-white text-black'
                        }`}
                    >
                        Gross income
                    </button>
                    <button
                        onClick={() => {
                            setIncomeButton('net');
                            setActiveNet('bg-blue-500 text-white');
                            setActiveGross('');
                        }}
                        className={`${styles.button} button ${
                            activeNet ? activeNet : 'bg-white text-black'
                        }`}
                    >
                        Net income
                    </button>
                </div>
                <button
                    onClick={handleCalculateButton}
                    className={`${styles.button} button w-full  text-white`}
                    disabled={!income || (!activeNet && !activeGross)}
                >
                    Calculate
                </button>
            </div>
        </div>
    );
};

export default IncomeDetails;
