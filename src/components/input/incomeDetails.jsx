import React from "react";
import "../../app.css";
import styles from "./incomeDetails.module.css";

const IncomeDetails = ({ activeNet, activeGross,setActiveNet,setActiveGross,incomeButton, income, setIncome, setTabIndex, setActiveTab, setOptionSelected, setIncomeButton, setData}) => {
  
  function createData(frequency, grossIncome, tax, netIncome) {
    return { frequency, grossIncome, tax, netIncome };
  }

  const calculateNet = (rows) => {
    const frequency = "Weekly";
    const grossIncome = +income + income * 0.2;
    const tax = income * 0.2;
    const netIncome = income;
    const frequency1 = "Fortnightly";
    const grossIncome1 = +income * 2 + income * 0.2 * 2;
    const tax1 = income * 2 * 0.2;
    const netIncome1 = income * 2;
    const frequency2 = "Monthly";
    const grossIncome2 = income * 4 + income * 0.2 * 4;
    const tax2 = income * 4 * 0.2;
    const netIncome2 = income * 4;
    const frequency3 = "Annually";
    const grossIncome3 = +income * 4 * 12 + income * 0.2 * 4 * 12;
    const tax3 = income * 4 * 12 * 0.2;
    const netIncome3 = income * 4 * 12;

    rows.push(createData(frequency, grossIncome, tax, netIncome));
    rows.push(createData(frequency1, grossIncome1, tax1, netIncome1));
    rows.push(createData(frequency2, grossIncome2, tax2, netIncome2));
    rows.push(createData(frequency3, grossIncome3, tax3, netIncome3));

    return rows;
  }

  const calculateGross = (rows) => {
    const frequency = "Weekly";
    const grossIncome = income;
    const tax = income * 0.2;
    const netIncome = income - income * 0.2;
    const frequency1 = "Fortnightly";
    const grossIncome1 = +income * 2 + income * 0.2 * 2;
    const tax1 = income * 2 * 0.2;
    const netIncome1 = income * 2 - income * 0.2 * 2;
    const frequency2 = "Monthly";
    const grossIncome2 = +income * 4 + income * 0.2 * 4;
    const tax2 = income * 4 * 0.2;
    const netIncome2 = income * 4 - income * 0.2 * 4;
    const frequency3 = "Annually";
    const grossIncome3 = +income * 4 * 12 + income * 0.2 * 4 * 12;
    const tax3 = income * 4 * 12 * 0.2;
    const netIncome3 = income * 4 * 12 - income * 0.2 * 4 * 12;

    rows.push(createData(frequency, grossIncome, tax, netIncome));
    rows.push(createData(frequency1, grossIncome1, tax1, netIncome1));
    rows.push(createData(frequency2, grossIncome2, tax2, netIncome2));
    rows.push(createData(frequency3, grossIncome3, tax3, netIncome3));
    
    return rows;
  }
  
  const handleCalculateButton = () => {
    setActiveTab("income");
    setTabIndex(1);

    let rows = [];
    let result;
    if(incomeButton == 'gross'){
      result = calculateGross(rows);
    }else if(incomeButton == 'net'){
      result = calculateNet(rows);
    }

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
            onChange={(e) => setIncome(e.target.value)}
          />
          <select className={`${styles.select} select`} onChange={(e) => setOptionSelected(Number(e.target.value))}>
            <option value='1'>Weekly</option>
            <option value='2'>Fortnightly</option>
            <option value='3'>Monthly</option>
            <option value='4'>Annually</option>
          </select>
        </div>
      </div>
      <span>Please choose the income type</span>
      <div className={`${styles.actions} flex flex-col gap-5 max-w-md`}>
        <div className="flex gap-3 justify-between w-full">
          <button
            onClick={() => {
              setActiveGross('bg-blue-500 text-white');
              setActiveNet(undefined);
              setIncomeButton("gross");
            }}
            className={`${styles.button} button  ${activeGross ? activeGross : 'bg-white text-black'}`}
          >
            Gross income
          </button>
          <button
            onClick={() => {
              setIncomeButton("net");
              setActiveNet('bg-blue-500 text-white');
              setActiveGross(undefined);
            }}
            className={`${styles.button} button ${activeNet ? activeNet : 'bg-white text-black'}`}
          >
            Net income
          </button>
        </div>
        <button
          onClick={handleCalculateButton}
          className={`${styles.button} button w-full  text-white`}
          disabled={!income && !activeNet || !activeGross}
        >
          {"Calculate ->"}
        </button>
      </div>
    </div>
  );
};

export default IncomeDetails;
